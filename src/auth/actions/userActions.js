import axios from "axios";
import React from "react";
import {Avatar, colors, StyledFromArea, StyledTitle} from "../../components/Styles";
import Logo from "../../assets/logo.png";


//------------explanations for me-------------------
//setSubmitting (false)-finishing the cycle
//values -values that user enter
//history -redirect the user tu user page history = useHistory();
//setFieldError -errors
//------------end-------------------

export const loginUser = (values, history, setFieldError, setSubmitting) => {
    return () => {
        axios.get('https://api2.binance.com/api/v3/ticker/24hr', {
                email: "adi@gmail.com",
                password: 12345678
            }
        ).then((response) => {
            console.log(response)
            history.push('/user')

            //completed submitting
            setSubmitting(false);

        }).catch(error => console.error(error))
        history.push('/user')
    }


}

//------------explanations for me-------------------
//setSubmitting (false)-finishing the cycle
//values -values that user enter
//history -redirect the user tu user page history = useHistory();
//setFieldError -errors
//------------end-------------------

export const signupUser = (values, history, setFieldError, setSubmitting) => {
    console.log("signupUser -", values)
    return (dispatch) => {
        axios.post('http://212.42.212.29:3001/auth/register', values, {
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((response) => {
            console.log(response.data.message);
            const {error} = response
            if (error.statusCode === 409) {
                const {message} = error

                //checking for specific errors
                if (message.includes("email")) {

                    setFieldError("password", message)
                } else if (message.includes("password")) {
                    setFieldError("password", message)
                    setFieldError("firstName", message)
                    setFieldError("lastName", message)
                }
                //complete submission
            } else if (error.statusCode === 201) {
                //login user after successfully signup
                const {email, password} = values
                dispatch(loginUser({email, password}, history, setFieldError, setSubmitting))
                history.push('/user')
            }
            setSubmitting(false);

        })
    }

}


export const Userinfo = () => {
    return (
        <div>
            <StyledFromArea bg={colors.dark1}>
                <Avatar image={Logo}/>
                <StyledTitle size={65}>Hello sdzsfcszxs User</StyledTitle>
            </StyledFromArea>
        </div>

    );
}


