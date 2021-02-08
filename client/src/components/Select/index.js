import React from "react";
import "./style.css";

function SelectField({ name, formRef, description, defaultValue }) {
  return (
    <div className="form-group row">
      <label htmlFor={name} className="col-sm-4 col-form-label">
        {description}
      </label>
      <div className="col-sm-6">
        {/* <input className="form-control" ref={formRef} name="archived"></input> */}
        
        <select  className="form-select form-select-lg mb-3" ref={formRef} name={name} defaultValue={defaultValue}>
                 <option value="">Select</option>
          <option value="false">False</option>
          <option value="true">True</option>
        </select>
      </div>
    </div>
  );
}

export default SelectField;
