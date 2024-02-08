import React, { useEffect, useState } from "react";

function UserDataDisplay() {
  window.history.pushState(null, "", window.location.href);
  window.onpopstate = function () {
    window.history.pushState(null, "", window.location.href);
    alert("You cannot navigate in between forms");
  };

  //---
  const [userFormData, setUserFormData] = useState({
    registration_details: {},
    personal_details: {},
    education_details: {},
    experience_details: {},
  });

  useEffect(() => {
    const registrationForm = JSON.parse(
      window.localStorage.getItem("registration_details")
    );
    const personalDataForm = JSON.parse(
      window.localStorage.getItem("personal_details")
    );
    const educationDataForm = JSON.parse(
      window.localStorage.getItem("education_details")
    );
    const jobDataForm = JSON.parse(
      window.localStorage.getItem("experience_details")
    );

    setUserFormData({
      registration_details: registrationForm,
      personal_details: personalDataForm,
      education_details: educationDataForm,
      experience_details: jobDataForm,
    });
  }, []);

  console.log(userFormData);

  return (
    <div className="container mx-auto p-4 font-serif">
      <div className="border p-4 rounded-md">
        {Object.keys(userFormData).map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl font-bold mb-2">{section}</h2>
            <ul>
              {Object.keys(userFormData[section]).map((key, idx) => (
                <li key={idx} className="mb-2">
                  <strong className="font-normal mr-2">{key}:</strong>{" "}
                  {typeof userFormData[section][key] === "object"
                    ? JSON.stringify(userFormData[section][key])
                    : userFormData[section][key]}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          window.location.replace("./FormThanks");
        }}
      >
        Submit Data{" "}
      </button>
    </div>
  );
}

export default UserDataDisplay;
