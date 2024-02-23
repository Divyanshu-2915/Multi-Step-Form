import React, {useEffect, useReducer } from "react";
import './main_form.css';

const initialState = {
  registration_details: {},
  personal_details: {},
  education_details: {},
  job_details: {}
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_USER_FORM_DATA":
      return {
        ...state,
        registration_details: action.payload.registration_details,
        personal_details: action.payload.personal_details,
        education_details: action.payload.education_details,
        job_details: action.payload.job_details,
      };
    default:
      return state;
  }
}

function UserDataDisplay() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const setUserData = () =>{
      const registrationForm = JSON.parse(window.localStorage.getItem("Registration Details"));
      const personalForm = JSON.parse(window.localStorage.getItem("Personal Details"));
      const educationForm = JSON.parse(window.localStorage.getItem("Education Details"));
      const jobForm = JSON.parse(window.localStorage.getItem("Job Details"));
      return dispatch({
      type: "SET_USER_FORM_DATA",
      payload: {
        registration_details: registrationForm,
        personal_details : personalForm,
        education_details: educationForm,
        job_details: jobForm
      },
    });
    }
  
  console.log(state);
  
  useEffect(() => {
    setUserData();
  }, []);

  return (
    <>
    <div className=" border-2 border-black pb-16 justify-items-center w-full max-h-max shadow-2xl shadow-slate-200" id="fourth-form">
    <h1 className="font-serif	text-2xl text-center text-black-100
    drop-shadow-2xl shadow-cyan-900 mb-2 mt-2 ">
    Check Your Data Here</h1>
    <div className="container max-h-max-content	 w-screen mt-8 ml-8 pb-8 pt-8 px-8 justify-items-center rounded-lg
    bg-gradient-to-t from-cyan-400 to-blue-400 shadow-gray-400">
    <div className="mb-4 relative">
        <h1 className="font-serif	text-2xl text-center text-slate-100
    drop-shadow-2xl shadow-cyan-900">User Registration Details</h1>
        <div className='mb-4 mt-4 relative grid grid-cols-2 gap-4 text-center'>
          <p className="border border-blue-400/25 shadow-sm px-4 py-2 font-serif text-center text-slate-100">
          Email: {state.registration_details.email}</p>
          <p className="border border-blue-400/25 shadow-sm px-4 py-2 font-serif text-center text-slate-100">
          Password: {state.registration_details.password}</p>
        </div>
      </div>
      <div className="mb-4 relative">
        <h1 className="font-serif	text-2xl text-center text-slate-100
    drop-shadow-2xl shadow-cyan-900">User Personal Details</h1>
        <div className='mb-4 mt-4 relative grid grid-cols-2 gap-4 text-center'>
          <p className="border border-blue-400/25 shadow-sm px-4 py-2 font-serif text-center text-slate-100">First Name: {state.personal_details.first_name}</p>
          <p className="border border-blue-400/25 shadow-sm px-4 py-2 font-serif text-center text-slate-100">Last Name: {state.personal_details.last_name}</p>
          <p className="border border-blue-400/25 shadow-sm px-4 py-2 font-serif text-center text-slate-100">Date Of Birth: {state.personal_details.date_of_birth}</p>
          <p className="border border-blue-400/25 shadow-sm px-4 py-2 font-serif text-center text-slate-100">Number: {state.personal_details.number}</p>
          <p className="border border-blue-400/25 shadow-sm px-4 py-2 font-serif text-center text-slate-100">State: {state.personal_details.state}</p>
          <p className="border border-blue-400/25 shadow-sm px-4 py-2 font-serif text-center text-slate-100">City: {state.personal_details.city}</p>
        </div>
      </div>
      <div className="mb-4 relative">
        <h1 className="font-serif	text-2xl text-center text-slate-100
    drop-shadow-2xl shadow-cyan-900">User Education Details</h1>
        <div className='mb-4 mt-4 relative grid grid-cols-2 gap-4 text-center'>
          <p className="border border-blue-400/25 shadow-sm px-4 py-2 font-serif text-center text-slate-100">University: {state.education_details.university}</p>
          <p className="border border-blue-400/25 shadow-sm px-4 py-2 font-serif text-center text-slate-100">Course: {state.education_details.course}</p>
          <p className="border border-blue-400/25 shadow-sm px-4 py-2 font-serif text-center text-slate-100">Major Field: {state.education_details.subject}</p>
          <p className="border border-blue-400/25 shadow-sm px-4 py-2 font-serif text-center text-slate-100">Date Of Graduation: {state.education_details.date}</p>
          <p className="border border-blue-400/25 shadow-sm px-4 py-2 font-serif text-center text-slate-100">CGPA: {state.education_details.cgpa}</p>
        </div>
      </div>
      <div className="mb-4 relative">
        <h1 className="font-serif	text-2xl text-center text-slate-100
    drop-shadow-2xl shadow-cyan-900">User Job Details</h1>
        <div className='mb-4 mt-4 relative grid grid-cols-2 gap-4 text-center'>
          <p className="border border-blue-400/25 shadow-sm px-4 py-2 font-serif text-center text-slate-100">Company Name: {state.job_details.company_name}</p>
          <p className="border border-blue-400/25 shadow-sm px-4 py-2 font-serif text-center text-slate-100">Job Title: {state.job_details.title}</p>
          <p className="border border-blue-400/25 shadow-sm px-4 py-2 font-serif text-center text-slate-100">Designation: {state.job_details.designation}</p>
          <p className="border border-blue-400/25 shadow-sm px-4 py-2 font-serif text-center text-slate-100">Location: {state.job_details.location}</p>
          <p className="border border-blue-400/25 shadow-sm px-4 py-2 font-serif text-center text-slate-100">Start Date: {state.job_details.start_date}</p>
          <p className="border border-blue-400/25 shadow-sm px-4 py-2 font-serif text-center text-slate-100">End Date: {state.job_details.end_date}</p>
          <p className="border border-blue-400/25 shadow-sm px-4 py-2 font-serif text-center text-slate-100">Experience: {state.job_details.experience}</p>
        </div>
      </div>
    </div>
    <button
          className="object-center bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-slate-500/50  
                text-white font-bold py-2 px-4 mt-8 ml-8 rounded-lg w-80 hover:shadow-blue-500"
          type="submit"
        >
          Submit Data
        </button>
    </div>
    
    </>
  );
}

export default UserDataDisplay;