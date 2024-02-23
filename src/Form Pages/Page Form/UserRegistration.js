import React, { useState } from "react";
import { useFormik } from "formik";
import { Registration_Validate } from "../Page Form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";
import './main_form.css';

const registration_initialValues = {
  email: "",
  password: "",
  confirm_password: ""
};

function UserRegistration() {
    
    const [showPassword, setShowPassword] = useState(false);
    library.add(faEnvelope, faLock, faEye, faEyeSlash)
    const { values, errors, touched, handleBlur, handleSubmit, handleChange } =
    useFormik({
      initialValues: registration_initialValues,
      validationSchema: Registration_Validate,
      onSubmit: (values, action) => {
        action.resetForm();
        console.log(values);
        window.localStorage.setItem("Registration Details", JSON.stringify(values));
        window.location.replace("./UserPersonalData");
      },
    });
  
  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };
  
  const user_registration_feilds = {
    "categories" : [
      {
        "heading" : "Email Address",
        "type" : "email",
        "name": "email",
        "placeholder" : "Register Your Email",
        "icon" : faEnvelope
      },
      {
        "heading" : "Password ",
        "type" : showPassword ? "text" : "password",
        "name" : "password",
        "placeholder": "Enter Password",
        "icon" : faLock
      },
      {
        "heading" : "Confirm Password",
        "type" : "password",
        "name" : "confirm_password",
        "placeholder": "Confirm Password",
        "icon" : faLock
      },
    ]
  };

  return(
    <>
    <div className=" border-2 border-black pb-16 justify-items-start w-screen h-screen" id="main-form">
    <div className="container h-full w-96 mt-8 ml-40 pb-64 pt-8 px-8 justify-items-center rounded-lg
    bg-gradient-to-t from-cyan-400 to-blue-400 shadow-gray-400">
    <h1 className="font-serif	text-2xl text-center text-slate-100 pb-6
    drop-shadow-2xl shadow-cyan-900">Begin Your Coding Journey </h1>
      <form onSubmit={handleSubmit}
      className="justify-center"
      >
        {user_registration_feilds.categories.map((field, index) => {
          return (
            <div key={index} className="mb-4 relative">
            <FontAwesomeIcon icon={field.icon} className="text-zinc-50 absolute left-1 top-1" />
            <label
                className="block text-zinc-50 text-base font-serif mb-2 font-times-new-roman ml-8
                after:content-['*'] after:ml-0.5 after:text-red-500"
                htmlFor={field.name}
              >
                {field.heading}
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type={field.type}
                name={field.name}
                autoComplete="off"
                placeholder={field.placeholder}
                value={values[field.name]}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {field.name === 'password' && (
                <span
                  className=" absolute end-2 mt-2 cursor-pointer text-zinc-500"
                  onClick={togglePasswordVisibility}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </span>
              )}
              {errors[field.name] && touched[field.name] ? (
                <p className="text-red-700 text-sm italic font-times-new-roman">
                  {errors[field.name]}
                </p>
              ) : null}
            </div>
          )
        })}
        <button type="submit"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-slate-500/50 
                text-white font-bold py-2 px-4 rounded-lg w-80 hover:shadow-white fixed bottom-24">
        Submit
        </button>
      </form>
      </div>
    </div>
    </>
  )
}

export default UserRegistration;