import * as Yup from "yup";
//import dayjs from "dayjs";

//const graduation_end_year = dayjs().subtract(2, "year").format("YYYY-MM-DD");
//const graduation_start_year = dayjs().subtract(23, "year").format("YYYY-MM-DD");

export const Registration_Validate = Yup.object({
        email: Yup.string().email().max(30).required("Email is required"),
        password:Yup.string().min(8).max(15).matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    ).required('Password is required and must be at least 8 character'),
        confirm_password:Yup.string().oneOf([Yup.ref('password'), null], "Password must match").min(8).max(15).required('Password must be at least 8'),
    });

export const Education_Validate = Yup.object({
    university: Yup.string().required('University name is required'),
    course: Yup.string().min(3).max(6).required('Course/Degree is required'),
    date: Yup.date().required('Date of completation is required'),
    field: Yup.string().required('This field is required'),
    cgpa: Yup.string().required('CGPA is required')
});

