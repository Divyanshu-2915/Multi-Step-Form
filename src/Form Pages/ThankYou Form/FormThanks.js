import React from "react";

function ThankUser() {
  window.history.pushState(null, "", window.location.href);
  window.onpopstate = function () {
    window.history.pushState(null, "", window.location.href);
    alert("You cannot navigate in between forms");
  };

  //---
  const UserName = JSON.parse(window.localStorage.getItem("personal_details"));
  const redirect_to_main_page = () => {
    window.location.replace("./UserRegistration");
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="main-box bg-blue-200 p-5 rounded-lg">
        <h1 className="text-3xl font-bold mb-4">
          Thank You For The Information {UserName.first_name}
        </h1>
        <h4>Your details have been submitted to us</h4>
      </div>
      <div className="semi-box mt-8">
        <h4>Want to fill another form</h4>
        <button
          onClick={redirect_to_main_page}
          className="main-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Main Page
        </button>
      </div>
    </div>
  );
}

export default ThankUser;
