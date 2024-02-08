import React from "react";
import { useFormik } from "formik";
import { Registration_Validate } from "../Page Form";

const registration_initialValues = {
  email: "",
  password: "",
  confirm_password: "",
};

function UserRegistration() {
  window.history.pushState(null, "", window.location.href);
  window.onpopstate = function () {
    window.history.pushState(null, "", window.location.href);
    alert("You cannot navigate in between forms");
  };

  //---
  const { values, errors, touched, handleBlur, handleSubmit, handleChange } =
    useFormik({
      initialValues: registration_initialValues,
      validationSchema: Registration_Validate,
      onSubmit: (values, action) => {
        action.resetForm();
        console.log(values);
        window.localStorage.setItem(
          "registration_details",
          JSON.stringify(values)
        );
        window.location.replace("./UserPersonalData");
      },
    });

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-md ">
          <h1 className="text-3xl font-bold text-center mb-2 font-times-new-roman">
            Welcome User
          </h1>
          <h2 className="text-lg font-bold text-center mb-6 font-times-new-roman">
            Make your first step towards our website
          </h2>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 font-times-new-roman"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                autoComplete="off"
                name="email"
                placeholder="Email Address"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className="text-red-500 text-xs italic font-times-new-roman">
                  {errors.email}
                </p>
              ) : null}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 font-times-new-roman"
                htmlFor="password"
              >
                Set Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                autoComplete="off"
                name="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <p className="text-red-500 text-xs italic font-times-new-roman">
                  {errors.password}
                </p>
              ) : null}
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 font-times-new-roman"
                htmlFor="confirm_password"
              >
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                autoComplete="off"
                name="confirm_password"
                placeholder="Confirm Password"
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.confirm_password && touched.confirm_password ? (
                <p className="text-red-500 text-xs italic font-times-new-roman">
                  {errors.confirm_password}
                </p>
              ) : null}
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Next Step
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="max-w-md w-full bg-white p-8 rounded shadow-lg">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Already Registered</h1>
          <h2 className="text-lg font-semibold mb-4">
            Check Your Submitted Data
          </h2>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Check Here
          </button>
        </div>
      </div>
    </>
  );
}
export default UserRegistration;
