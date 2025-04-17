import React, { useState } from "react";

import { submitMessage, getInputClassName, renderInputErrors } from "./Services";

export default ContactForm = () => {
  const [name, setName]           = useState("");
  const [email, setEmail]         = useState("");
  const [message, setMessage]     = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors]       = useState({});

  const clearFields = () => {
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <React.Fragment>
      <div className="container--form bg-primary text-light py-3 px-4 rounded shadow-sm">
        <h2 className="text-white">
          Have a project in mind?
        </h2>
        <p>
          Please fill out the form below to start your project with us. We're excited to work together!
        </p>
        <div className="mb-3">
          <label for="name" className="form-label">Full Name</label>
          <input
            type="text" 
            className={getInputClassName(errors, 'name')}
            id="name" 
            name="name"
            value={name}
            disabled={isLoading}
            onChange={(event) => { setName(event.target.value); }}
          />
          {renderInputErrors(errors, 'name')}
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">Email</label>
          <input
            type="email" 
            className={getInputClassName(errors, 'email')}
            id="email" 
            name="email"
            value={email}
            disabled={isLoading}
            onChange={(event) => { setEmail(event.target.value); }}
          />
          {renderInputErrors(errors, 'email')}
        </div>
        <div className="mb-3">
          <label for="message" className="form-label">Message</label>
          <textarea 
            name="message" 
            id="message" 
            cols="30" 
            rows="3" 
            className={getInputClassName(errors, 'message')}
            value={message} 
            disabled={isLoading}
            onChange={(event) => { setMessage(event.target.value); }}
          />
          {renderInputErrors(errors, 'message')}
        </div>
        <button 
          type="submit" 
          className="btn btn-lg btn-accent d-block w-100"
          disabled={isLoading}
          onClick={() => {
            setErrors({});
            setIsLoading(true);

            const payload = {
              name: name,
              email: email,
              message: message
            }

            submitMessage(payload).then((res) => {
              alert("Thanks for reaching out!");
              console.log("res:");
              console.log(res);
              clearFields();
            }).catch((res) => {
              console.log("Error in posting message:");
              console.log(res);

              if (res.response && res.response.data) {
                setErrors(res.response.data);
              } else {
                setErrors({ general: ['Something went wrong'] });
              }
            }).finally(() => {
              setIsLoading(false);
            });
          }}
        >
          SUBMIT
        </button>
      </div>
    </React.Fragment>
  )
}
