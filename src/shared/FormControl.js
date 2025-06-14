import React from "react";

const FormControl = ({ type, placeholder, ...rest }) => {
  return (
    <div className="form-control">
      {type === "textarea" ? (
        <textarea className="form-control__field" placeholder={placeholder} {...rest} />
      ) : (
        <input className="form-control__field" type={type} placeholder={placeholder} {...rest} />
      )}
      <span className="form-control__field-underline" />
    </div>
  );
};

export default FormControl;
