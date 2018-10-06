import React from 'react';
import { errorMessages } from 'constants/errorMessages';

const ErrorMsg = ({ text }) => {
  const message = errorMessages[text];
  if (message) {
    return (
      <div>Error: {message}</div>
    );
  }
  else
    return null;
}

export default ErrorMsg;
