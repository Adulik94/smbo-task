import axios from "axios";
// import {sessionService} from "redux-react-session";


//------------explanations for me-------------------
//setSubmitting (false)-finishing the cycle
//values -values that user enter
//history -redirect the user tu user page history = useHistory();
//setFieldError -errors
//------------end-------------------

export const loginUser = (values, history, setFieldError, setSubmitting) => {

}

//------------explanations for me-------------------
//setSubmitting (false)-finishing the cycle
//values -values that user enter
//history -redirect the user tu user page history = useHistory();
//setFieldError -errors
//------------end-------------------

export const signupUser = (values, history, setFieldError, setSubmitting) => {
    console.log("signupUser -",values)
    axios.post('http://212.42.212.29:3001/auth/register',values, {
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(function (response) {
        console.log("new user add")
        console.log(response)

        // history.push('/user')
        setSubmitting(false)
    }).catch(function (error) {
        console.log(error);


    });
}
//
export const logoutUser = () => {

}