import axios from "axios";
import React, { useEffect, useState } from "react";
// import {sessionService} from "redux-react-session"
import { colors, StyledFromArea, StyledTitle } from "../../components/Styles";
import {sessionService} from "redux-react-session";

//------------explanations for me-------------------
//setSubmitting (false)-finishing the cycle
//values -values that user enter
//history -redirect the user tu user page history = useHistory();
//setFieldError -errors
//------------end-------------------

const url = `https://api.agify.io`;

export const loginUser = (values, history, setFieldError, setSubmitting) => {
    const username = values.email.split("@")[0];
    return (dispatch) => {
        axios
            .get(url, {
                params: {
                    name: username
                }
            })
            .then((response) => {
                //if res ok
                console.log("username", username);
                dispatch({
                    type: "ADD_USER",
                    payload: username
                });
                history.push("/user");
            })
            .catch((error) => console.error(error));
        setSubmitting(false);
    };
};

//------------explanations for me-------------------
//setSubmitting (false)-finishing the cycle
//values -values that user enter
//history -redirect the user tu user page history = useHistory();
//setFieldError -errors
//------------end-------------------

export const signupUser = (values, history, setFieldError, setSubmitting) => {
    // console.log("signupUser -", values)
    // return (dispatch) => {
    //     axios.post('http://212.42.212.29:3001/auth/register', values, {
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //     }).then((response) => {
    //         console.log(response.data.message);
    //         const {error} = response
    //         if (error.statusCode === 409) {
    //             const {message} = error
    //
    //             //checking for specific errors
    //             if (message.includes("email")) {
    //
    //                 setFieldError("password", message)
    //             } else if (message.includes("password")) {
    //                 setFieldError("password", message)
    //                 setFieldError("firstName", message)
    //                 setFieldError("lastName", message)
    //             }
    //             //complete submission
    //         } else if (error.statusCode === 201) {
    //             //login user after successfully signup
    //             const {email, password} = values
    //             dispatch(loginUser({email, password}, history, setFieldError, setSubmitting))
    //             history.push('/user')
    //         }
    //         setSubmitting(false);
    //
    //     })
    // }
};

export const logoutUser = (history) => {
    return () => {
        sessionService.deleteSession()
        sessionService.deleteUser()
        history.push("/");
    };
};

export const Userinfo = () => {
    const [state, setState] = useState({ info: [] });
    useEffect(() => {
        axios
            .get("https://api2.binance.com/api/v3/ticker/24hr")
            .then((response) => {
                setState({
                    info: response.data
                });
                console.log("res data", response.data);
            });
    }, []);
    const { info } = state;
    return (
        <StyledFromArea bg={colors.dark2}>
            <StyledTitle size={16}>post!</StyledTitle>
            {/* {info.map((user) => (*/}
            {/*     <StyledTitle   key={user.data}>*/}
            {/*         <StyledTitle size={20}>{user.count}</StyledTitle>*/}
            {/*     </StyledTitle>*/}
            {/* ))}*/}
        </StyledFromArea>
    );
};

//login sxmeluc parse anq anum email@ vercnum eng minchev @,ogtagorcum eng vorpes username
//username ogtagorcum enq vor call anenq api-in userin stanalu hamar
//success stanalu depqum set anel vorpes global user u redirect anel user ej

//inch e rest@ query param. resi metodner
