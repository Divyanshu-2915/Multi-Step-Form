import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingUser, faCalendar, faBusinessTime, faUserTie, faMapLocationDot, faLaptopCode} from '@fortawesome/free-solid-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";
import './main_form.css';

function JobInfo() {
  library.add(faBuildingUser, faBusinessTime, faCalendar, faMapLocationDot, faUserTie, faLaptopCode)
  const user_job_fields = {
    "categories" : [
      {
        "heading" : "Company Name",
        "type" : "text",
        "name": "company_name",
        "placeholder" : "Enter Company Name",
        "icon" : faBuildingUser
      },
      {
        "heading" : "Location",
        "type" : "text",
        "name": "location",
        "placeholder" : "Enter Location",
        "icon" : faMapLocationDot
      },
      {
        "heading" : "Job Title",
        "type" : "text",
        "name": "title",
        "placeholder": "Job Title",
        "icon" : faLaptopCode
      },
      {
        "heading" : "Designation",
        "type" : "text",
        "name": "designation",
        "placeholder" : "Enter Designation",
        "icon" : faUserTie
      },
      {
        "heading" : "Start Date",
        "type" : "date",
        "name": "start_date",
        "placeholder" : "",
        "icon" : faCalendar
      },
      {
        "heading" : "End Date",
        "type" : "date",
        "name": "end_date",
        "placeholder" : "",
        "icon" : faCalendar
      },
      {
        "heading" : "Experience",
        "type" : "text",
        "name": "experience",
        "placeholder" : "Experience in Years",
        "icon" : faBusinessTime
      }
    ]
  }
  
  const {register, handleSubmit, formState: { errors, isDirty, isValid }, watch} = useForm({
    mode: 'onBlur'
  });
  const [jobDateError, setJobDateError] = useState({});
  const personal_data = JSON.parse(window.localStorage.getItem('Personal Details'));
  const find_birth_date = personal_data.date_of_birth;
  const getBirthDate = new Date(find_birth_date);
  const yearsToAdd = 20;
  getBirthDate.setFullYear(getBirthDate.getFullYear() + yearsToAdd);
  const startDate = watch('start_date');
  const getStartDate = new Date(startDate);
  const endDate = watch('end_date');
  const getEndDate = new Date(endDate);
  const todayDate = new Date();

   const check_date = () => {
      if(getStartDate.getFullYear() < getBirthDate.getFullYear()){
       setJobDateError(prevError => ({...prevError, error: 'Invalid date, you should be old enough'}));
       console.log(jobDateError);
      }else if(getStartDate.getFullYear() > getEndDate.getFullYear()){
        setJobDateError(prevError => ({...prevError, error: 'Invalid date, Start year is greater than end'}));
       console.log(jobDateError);
      } else if(getStartDate.getDate() === getEndDate.getDate()){
        setJobDateError(prevError => ({...prevError, error: 'Invalid date, Dates are same'}));
       console.log(jobDateError);
      } else  if(getEndDate.getDate() < getStartDate.getDate()){
        setJobDateError(prevError => ({...prevError, error: 'Invalid date, End year is smaller than start'}));
       console.log(jobDateError);
      } else if(getEndDate.getDate() > todayDate.getDate()){
        setJobDateError(prevError => ({...prevError, error: 'Invalid date, End date is greater than today'}));
       console.log(jobDateError);
      } else if(getEndDate.getDate() === todayDate.getDate()){
        
      } 
   }
  //const moveForward = () => {
  //window.alert("You are not adding any experience");
  //window.location.replace("./UserAllDisplayData");
  //}
  return (
    <>
    <div className=" border-2 border-black pb-16 justify-items-start w-full max-h-max grid grid-cols-3 gap-2" 
    id="third-form">
    <div className="container max-h-max-content	 w-96 mt-16 ml-8 pb-8 pt-8 px-8 justify-items-center rounded-lg
    bg-gradient-to-t from-cyan-400 to-blue-400 shadow-gray-400">
    <h1 className="font-serif	text-2xl text-center text-slate-100 pb-6
    drop-shadow-2xl shadow-cyan-900">Begin Your Coding Journey </h1>
      <form onSubmit={handleSubmit((data) => {
        console.log(data);
        window.localStorage.setItem("Job Details", JSON.stringify(data));
        //window.location.replace("./UserAllDataDisplay");
      })}
      className="justify-center">
      { user_job_fields.categories.map((field, index) => {
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
              {field.name === 'experience' ? (
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  autoComplete="off"
                  readOnly
                  {...register(field.name)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
              ) : (field.name === 'start_date' || field.name === 'end_date') ? ( 
                <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type={field.type}
                autoComplete="off"
                name={field.name}
                placeholder={field.placeholder}
                {...register(field.name, {onChange: check_date})}
              />
              ): (( 
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type={field.type}
                autoComplete="off"
                name={field.name}
                placeholder={field.placeholder}
                {...register(field.name, {required : "This field is required"})}
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
          type="submit" disabled={!isDirty || !isValid}>
          Next Step
        </button>
      </form>
      </div>
      {/*
      <div className="container w-96 mt-16 pb-8 pt-8 px-8 rounded-lg
    bg-gradient-to-t from-cyan-400 to-blue-400 shadow-gray-400 h-40">
    <h1 className="font-serif	text-2xl text-center text-slate-100
    drop-shadow-2xl shadow-cyan-900">Want to add more</h1>
      <button
          className="bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-slate-500/50 
                  text-white font-bold py-2 px-4 mt-4 rounded-lg w-80 hover:shadow-white bottom-24"
          type="submit">
          Add More
        </button>
        </div>
      <div className="container w-96 mt-16 pb-8 pt-8 px-8 justify-items-center rounded-lg
    bg-gradient-to-t from-cyan-400 to-blue-400 shadow-gray-400 h-40">
    <h1 className="font-serif	text-2xl text-center text-slate-100
    drop-shadow-2xl shadow-cyan-900">Don't have any experience </h1>
      <button
          className="bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-slate-500/50 
                  text-white font-bold py-2 px-4 mt-4 rounded-lg w-80 hover:shadow-white bottom-24"
          type="submit" onClick={moveForward}>
          Move Forward Without It
        </button>
        </div>
         */}
      </div>
    </>
  );
}

export default JobInfo;
