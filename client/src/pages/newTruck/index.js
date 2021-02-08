import React from "react";
import { useForm } from "react-hook-form";
import FormField from "../../components/Form/index";
import { useHistory } from 'react-router-dom';
import API from "../../utils/API";
import "./style.css";

function NewTruck() {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  function onSubmit(data) {

    // if (formObject.chassisId) {
    console.log(data);
    API.saveTruck(data)
      .then(
        history.push("/")
      )
      .catch((err) => console.log(err));
  }

  return (
    <div className="row">
      <div className="col-3"></div>
      <div className="col-6 text-center mt-3">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <FormField
            name="chassisId"
            formRef={register}
            description="Chassis ID"
            type="text"
            defaultValue=""
          />
          <FormField
            name="customer"
            formRef={register}
            description="Customer"
            type="text"
            defaultValue=""
          />
          <FormField
            name="location"
            formRef={register}
            description="Location"
            type="text"
            defaultValue=""
          />
          <FormField
            name="purpose"
            formRef={register}
            description="Purpose"
            type="text"
            defaultValue=""
          />
          <FormField
            name="dropOffDate"
            formRef={register}
            description="Drop Off Date"
            type="date"
            defaultValue=""
          />
          <FormField
            name="collectionDate"
            formRef={register}
            description="Collection Date"
            type="date"
            defaultValue=""
          />
          <FormField
            name="contactPerson"
            formRef={register}
            description="Contact Person"
            type="text"
            defaultValue=""
          />
          <FormField
            name="contactEmail"
            formRef={register}
            description="Contact Email"
            type="email"
            defaultValue=""
          />
          <FormField
            name="contactNumber"
            formRef={register}
            description="Contact Number"
            type="text"
            defaultValue=""
          />
          <input type="submit" className="btn btnDark"/>
        </form>
      </div>
    </div>
  );
}

export default NewTruck;

