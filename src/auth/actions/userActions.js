import axios from "axios";
import React, { useEffect, useState } from "react";
//import { colors, StyledFromArea, StyledTitle } from "../../components/Styles";
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
                console.log("response", response);
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

export const signupUser = () => {
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
    const [apiData, setApiData] = useState([]);

    // an alternative for componentDidMount
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((json_result) => setApiData(json_result.data))
            // or
            //.then(json_result => handleState(json_result.data))
            .catch((error) => console.log(error));
    }, []); // an empty array dependency (makes the useEffect to run only once, to avoid infinite loop)

    return (
        <div>
            {apiData.map((item) => {
                return <div key={item.id}>{item.name}</div>;
            })}
        </div>
    );
};

//login sxmeluc parse anq anum email@ vercnum eng minchev @,ogtagorcum eng vorpes username
//username ogtagorcum enq vor call anenq api-in userin stanalu hamar
//success stanalu depqum set anel vorpes global user u redirect anel user ej

//inch e rest@ query param. resi metodner
