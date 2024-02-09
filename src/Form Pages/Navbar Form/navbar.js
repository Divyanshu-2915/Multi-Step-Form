import { useState, useEffect } from "react";
import "./navbar.css";
import React from "react";

function NavBar() {
  window.history.pushState(null, "", window.location.href);
  window.onpopstate = function () {
    window.history.pushState(null, "", window.location.href);
    alert("You cannot navigate in between forms");
  };

  const [isFirstPageFilled, setIsFirstPageFilled] = useState(false);
  const [isSecondPageFilled, setIsSecondPageFilled] = useState(false);
  const [isThirdPageFilled, setIsThirdPageFilled] = useState(false);
  const [isFourthPageFilled, setIsFourthPageFilled] = useState(false);
  const [isNavbarDisable, setIsNavbarDisable] = useState(false);

  useEffect(() => {
    const registration_form_data = JSON.parse(
      window.localStorage.getItem("registration_details")
    );
    if (
      registration_form_data &&
      Object.keys(registration_form_data).length !== 0
    ) {
      setIsFirstPageFilled(true);
    }
    const personal_form_data = JSON.parse(
      window.localStorage.getItem("personal_details")
    );
    if (personal_form_data && Object.keys(personal_form_data).length !== 0) {
      setIsSecondPageFilled(true);
    }
    const education_form_data = JSON.parse(
      window.localStorage.getItem("education_details")
    );
    if (education_form_data && Object.keys(education_form_data).length !== 0) {
      setIsThirdPageFilled(true);
    }
    const job_form_data = JSON.parse(
      window.localStorage.getItem("experience_details")
    );
    if (job_form_data && Object.keys(job_form_data).length !== 0) {
      setIsFourthPageFilled(true);
    }
    if (window.location.pathname.match(/UserAllDataDisplay/)) {
      setIsNavbarDisable(true);
    } else {
      setIsNavbarDisable(false);
    }
    if (window.location.pathname.match(/FormThanks/)) {
      setIsNavbarDisable(true);
    }
  }, []);

  return (
    <>
      <div>
        {isNavbarDisable ? (
          <h1 className="text-3xl font-bold text-center mb-2 font-times-new-roman">
            Thank You for registering
          </h1>
        ) : (
          <div>
            <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
              {isFirstPageFilled ? (
                <li className="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                  <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="hidden sm:inline-flex sm:ms-2">
                      Registered
                    </span>
                  </span>
                </li>
              ) : (
                <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                  <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                    <span className="me-2">1</span>
                    Registration
                    <span className="hidden sm:inline-flex sm:ms-2">Info</span>
                  </span>
                </li>
              )}

              {isSecondPageFilled ? (
                <li className="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                  <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="hidden sm:inline-flex sm:ms-2">
                      Personal Info Added
                    </span>
                  </span>
                </li>
              ) : (
                <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                  <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                    <span className="me-2">2</span>
                    Personal
                    <span className="hidden sm:inline-flex sm:ms-2">Info</span>
                  </span>
                </li>
              )}

              {isThirdPageFilled ? (
                <li className="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                  <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="hidden sm:inline-flex sm:ms-2">
                      Education Info Added
                    </span>
                  </span>
                </li>
              ) : (
                <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                  <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                    <span className="me-2">3</span>
                    Education
                    <span className="hidden sm:inline-flex sm:ms-2">Info</span>
                  </span>
                </li>
              )}

              {isFourthPageFilled ? (
                <li className="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                  <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="hidden sm:inline-flex sm:ms-2">
                      Job Info Added
                    </span>
                  </span>
                </li>
              ) : (
                <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                  <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                    <span className="me-2">4</span>
                    Job
                    <span className="hidden sm:inline-flex sm:ms-2">Info</span>
                  </span>
                </li>
              )}
            </ol>
          </div>
        )}
      </div>
    </>
  );
}

export default NavBar;
