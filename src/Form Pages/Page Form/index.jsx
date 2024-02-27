import * as Yup from "yup";

function check_college_date() {
    const personal_data = JSON.parse(window.localStorage.getItem('Personal Details'));
    if(!personal_data){
        return false;
    } 
    const find_birth_date = personal_data.date_of_birth;
    const college_start_date = new Date(find_birth_date);
    const college_end_date = new Date(find_birth_date);
    const yearsForStart = 18;
    const yearsForEnd = 23;
    college_start_date.setFullYear(college_start_date.getFullYear() + yearsForStart);
    college_end_date.setFullYear(college_end_date.getFullYear() + yearsForEnd);
    return { college_start_date, college_end_date };
}

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
    date: Yup.date().required('Date of completion is required').test(
        'is-college-date',
        'Date of completion must be within college years',
        function (value) {
            const { college_start_date, college_end_date } = check_college_date();
            return value >= college_start_date && value <= college_end_date;
        }
    ),
    subject: Yup.string().required('This field is required'),
    cgpa: Yup.number().required('CGPA is required').min(5.5, 'CGPA must be at least 4.5').max(10, 'CGPA cannot exceed 9.8')
});