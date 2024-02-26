import * as Yup from "yup";

const personal_data = JSON.parse(window.localStorage.getItem('Personal Details'));
const find_birth_date = personal_data.date_of_birth;
const college_start_date = new Date(find_birth_date);
const college_end_date = new Date(find_birth_date);
const yearsForStart = 18;
const yearsForEnd = 23;

college_start_date.setFullYear(college_start_date.getFullYear() + yearsForStart);
college_end_date.setFullYear(college_end_date.getFullYear() + yearsForEnd);

export const Registration_Validate = Yup.object({
        email: Yup.string().email().max(30).required("Email is required"),
        password:Yup.string().min(8).max(15).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
            'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
            ).required('Password is required and must be at least 8 character'),
        confirm_password:Yup.string().oneOf([Yup.ref('password'), null], "Password must match").min(8).max(15).required('Password must be at least 8'),
    });

export const Education_Validate = Yup.object({
    university: Yup.string().required('University name is required'),
    course: Yup.string().required('Course/Degree is required'),
    date: Yup.date().required('Date of completation is required').min(college_start_date, 'too young for college').max(college_end_date, 'Invalid year'),
    subject: Yup.string().required('This field is required'),
    cgpa: Yup.number().required('CGPA is required').min(4.5, 'CGPA must be at least 4.5').max(9.8, 'CGPA cannot exceed 9.8')
});

