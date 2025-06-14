import React from 'react';

const FormControl = ({ type, placeholder, ...rest }) => {
  if (type === 'textarea') {
    return <textarea placeholder={placeholder} {...rest} />;
  }

  return <input type={type} placeholder={placeholder} {...rest} />;
};

export default FormControl;
