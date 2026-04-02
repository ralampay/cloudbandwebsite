import axios from "axios";
import React from "react";

const endpoint = "https://lrat0149zk.execute-api.ap-southeast-1.amazonaws.com/Prod/messenger";

export function hasFormError(errors, key) {
  return Array.isArray(errors[key]) && errors[key].length > 0;
}

export function getInputClassName(errors, key) {
  return `form-control ${hasFormError(errors, key) ? "is-invalid" : ""}`.trim();
}

export function renderInputErrors(errors, key) {
  if (!hasFormError(errors, key)) {
    return null;
  }

  return <div className="invalid-feedback d-block">{errors[key].join(", ")}</div>;
}

export function submitMessage(payload) {
  return axios.post(endpoint, payload, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json, text/plain, */*",
    },
  });
}
