import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingUser, faCalendar, faBusinessTime, faUserTie, faMapLocationDot, faLaptopCode} from '@fortawesome/free-solid-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";
import './main_form.css';
import { durationInYears } from '@progress/kendo-date-math';

function SampleJobInfo() {
  library.add(faBuildingUser, faBusinessTime, faCalendar, faMapLocationDot, faUserTie, faLaptopCode);
  
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
        "icon" : faCalendar,
        "id" : "start_date_id"
      },
      {
        "heading" : "End Date",
        "type" : "date",
        "name": "end_date",
        "placeholder" : "",
        "icon" : faCalendar,
        "id" : "end_date_id"
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
    mode: 'onBlur',
  });
  const [jobDateErrors, setJobDateErrors] = useState({});
  const getStartDate = watch('start_date');
  const getEndDate = watch('end_date');
  const check_job_dates = () => {
    console.log('Checking job dates');
    const StartDate = new Date(getStartDate);
    const EndDate = new Date(getEndDate);
    const todayDate = new Date();
    const personal_data = JSON.parse(window.localStorage.getItem('Personal Details'));
    if(!personal_data){
      return false;
    }
    const getBirthDate = personal_data.date_of_birth;
    const BirthDate = new Date(getBirthDate);
    const yearsToAdd = 20;
    BirthDate.setFullYear(BirthDate.getFullYear() + yearsToAdd);
    if(StartDate < BirthDate){
        setJobDateErrors(prevError => ({...prevError, StartDateError : "Invalid Start Date, You should be old enough"}))
    }else if(StartDate.getFullYear() > EndDate.getFullYear() && StartDate.getMonth() > EndDate.getMonth()){
        setJobDateErrors(prevError => ({...prevError, StartDateError : "Invalid End Date, Start Date should be before End Date"}));
    }else if(StartDate.getMonth() === EndDate.getMonth() && StartDate.getDate() === EndDate.getDate() && StartDate.getFullYear() === EndDate.getFullYear()){
      setJobDateErrors(prevError => ({...prevError, StartDateError : "Invalid Date, Both dates are same"}));
    } else if(EndDate > todayDate){
      setJobDateErrors(prevError => ({...prevError, EndDateError : "Invalid Date, End Date should be less than today date"}));
    } else {
      setJobDateErrors({})
    }
  }

  const check_experience = () => {
      console.log('Checking experience');
      const jobStartDate = new Date(getStartDate);
      const jobEndDate = new Date(getEndDate);
      const jobTodayDate = new Date();
        if(jobEndDate === jobTodayDate) {
          return("Present Working");
        } else {
          const duration = durationInYears(jobStartDate, jobEndDate);
          return (duration + " Years");
        }
      }

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
                  value={check_experience()}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
              ) : (field.name === 'start_date' || field.name === 'end_date') ? ( 
                <div>
                <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type={field.type}
                autoComplete="off"
                name={field.name}
                placeholder={field.placeholder}
                id={field.id}
                {...register(field.name, {required: "This field is required", 
                onBlur: (check_job_dates)})}  
              />
              {field.name === 'start_date' && <p className="text-sm text-zinc-50 font-serif">(Mininum age should be 20 years)</p>}
              </div>
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
              {field.name === 'start_date' ? (jobDateErrors && jobDateErrors.StartDateError ? (
                <p className="text-red-700 text-sm italic font-times-new-roman">{jobDateErrors.StartDateError}</p>
              ) : (null) ) : (null)}
              {field.name === 'end_date' ? (jobDateErrors && jobDateErrors.EndDateError ? (
                <p className="text-red-700 text-sm italic font-times-new-roman">{jobDateErrors.EndDateError}</p>
              ) : (null) ) : (null)}
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
      </div>
    </>
  );
}

export default SampleJobInfo;