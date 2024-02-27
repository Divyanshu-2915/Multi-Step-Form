import React, { useEffect, useReducer, useState } from 'react';
import { faCheck, faCheckDouble} from '@fortawesome/free-solid-svg-icons';
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
  library.add(faCheck, faCheckDouble)
  const [state, dispatch] = useReducer(reducer, initialState);
  const setNavbarDisplay = () =>{
      const registrationForm = JSON.parse(window.localStorage.getItem("Registration Details"));
      const personalForm = JSON.parse(window.localStorage.getItem("Personal Details"));
      const educationForm = JSON.parse(window.localStorage.getItem("Education Details"));
      const jobForm = JSON.parse(window.localStorage.getItem("Job Details"));
      return dispatch({
      payload: {
        registration_data: registrationForm,
        personal_data : personalForm,
        education_data: educationForm,
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
      <div>
        {isNavbarDisable ? (<h1 className="text-3xl font-bold text-center mb-2 font-times-new-roman">
            Please check your data here
          </h1>) : (
            <div>
             <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
              {state.registration_data  && state.registration_data ? (
                <div className='bg-slate-300 mx-8 my-4 text-left gap-0 flex flex-nowrap w-50 h-10'>
                <FontAwesomeIcon icon="fa-solid fa-check-double" className='pl-3 pt-3 text-green-600' />
              <li className='pt-2 pl-2 pr-2 text-base text-green-600'>
                    Registered 
              </li> 
                </div>
                 ) : (
                  <div className='bg-slate-300 mx-8 my-4 text-left gap-0 flex flex-nowrap w-50 h-10'>
                  <FontAwesomeIcon icon="fa-solid fa-check" className='pl-3 pt-3 text-black'/>
                  <li className='pt-2 pl-2 pr-2 text-base text-black'>
                    Registration Info
                </li>
                </div>
                )}
             </ol>   
            </div>
          )}
      </div>
    </>
  )
  
 }

 export default NavBar;

 //state.registration_data.value
 //Object.keys(state.registration_data).includes('value')