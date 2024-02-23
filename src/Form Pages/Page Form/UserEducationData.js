import React from "react";
import { useFormik } from "formik";
import { Education_Validate } from "../Page Form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faBook, faPercentage, faGraduationCap, faBookOpen} from '@fortawesome/free-solid-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";
import './main_form.css';

const education_initialValues = {
  university: "",
  course: "",
  date: "",
  subject: "",
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
  library.add(faBookOpen, faGraduationCap, faPercentage, faSchool, faBook);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: education_initialValues,
      validationSchema: Education_Validate,
      onSubmit: (values, action) => {
        action.resetForm();
        console.log(values);
        window.localStorage.setItem("Education Details",JSON.stringify(values));
        window.location.replace("./UserJobData");
        },
        });
      const user_education_fields = {
        "categories" : [
          {
            "heading" : "School/ University Name",
            "type" : "text",
            "name": "university",
            "placeholder" : "University Name",
            "icon" : faSchool
          },
          {
            "heading" : "Course ",
            "type" : "select",
            "name": "course",
            "placeholder" : "Enter Course",
            "icon" : faBook
          },
          {
            "heading" : "Date of Graduation",
            "type" : "date",
            "name": "date",
            "placeholder" : "",
            "icon" : faGraduationCap
          },
          {
            "heading" : "Major Field of Study",
            "type" : "text",
            "name": "subject",
            "placeholder" : "Major Field ",
            "icon" : faBookOpen
          },
          {
            "heading" : "CGPA",
            "type" : "text",
            "name": "cgpa",
            "placeholder" : "Enter CGPA",
            "icon" : faPercentage
          }
        ]
      }

  return (
    <>
    <div className=" border-2 border-black pb-16 justify-items-start w-full max-h-max" id="second-form">
    <div className="container max-h-max-content	 w-96 mt-16 ml-40 pb-8 pt-8 px-8 justify-items-center rounded-lg
    bg-gradient-to-t from-cyan-400 to-blue-400 shadow-gray-400">
    <h1 className="font-serif	text-2xl text-center text-slate-100 pb-6
    drop-shadow-2xl shadow-cyan-900">Begin Your Coding Journey </h1>
    <form onSubmit={handleSubmit}
    className="justify-center">
      {user_education_fields.categories.map((field,index) => {
        return(
          <div key={index} className="mb-4 relative">
            <FontAwesomeIcon icon={field.icon} className="text-zinc-50 absolute left-1 top-1" />
            <label
            htmlFor={field.name}
            className="block text-zinc-50 text-base font-serif mb-2 font-times-new-roman ml-8
                after:content-['*'] after:ml-0.5 after:text-red-500">
            {field.heading}
            </label>
            { field.type === "select" ? (
              <select
            type={field.type}
            autoComplete="off"
            name={field.name}
            value={values[field.name]}
            onChange={handleChange}
            onBlur={handleBlur}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
          {education_course_list.map((course) => (
            <option key={course.id} value={course.name}> {course.name}</option>
          ))}
          </select>
            ) : (
              <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              autoComplete="off"
              value={values[field.name]}
              onChange={handleChange}
              onBlur={handleBlur}
              />
            )}
            {errors[field.name] && touched[field.name] ? (
              <p className="text-red-700 text-sm italic font-times-new-roman">
                  {errors[field.name]}
                </p>
            ) : null
            }
          </div>
        )
      })}
      <button type="submit"
        className="bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-slate-500/50 
                text-white font-bold py-2 px-4 mt-8 rounded-lg w-80 hover:shadow-white bottom-24"
      >
        Submit
        </button>
    </form>
    </div>
    </div>
    </>
  );
}

export default EducationInfo;
