import React from "react";
import "./style.css";

function FormField({ name, formRef, description, defaultValue }) {
  if (defaultValue == null) {
    return (
      <div className="form-group row">
        <select name="name" ref={formRef}>
          <option value="True">True</option>
          <option value="False">False</option>
        </select>
        {/* <select htmlFor={name} className="col-sm-4 col-form-label">
          {description}
        </select> */}
        {/* <div className="col-sm-6">
          <input
            type={type}
            className="form-control"
            ref={formRef}
            name={name}
          />
        </div> */}
      </div>
    );
  }
  return (
    <div className="form-group row">
   <select name="name" ref={formRef}>
          <option value="True">True</option>
          <option value="False">False</option>
        </select>


      {/* <label htmlFor={name} className="col-sm-4 col-form-label">
        {description}
      </label>
      <div className="col-sm-6">
        <input
          type={type}
          className="form-control"
          ref={formRef}
          name={name}
          defaultValue={defaultValue}
        /> */}
      {/* </div> */}
    </div>
  );
}

export default FormField;
