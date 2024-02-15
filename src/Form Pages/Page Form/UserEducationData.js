import React from "react";
import { useFormik } from "formik";
import { Education_Validate } from "../Page Form";

const education_initialValues = {
  university: "",
  course: "",
  date: "",
  field: "",
  cgpa: "",
};

const education_course_list = [
  {id: 0, name: "-----"},
  {id: 1, name: "BCA"},
  {id: 2, name: "BBA"},
  {id: 3, name: "B. Com"},
  {id: 4, name: "B. Tech"},
  {id: 5, name: "B. Pharma"},
  {id: 6, name: "MBBS"},
  {id: 7, name: "BA"},
  {id: 8, name: "BSC"},
  {id: 9, name: "LLB"},
  {id: 10, name: "LLM"},
]

function EducationInfo() {
  window.history.pushState(null, "", window.location.href);
  window.onpopstate = function () {
    window.history.pushState(null, "", window.location.href);
    alert("You cannot navigate in between forms");
  };

  //---
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: education_initialValues,
      validationSchema: Education_Validate,
      onSubmit: (values, action) => {
        action.resetForm();
        console.log(values);
        window.localStorage.setItem(
          "education_details",
          JSON.stringify(values)
        );
        window.location.replace("./UserJobData");
      },
    });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-2 font-times-new-roman">
        Education Details Form
      </h1>
      <h4 className="text-lg font-bold text-center mb-6 font-times-new-roman">
        Fill all the questioned fields to proceed
      </h4>
      <h4 className="text-lg font-bold text-center mb-6 font-times-new-roman">
        Fill Details about Bachelor's/ Master's only
      </h4>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="university"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            School/University Name*
          </label>
          <input
            type="text"
            autoComplete="off"
            name="university"
            placeholder="University Name"
            value={values.university}
            onChange={handleChange}
            onBlur={handleBlur}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.university && touched.university ? (
            <p className="text-red-500 text-xs italic">{errors.university}</p>
          ) : null}
        </div>
        <div className="mb-4">
          <label
            htmlFor="course"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Degree/Course*
          </label>
          <select
            type="text"
            autoComplete="off"
            name="course"
            value={values.course}
            onChange={handleChange}
            onBlur={handleBlur}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
          {education_course_list.map((index) => (
            <option key={index} value={index.name}> {index.name}</option>
          ))}
          </select>
          {errors.course && touched.course ? (
            <p className="text-red-500 text-xs italic">{errors.course}</p>
          ) : null}
        </div>
        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Date of Graduation*
          </label>
          <input
            type="date"
            autoComplete="off"
            name="date"
            min="1995-01-01"
            max="2020-12-31"
            value={values.date}
            onChange={handleChange}
            onBlur={handleBlur}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.date && touched.date ? (
            <p className="text-red-500 text-xs italic">{errors.date}</p>
          ) : null}
        </div>
        <div className="mb-4">
          <label
            htmlFor="field"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Major Field of Study*
          </label>
          <input
            type="text"
            autoComplete="off"
            name="field"
            placeholder="Field Name"
            value={values.field}
            onChange={handleChange}
            onBlur={handleBlur}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.field && touched.field ? (
            <p className="text-red-500 text-xs italic">{errors.field}</p>
          ) : null}
        </div>
        <div className="mb-4">
          <label
            htmlFor="cgpa"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            CGPA*
          </label>
          <input
            type="text"
            autoComplete="off"
            name="cgpa"
            placeholder="Percentage Here"
            value={values.cgpa}
            onChange={handleChange}
            onBlur={handleBlur}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.cgpa && touched.cgpa ? (
            <p className="text-red-500 text-xs italic">{errors.cgpa}</p>
          ) : null}
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
}

export default EducationInfo;
