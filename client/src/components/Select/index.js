import React from "react";
import "./style.css";

function SelectField({ name, formRef, description, defaultValue }) {
  console.log(defaultValue)
 return (
    <div className="form-group row">
      <label htmlFor={name} className="col-sm-4 col-form-label">
        {description}
      </label>
      <div className="col-sm-6">
        <select
          className="form-select form-select-lg mb-3" 
          ref={formRef}
          name={name}
          defaultValue={defaultValue}
        > 
          <option value="false">Select</option>  {/* If truck already archived and you make a change, then assumes that it is still active */}
          <option value="false">False</option>
          <option value="true">True</option>
        </select>
      </div>
    </div>
  );
}

export default SelectField;
