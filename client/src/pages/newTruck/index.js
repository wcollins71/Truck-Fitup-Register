import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormField from "../../components/Form/index";
import API from "../../utils/API";
import "./style.css";

function NewTruck() {
  const { register, handleSubmit } = useForm();
  const [formObject, setFormObject] = useState({
    chassisId: "",
    customer: "",
    location: "",
    purpose: "",
    dropOffDate: "",
    collectionDate: "",
    conactPerson: "",
    conactEmail: "",
    conactNumber: "",
  });

  function onSubmit(data) {

    // if (formObject.chassisId) {
    console.log(data);
    API.saveTruck(data)
      .then(
        console.log("Submitted.")
      )
      .catch((err) => console.log(err));
  }

  return (
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6 text-center mt-3">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          {/* <div class="form-group row">
            <label for={field} class="col-sm-4 col-form-label">
            Chassis ID
            </label>
            <div class="col-sm-6">
              <input type="text" class="form-control" id="chassisId" />
            </div>
          </div> */}
          <FormField
            name="chassisId"
            formRef={register}
            description="Chassis ID"
            type="text"
          />
          <FormField
            name="customer"
            formRef={register}
            description="Customer"
            type="text"
          />
          <FormField
            name="location"
            formRef={register}
            description="Location"
            type="text"
          />
          <FormField
            name="purpose"
            formRef={register}
            description="Purpose"
            type="text"
          />
          <FormField
            name="dropOffDate"
            formRef={register}
            description="Drop Off Date"
            type="date"
          />
          <FormField
            name="collectionDate"
            formRef={register}
            description="Collection Date"
            type="date"
          />
          <FormField
            name="conactPerson"
            formRef={register}
            description="Conact Person"
            type="text"
          />
          <FormField
            name="conactEmail"
            formRef={register}
            description="Conact Email"
            type="email"
          />
          <FormField
            name="conactNumber"
            formRef={register}
            description="Conact Number"
            type="text"
          />
          <input type="submit" className="btn btnDark"/>
        </form>
      </div>
    </div>
  );
}

export default NewTruck;
// disabled={!(formObject.chassisId )}
