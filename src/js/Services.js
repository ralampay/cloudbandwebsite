import axios from "axios";
import React from "react";

export const hasFormError = (errors, key) => {
  return errors[key] && errors[key].length > 0;
}

export const getInputClassName = (errors, key) => {
  return `form-control ${hasFormError(errors, key) ? 'is-invalid' : ''}`;
}

export const renderInputErrors = (errors, key) => {
  if (hasFormError(errors, key)) {
    return (
      <div className="invalid-feedback d-block">
        {errors[key].join(',')}
      </div>
    );
  } else {
    return (
      <div/>
    );
  }
}

export const submitMessage = (payload) => {
  return axios.post(
    'https://lrat0149zk.execute-api.ap-southeast-1.amazonaws.com/Prod/messenger',
    payload,
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json, text/plain, */*',
      }
    }
  )
}
