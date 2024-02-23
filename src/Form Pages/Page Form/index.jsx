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
    course: Yup.string().required('Course/Degree is required'),
    date: Yup.date().required('Date of completation is required').min(new Date('1995-01-01'), 'Date must be after or equal to 01-01-1995').max(new Date('2010-12-31'), 'Date must be before or equal to 31-12-2010'),
    subject: Yup.string().required('This field is required'),
    cgpa: Yup.number().required('CGPA is required').min(4.5, 'CGPA must be at least 4.5').max(9.8, 'CGPA cannot exceed 9.8')
});

