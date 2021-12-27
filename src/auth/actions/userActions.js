import axios from "axios";

import { sessionService } from "redux-react-session";
import { useEffect, useState } from "react";
//api
import { signInUrl } from "../../api/api";

//------------explanations for me-------------------
//setSubmitting (false)-finishing the cycle
//values -values that user enter
//history -redirect the user tu user page history = useHistory();
//setFieldError -errors
//------------end-------------------

export const loginUser = (values, history, setFieldError, setSubmitting) => {
    //values from
    const paramName = values.email.split("@")[0];
    return () => {
        //get some data
        axios
            .get(signInUrl, {
                //query parameter for passing specific "Name" to the api
                params: {
                    name: paramName
                }
            })
            .then((response) => {
                // console.log("data here => 0", response.data);
                const { data } = response;
                //  console.log("{data}",data)
                const userData = data.name;
                //console.log("userData",userData)
                const token = userData;
                console.log("token", token);
                sessionService
                    .saveSession(token)
                    .then(() => {
                        sessionService
                            .saveUser(userData)
                            .then(() => {
                                history.push("/dashboard");
                            })
                            .catch((err) => console.error(err));
                    })
                    .catch((err) => console.error(err));
            });
        //complete submission
        setSubmitting(false);
    };
};
//
export const signupUser = (
    credentials,
    history,
    setFieldError,
    setSubmitting
) => {
    return async (dispatch) => {
        // const response = await axios.get(
        //     url,
        //     credentials,
        //     {
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //     },
        // );
        //
        // const {data} = response;
        // console.log("here : .>", data.status);
        //
        // if (data.status === 400) {
        //     const {message} = data;
        //     if (message.includes("Email")) {
        //         setFieldError("email", message);
        //     }
        //     //complete submission
        //     setSubmitting(false);
        // } else if (data.status === 200) {
        //     //login user after signup
        //     const {email, password} = credentials;
        //     console.log("from signup=>", email, password);
        //
        //     dispatch(
        //         loginUser(
        //             {email, password},
        //             history,
        //             setFieldError,
        //             setSubmitting,
        //         ),
        //     );
        // }
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

export const logoutUser = (history) => {
    return () => {
        sessionService.deleteSession();
        sessionService.deleteUser();
        history.push("/");
    };
};
