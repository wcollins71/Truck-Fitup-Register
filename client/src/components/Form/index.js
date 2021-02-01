import React from "react";
import "./style.css";

function FormField({ name, formRef, description, type }) {
  return (
    <div class="form-group row">
      <label for={name} class="col-sm-4 col-form-label">
        {description}
      </label>
      <div class="col-sm-6">
        <input type={type} class="form-control" ref={formRef} name={name} />
      </div>
    </div>

    /* <div className="input-group input-group-sm mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">{name}:</span>
      </div>
      <input
        name={field}
        type={type}
        class="form-control"
        id={field}
      />
    </div> */
  );
}

export default FormField;
