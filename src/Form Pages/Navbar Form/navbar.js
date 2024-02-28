import React, { useEffect, useReducer, useState } from 'react';
import { faCheck, faCheckDouble, faArrowRight, faInfo} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

 const initialState = {
  registration_data: {},
  personal_data: {},
  education_data: {},
  job_data: {},
 }

 function reducer (state, action){
  switch(action.type){
    case 'SET_REGISTRATION_DATA':
      return {
     ...state,
        registration_data: action.payload.registration_data,
      }
    case 'SET_PERSONAL_DATA':
      return {
     ...state,
        personal_data: action.payload.personal_data,
      }
    case 'SET_EDUCATION_DATA':
      return {
     ...state,
        education_data: action.payload.education_data,
      }
    case 'SET_JOB_DATA':
      return {
     ...state,
        job_data: action.payload.job_data,
      }
    default:
      return state
  }
 }

 function NavBar(){
  library.add(faCheck, faCheckDouble, faArrowRight, faInfo)
  const [state, dispatch] = useReducer(reducer, initialState);
  const setNavbarDisplay = () =>{
      const registrationForm = JSON.parse(window.localStorage.getItem("Registration Details"));
      const personalForm = JSON.parse(window.localStorage.getItem("Personal Details"));
      const educationForm = JSON.parse(window.localStorage.getItem("Education Details"));
      const jobForm = JSON.parse(window.localStorage.getItem("Job Details"));
      dispatch({
      type: "SET_REGISTRATION_DATA",
      payload: {
        registration_data: registrationForm,
      },
    });
    dispatch({
      type: "SET_PERSONAL_DATA",
      payload: {
        personal_data : personalForm,
      },
    });
    dispatch({
      type: "SET_EDUCATION_DATA",
      payload: {
        education_data: educationForm,
      },
    });
    dispatch({
      type: "SET_JOB_DATA",
      payload: {
         job_data: jobForm
      },
    });
    }

    useEffect(() => {
    setNavbarDisplay();
    if (window.location.pathname.match(/UserAllDataDisplay/)) {
      setIsNavbarDisable(true);
    } else {
      setIsNavbarDisable(false);
    }
  }, []);

  const[isNavbarDisable, setIsNavbarDisable] = useState(false)

  return(
    <>
        {isNavbarDisable ? (<h1 className="font-serif	text-2xl text-center text-zinc-100
            drop-shadow-2xl shadow-cyan-900 mb-2 mt-2 ">
            Check Your Data Here</h1>) : (
            <div className='justify-center items-stretch flex flex-row gap-10 w-screen
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' id='navbar-box'>
             <ol className="flex items-center w-screen flex-auto text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base ml-56">
              {state.registration_data ? (
                <div className='rounded-lg border-2 border-white  mx-8 my-4  pb-4 text-center
                 gap-0 flex flex-nowrap w-50 h-10 bg-slate-200'>
                <FontAwesomeIcon icon="fa-solid fa-check-double" className='pl-3 pt-3 text-green-600' />
              <li className='pt-2 pl-2 pr-2 text-base text-green-600 '>
                    Registered 
              </li> 
                </div>
                 ) : (
                  <div className='rounded-lg border-2 border-white  mx-8 my-5 pb-4 text-left
                   gap-0 flex flex-nowrap w-50 h-10 '>
                  <FontAwesomeIcon icon="fa-solid fa-info" className='pl-3 pt-3 text-slate-50'/>
                  <li className='pt-2 pl-2 pr-2 pb-2 text-base text-slate-50'>
                    Registration Info
                </li>
                </div>
                )}
                <FontAwesomeIcon icon="fa-solid fa-arrow-right" className='text-slate-50'/>
                {state.personal_data ? (
                <div className='rounded-lg border-2 border-white  mx-8 my-4 text-left
                 gap-0 flex flex-nowrap w-50 h-10 bg-slate-200'>
                <FontAwesomeIcon icon="fa-solid fa-check-double" className='pl-3 pt-3 text-green-600' />
              <li className='pt-2 pl-2 pr-2 text-base text-green-600'>
                    Information Added 
              </li> 
                </div>
                 ) : (
                  <div className='rounded-lg border-2 border-white  mx-8 my-4
                   text-left gap-0 flex flex-nowrap w-50 h-10'>
                  <FontAwesomeIcon icon="fa-solid fa-info" className='pl-3 pt-3 text-slate-50'/>
                  <li className='pt-2 pl-2 pr-2 pb-2 text-base text-slate-50'>
                    Personal Info
                </li>
                </div>
                )}
                <FontAwesomeIcon icon="fa-solid fa-arrow-right" className='text-slate-50'/>
                {state.education_data ? (
                <div className='rounded-lg border-2 border-white  mx-8 my-4 text-left
                 gap-0 flex flex-nowrap w-50 h-10 bg-slate-200'>
                <FontAwesomeIcon icon="fa-solid fa-check-double" className='pl-3 pt-3 text-green-600' />
              <li className='pt-2 pl-2 pr-2 text-base text-green-600'>
                    Information Added
              </li> 
                </div>
                 ) : (
                  <div className='rounded-lg border-2 border-white  mx-8 my-4 
                   text-left gap-0 flex flex-nowrap w-50 h-10'>
                  <FontAwesomeIcon icon="fa-solid fa-info" className='pl-3 pt-3 text-slate-50'/>
                  <li className='pt-2 pl-2 pr-2 pb-2 text-base text-slate-50'>
                    Education Info
                </li>
                </div>
                )}
                <FontAwesomeIcon icon="fa-solid fa-arrow-right" className='text-slate-50' />
                {state.job_data ? (
                <div className='rounded-lg border-2 border-white  mx-8 my-4 text-left
                 gap-0 flex flex-nowrap w-50 h-10 bg-slate-200'>
                <FontAwesomeIcon icon="fa-solid fa-check-double" className='pl-3 pt-3 text-green-600' />
              <li className='pt-2 pl-2 pr-2 text-base text-green-600'>
                   Information Added
              </li> 
                </div>
                 ) : (
                  <div className='rounded-lg border-2 border-white  mx-8 my-4 
                   text-left gap-0 flex flex-nowrap w-50 h-10'>
                  <FontAwesomeIcon icon="fa-solid fa-info" className='pl-3 pt-3 text-slate-50'/>
                  <li className='pt-2 pl-2 pr-2 pb-2 text-base text-slate-50'>
                    Job Info
                </li>
                </div>
                )}
             </ol>   
            </div>
          )}
    </>
  )
  
 }

 export default NavBar;

 //state.registration_data.value
 //Object.keys(state.registration_data).includes('value')