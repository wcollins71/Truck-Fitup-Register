import React from "react";
import "./style.css";

function FormField({ name, formRef, description, type, defaultValue }) {
  if (defaultValue == null) {
    return (
      <div className="form-group row">
        <label htmlFor={name} className="col-sm-4 col-form-label">
          {description}
        </label>
        <div className="col-sm-6">
          <input type={type} className="form-control" ref={formRef} name={name}/>
        </div>
      </div>
  
    );
  }
  return (
    <div className="form-group row">
      <label htmlFor={name} className="col-sm-4 col-form-label">
        {description}
      </label>
      <div className="col-sm-6">
        <input type={type} className="form-control" ref={formRef} name={name} defaultValue={defaultValue} />
      </div>
    </div>

  );
}

export default FormField;
