import React from "react";
import { useForm } from "react-hook-form";

function JobInfo() {
  window.history.pushState(null, "", window.location.href);
  window.onpopstate = function () {
    window.history.pushState(null, "", window.location.href);
    alert("You cannot navigate in between forms");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm({
    defaultValues: {
      job_title: "",
      company: "",
      experience: "",
      position: "",
      start_date: "",
      end_date: "",
    }
  });

  const start_date = watch("start_date");
  const end_date = watch("end_date");

  const calculateExperience = () => {
    const startDate = new Date(start_date);
    const endDate = new Date(end_date);
    const today = new Date();
    if(endDate > today){
        return ("End date is invalid, it should not be greater than present date");
    }
    if( endDate.getDate() === today.getDate()){
      return ("Present");
    }
    else{
    const startYear = startDate.getFullYear();
        const endYear = endDate.getFullYear();
        const startMonth = startDate.getMonth();
        const endMonth = endDate.getMonth();
        const startDay = startDate.getDate();
        const endDay = endDate.getDate();

        let differenceInYears = endYear - startYear;
        if (endMonth < startMonth || (endMonth === startMonth && endDay < startDay)) {
            differenceInYears--;
        }

        return (differenceInYears + " Years");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-2 font-times-new-roman">
        Job Details Form
      </h1>
      <h4 className="text-lg font-bold text-center mb-6 font-times-new-roman">
        Fill all the questioned fields to proceed
      </h4>
      <h4 className="text-lg font-bold text-center mb-6 font-times-new-roman">
        Fill Your Current/Latest Job Experience
      </h4>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          window.localStorage.setItem(
            "experience_details",
            JSON.stringify(data)
          );
          window.location.replace("./UserAllDataDisplay");
        })}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="job_title"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Job Title*
          </label>
          <input
            type="text"
            placeholder="Job Title"
            autoComplete="off"
            {...register("job_title", { required: "This field is required" })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <p className="text-red-500 text-xs italic">
            {errors.job_title?.message}
          </p>
        </div>
        <div className="mb-4">
          <label
            htmlFor="company"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Company Name*
          </label>
          <input
            type="text"
            placeholder="Company Name"
            autoComplete="off"
            {...register("company", { required: "This field is required" })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <p className="text-red-500 text-xs italic">
            {errors.company?.message}
          </p>
        </div>
        <div className="mb-4">
          <label
            htmlFor="position"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Position/Designation*
          </label>
          <input
            type="text"
            placeholder="Designation"
            autoComplete="off"
            {...register("position", { required: "This field is required" })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <p className="text-red-500 text-xs italic">
            {errors.position?.message}
          </p>
        </div>
        <div className="mb-4">
          <label
            htmlFor="start_date"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Start Date*
          </label>
          <input
            type="date"
            autoComplete="off"
            {...register("start_date", { required: "This field is required" })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <p className="text-red-500 text-xs italic">
            {errors.start_date?.message}
          </p>
        </div>
        <div className="mb-4">
          <label
            htmlFor="end_date"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            End Date*
          </label>
          <input
            type="date"
            autoComplete="off"
            {...register("end_date", { required: "This field is required" })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <p className="text-red-500 text-xs italic">
            {errors.end_date?.message}
          </p>
        </div>
        <div className="mb-4">
          <label
            htmlFor="experience"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Experience (Years)*
          </label>
          <input
            type="text"
            placeholder="Experience"
            autoComplete="off"
            {...register("experience", { required: "This field is required" })}
            value={calculateExperience()}
            readOnly
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <p className="text-red-500 text-xs italic">
            {errors.experience?.message}
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default JobInfo;
