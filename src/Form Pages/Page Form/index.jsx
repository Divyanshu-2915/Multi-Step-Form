import * as Yup from "yup";

function check_college_date(){
    const personal_data = JSON.parse(window.localStorage.getItem('Personal Details'));
    if(!personal_data){
         console.log("wait");
    } 
    const find_birth_date = personal_data.date_of_birth;
    const college_start_date = new Date(find_birth_date);
    const college_end_date = new Date(find_birth_date);
    const yearsForStart = 18;
    const yearsForEnd = 25;
    college_start_date.setFullYear(college_start_date.getFullYear() + yearsForStart);
    college_end_date.setFullYear(college_end_date.getFullYear() + yearsForEnd);
    console.log(college_start_date,college_end_date);
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
    date: Yup.string().test('college-date', 'Date of completion must be within college years', 
    function (value, message) {
            const { college_start_date, college_end_date } = check_college_date();
            const date = new Date(value);
            if(date.getFullYear() < college_start_date.getFullYear())
            {
                console.log('start date error');
                return ( message = 'Date of completion must be within college years');
            } else if (date.getFullYear() > college_end_date.getFullYear()){
                console.log('end date error');
                return ( message ='Date of completion must be within college years');
            } else {
                console.log('good date');
            }
            return (value, message);
        }).required('Date of completion is required'),
    subject: Yup.string().required('This field is required'),
    cgpa: Yup.number().required('CGPA is required').min(5.5, 'CGPA must be at least 4.5').max(10, 'CGPA cannot exceed 9.8')
});

{/*
.test(
        'is-college-date',
        'Date of completion must be within college years',
        function (value) {
            const { college_start_date, college_end_date } = check_college_date();
            return value >= college_start_date && value <= college_end_date;
        }
    ),
//---

Yup.addMethod(Yup.date(), 'checking_date', function() {
    //const {message} = 'Date should be in college years';
    return this.test("is-college-date", 'Date should be in college years', function(date) {
        const {startDate, endDate} = check_college_date();
        return (date >= startDate && date <= endDate);
    })
})
 */}