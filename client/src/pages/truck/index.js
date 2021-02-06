import React, { useState, useEffect  } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import FormField from "../../components/Form/index";
import API from "../../utils/API";
import "./style.css";
var moment = require("moment");


export default function Truck(props) {

  const [truck, setTruck] = useState({});

  const {id} = useParams()
  useEffect(() => {
    console.log("Starting new Load truck!")

    API.getTruck(id)
    .then((res) => {setTruck(res.data)
      console.log(res.data)
      console.log("Loaded truck!")
      console.log(register)
    })
    .catch((err) => console.log("This error: " + err));
  }, []);

  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    data["_id"] = id;
    // if (formObject.chassisId) {
    console.log(data);
    API.updateTruck(data)
      .then(
        console.log("Submitted.", data)
      )
      .catch((err) => console.log(err));
  }


  return (
    <div className="row">
      <div className="col-3"></div>
      <div className="col-6 text-center mt-3">
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField
        name="chassisId"
        formRef={register}
        description="Chassis ID"
        type="text"
        defaultValue={truck.chassisId}
      />
      <FormField
        name="customer"
        formRef={register}
        description="Customer"
        type="text"
        defaultValue={truck.customer}
      />
      <FormField
        name="location"
        formRef={register}
        description="Location"
        type="text"
        defaultValue={truck.location}
      />
      <FormField
        name="purpose"
        formRef={register}
        description="Purpose"
        type="text"
        defaultValue={truck.purpose}
      />
      <FormField
        name="dropOffDate"
        formRef={register}
        description="Drop Off Date"
        type="date"
        defaultValue={truck.dropOffDate ? moment.utc(truck.dropOffDate).format("yyyy-MM-DD") : null}
      />
      <FormField
        name="collectionDate"
        formRef={register}
        description="Collection Date"
        type="date"
        defaultValue={truck.collectionDate ? moment.utc(truck.collectionDate).format("yyyy-MM-DD") : null}
      />
      <FormField
        name="conactPerson"
        formRef={register}
        description="Conact Person"
        type="text"
        defaultValue={truck.conactPerson}
      />
      <FormField
        name="conactEmail"
        formRef={register}
        description="Conact Email"
        type="email"
        defaultValue={truck.conactEmail}
      />
      <FormField
        name="conactNumber"
        formRef={register}
        description="Conact Number"
        type="text"
        defaultValue={truck.conactNumber}
      />
      <input type="submit" className="btn btnDark"/>
    </form>
      </div>
    </div>
  );
}
