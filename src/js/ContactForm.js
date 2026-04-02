import React, { useState } from "react";

import { getInputClassName, renderInputErrors, submitMessage } from "./Services";

const initialFormState = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState("");

  const updateField = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors({});
    setStatusMessage("");
    setIsLoading(true);

    try {
      await submitMessage(formData);
      setStatusMessage("Thanks for reaching out. We’ll get back to you soon.");
      setFormData(initialFormState);
    } catch (error) {
      const responseErrors = error?.response?.data;

      if (responseErrors && typeof responseErrors === "object") {
        setErrors(responseErrors);
      } else {
        setErrors({ general: ["Something went wrong. Please try again."] });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="contact-card">
      <p className="contact-card__eyebrow">Contact</p>
      <h2 className="contact-card__title">Have a project in mind?</h2>
      <p className="contact-card__description">
        Share the problem you are solving, where you are in the process, and what kind of system you need help
        delivering.
      </p>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className={getInputClassName(errors, "name")}
            id="name"
            name="name"
            value={formData.name}
            disabled={isLoading}
            onChange={updateField}
          />
          {renderInputErrors(errors, "name")}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className={getInputClassName(errors, "email")}
            id="email"
            name="email"
            value={formData.email}
            disabled={isLoading}
            onChange={updateField}
          />
          {renderInputErrors(errors, "email")}
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="5"
            className={getInputClassName(errors, "message")}
            value={formData.message}
            disabled={isLoading}
            onChange={updateField}
          />
          {renderInputErrors(errors, "message")}
        </div>

        {renderInputErrors(errors, "general")}
        {statusMessage ? (
          <p className="contact-form__status" aria-live="polite">
            {statusMessage}
          </p>
        ) : null}

        <button type="submit" className="btn btn-accent btn-lg w-100 justify-content-center" disabled={isLoading}>
          {isLoading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}
