import React, { useState } from "react";
import { useForm } from "react-hook-form";
import StateData from "./UserState.json";
import { DatePicker } from 'react-datepicker';

function UserDetails() {
  window.history.pushState(null, "", window.location.href);
  window.onpopstate = function () {
    window.history.pushState(null, "", window.location.href);
    alert("You cannot navigate in between forms");
  };

  //---
  const [stateCity, setStateCity] = useState([]);

  const CheckState = (event) => {
    const StateName = event.target.value;
    const StateSelected = StateData.States.find(
      (state) => state.name === StateName
    );
    setStateCity(StateSelected.city);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    first_name: "",
    last_name: "",
    dob: "",
    number: "",
    state: "",
    city: "",
    pin: ""
  });

  const validatePhoneNumber = (value) => {
    const validation_statement = /^[(]?\d{3}[)]?[-]?\d{3}[-]?\d{4}$/;
    if (value.length > 10) {
      return "Phone number should not be more than 10 digits";
    }
    if (!validation_statement.test(value)) {
      return "Phone number should contain only digits follow the pattern xxxx-xxxxxx";
    }
    return true;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-2 font-times-new-roman">
        Personal Details Form
      </h1>
      <h4 className="text-lg font-bold text-center mb-6 font-times-new-roman">
        Fill all the questioned fields to proceed
      </h4>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          window.localStorage.setItem("personal_details", JSON.stringify(data));
          window.location.replace("./UserEducationData");
        })}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            First Name*
          </label>

          <input
            className="border border-gray-300 rounded-md p-2 w-full"
            placeholder="First Name"
            {...register("first_name", { required: "This field is required" })}
          />
          {errors.first_name && (
            <p className="text-red-500 text-xs mt-1">{errors.first_name.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Last Name*
          </label>
          <input
            className="border border-gray-300 rounded-md p-2 w-full"
            placeholder="Last Name"
            {...register("last_name", { required: "This field is required" })}
          />
          {errors.last_name && (
            <p className="text-red-500 text-xs mt-1">{errors.last_name.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Date Of Birth*
          </label>
          <input
            type="date"
            className="border border-gray-300 rounded-md p-2 w-full"
            placeholder=""
            {...register("dob", {
              required: "This field is required",
              validate: (value) => {
                const selectedDate = new Date(value);
                const minDate = new Date("1995-01-01");
                const maxDate = new Date("2010-12-31");
                if (selectedDate < minDate || selectedDate > maxDate) {
                  return "Date of birth should be between 1995 and 2010";
                }
                return true;
              },
            })}
            min="1995-01-01"
            max="2010-12-31"
          />
          {errors.dob && (
            <p className="text-red-500 text-xs mt-1">{errors.dob.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Number*
          </label>
          <input
            className="border border-gray-300 rounded-md p-2 w-full"
            placeholder="Phone Number"
            {...register("number", { 
            required: "This field is required",
            validate: validatePhoneNumber 
          })}
          />
          {errors.number && (
            <p className="text-red-500 text-xs mt-1">{errors.number.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            State*
          </label>
          <select
            className="border border-gray-300 rounded-md p-2 w-full"
            {...register("state", { required: "State is required" })}
            onChange={CheckState}
          >
            {StateData.States.map((states, index) => (
              <option key={index} value={states.name}>
                {states.name}
              </option>
            ))}
          </select>
          {errors.state && (
            <p className="text-red-500 text-xs mt-1">{errors.state.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            City*
          </label>
          <select
            className="border border-gray-300 rounded-md p-2 w-full"
            {...register("city", { required: "City is required" })}
          >
            <option value="none" disabled hidden>
              Select Your City
            </option>
            {stateCity.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
          {errors.city && (
            <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            PIN Code*
          </label>
          <input
            className="border border-gray-300 rounded-md p-2 w-full"
            placeholder="Postal Number"
            {...register("pin", {
              required: "This field is required",
              minLength: {
                value: 6,
                message: "Max length must be 6 characters",
              },
            })}
          />
          {errors.pin && (
            <p className="text-red-500 text-xs mt-1">{errors.pin.message}</p>
          )}
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          type="submit"
        >
          Next Step
        </button>
      </form>
    </div>
  );
}

export default UserDetails;

//mockjson server
//useReducer
//jest - unit
//sitest - end to end