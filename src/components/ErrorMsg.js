import React from 'react';

const ErrorMsg = ({ text }) => {
  return text ? <div>Error: {text}</div> : null;
}

export default ErrorMsg;
