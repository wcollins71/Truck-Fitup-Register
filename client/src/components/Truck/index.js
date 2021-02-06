import React from "react";
import FormField from "../Form/index";

function TruckForm(props) {
  return (
    <div>
      <FormField
        name="chassisId"
        formRef={props.register}
        description="Chassis ID"
        type="text"
      />
      <FormField
        name="customer"
        formRef={props.register}
        description="Customer"
        type="text"
      />
      <FormField
        name="location"
        formRef={props.register}
        description="Location"
        type="text"
      />
      <FormField
        name="purpose"
        formRef={props.register}
        description="Purpose"
        type="text"
      />
      <FormField
        name="dropOffDate"
        formRef={props.register}
        description="Drop Off Date"
        type="date"
      />
      <FormField
        name="collectionDate"
        formRef={props.register}
        description="Collection Date"
        type="date"
      />
      <FormField
        name="conactPerson"
        formRef={props.register}
        description="Conact Person"
        type="text"
      />
      <FormField
        name="conactEmail"
        formRef={props.register}
        description="Conact Email"
        type="email"
      />
      <FormField
        name="conactNumber"
        formRef={props.register}
        description="Conact Number"
        type="text"
      />
     </div>
  );
}

export default TruckForm;
