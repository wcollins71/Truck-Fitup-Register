import React, { useEffect, useState } from "react";
import "./style.css";

function SelectField({ name, formRef, description, defaultValue }) {

  const [currentVal, setCurrentVal] = useState("");

  useEffect(() => {
    setCurrentVal(defaultValue);
  }, [defaultValue])
  
  function onChange(e) {
    setCurrentVal(e.target.value);
  }

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
          value={currentVal}
          onChange={onChange}
        >
          <option value="false">False</option>
          <option value="true">True</option>
        </select>
      </div>
    </div>
  );
}

export default SelectField;
