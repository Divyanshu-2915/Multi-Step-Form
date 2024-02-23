import React, { useEffect, useState } from "react";
import "./App.css";
import ThankUser from "./Form Pages/ThankYou Form/FormThanks";
import UserRegistration from "./Form Pages/Page Form/UserRegistration";
import ScreenLoading from "./Form Pages/Loading Form/loading";
import UserDetails from "./Form Pages/Page Form/UserPersonalData";
import EducationInfo from "./Form Pages/Page Form/UserEducationData";
import JobInfo from "./Form Pages/Page Form/UserJobData";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDataDisplay from "./Form Pages/Page Form/UserAllDataDisplay";
import NavBar from "./Form Pages/Navbar Form/navbar";

function App() {
 // window.history.pushState(null, "", window.location.href);
 // window.onpopstate = function () {
 //   window.history.pushState(null, "", window.location.href);
 //   alert("You cannot navigate in between forms");
 // };
  
  const [isLoading, setIsLoading] = useState(true);
  //const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

 // useEffect(() => {
 //   if (window.location.pathname.match(/FormThanks/)) {
 //     setIsNavbarHidden(true);
 //   }
 // },[]);

  return (
    <>
    
      <div>
      {/*
        <div>
        {isNavbarHidden ? (null) : (<NavBar/>)}
        </div>
       
        {isLoading ? (
          <ScreenLoading />
        ) : (
          <Router>
            <Routes>
              <Route element={<UserRegistration />} path="/" />
              <Route element={<UserDetails />} path="/UserPersonalData" />
              <Route element={<EducationInfo />} path="/UserEducationData" />
              <Route element={<JobInfo />} path="/UserJobData" />
              <Route element={<ScreenLoading />} path="/loading" />
              <Route element={<UserDataDisplay />} path="/UserAllDataDisplay" />
              <Route element={<ThankUser />} path="/FormThanks" />
              <Route element={<NavBar />} path="/navbar" />
              <Route element={<UserRegistration/>} path="/UserRegistration" />
            </Routes>
          </Router>
        )}
        */}
        <JobInfo/>
      </div>
    </>
  );
}

export default App;
