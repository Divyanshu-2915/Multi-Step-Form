import React, { useState } from "react";
import { useForm } from "react-hook-form";
import StateData from "./UserState.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faCakeCandles, faLocationCrosshairs, faCity, faEnvelopesBulk} from '@fortawesome/free-solid-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";
import './main_form.css';

function UserDetails()
{
  library.add(faCakeCandles, faCity, faLocationCrosshairs, faPhone, faUser, faEnvelopesBulk);
  const user_personal_fields = {
    "categories" : [
      {
        "heading" : "First Name",
        "type" : "text",
        "name": "first_name",
        "placeholder" : "Enter First Name",
        "icon" : faUser
      },
      {
        "heading" : "Last Name",
        "type" : "text",
        "name": "last_name",
        "placeholder" : "Enter Last Name",
        "icon" : faUser
      },
      {
        "heading" : "Number",
        "type" : "text",
        "name": "number",
        "placeholder" : "Phone Number",
        "icon" : faPhone
      },
      {
        "heading" : "Date of Birth",
        "type" : "date",
        "name": "date_of_birth",
        "placeholder" : "Date of Birth",
        "icon" : faCakeCandles
      },
      {
        "heading": "State",
        "type": "select",
        "name": "state",
        "placeholder": "Select Your State",
        "icon" : faLocationCrosshairs
      },
      {
        "heading" : "City",
        "type" : "select",
        "name": "city",
        "placeholder" : "Select Your City",
        "icon" : faCity
      },
      {"heading" : "Postal Code",
        "type" : "text",
        "name": "zip_code",
        "placeholder" : "Enter Postal Code",
        "icon" : faEnvelopesBulk
        },
    ]
  };

  const {register, handleSubmit, formState: { errors }} = useForm({
    mode: 'onBlur',
  });
  const [stateCity, setStateCity] = useState([]);
  const CheckState = (event) => {
    const StateName = event.target.value;
    const StateSelected = StateData.States.find(
      (state) => state.name === StateName
    );
    setStateCity(StateSelected.city);
  };

  return(
    <>
    <div className=" border-2 border-black pb-16 justify-items-start w-full max-h-max" id="first-form">
    <div className="container max-h-max-content	 w-96 mt-16 ml-40 pb-8 pt-8 px-8 justify-items-center rounded-lg
    bg-gradient-to-t from-cyan-400 to-blue-400 shadow-gray-400">
    <h1 className="font-serif	text-2xl text-center text-slate-100 pb-6
    drop-shadow-2xl shadow-cyan-900">Begin Your Coding Journey </h1>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          window.localStorage.setItem("Personal Details", JSON.stringify(data));
          window.location.replace("./UserEducationData");
        })}
        className="justify-center"
      >
      {user_personal_fields.categories.map((field, index) => {
        return(
          <div key={index} className="mb-4 relative">
          <FontAwesomeIcon icon={field.icon} className="text-zinc-50 absolute left-1 top-1" />
          <label
                className="block text-zinc-50 text-base font-serif mb-2 font-times-new-roman ml-8
                after:content-['*'] after:ml-0.5 after:text-red-500"
                htmlFor={field.name}
              >
                {field.heading}
              </label>
              {field.heading === 'State' ? (
               <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register(field.name , { required: "State is required" })}
            onChange={CheckState}
           autoComplete="off">
            {StateData.States.map((states, index) => (
              <option key={index} value={states.name}>
                {states.name}
              </option>
            ))}
          </select> ):(  field.heading === 'City' ? (
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register(field.name, { required: "City is required" })}
          autoComplete="off">
            {stateCity.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
                ) : (
              <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type={field.type}
              autoComplete="off"
              name={field.name}
              placeholder={field.placeholder}
              {...register(field.name, { required: "This field is required", 
              ...(field.name === "number" && {
                    pattern: {
                      value: /^\d+$/,
                      message: "Please enter a valid phone number"
                    }}),
                    ...(field.name === "date_of_birth" && {
                      pattern: {
                        value: /^(199[5-9]|200[0-9]|2010)/,
                        message: "Date of birth should be between 1995-2010"
                      }
                    })})}
              />
              ))}
              {errors[field.name] && (
            <p className="text-red-700 text-sm italic font-times-new-roman">{errors[field.name].message}</p>
          )}
          </div>
        )
      })} 
      
      <button
          className="bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-slate-500/50 
                text-white font-bold py-2 px-4 mt-8 rounded-lg w-80 hover:shadow-white bottom-24"
          type="submit"
        >
          Next Step
        </button>
      </form>
      </div>
      </div>
    </>
  )
}

export default UserDetails;

//mockjson server
//useReducer
//jest - unit
//sitest - end to end