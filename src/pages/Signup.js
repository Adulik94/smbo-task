//style component
import {
    Avatar,
    colors,
    ButtonGroup,
    StyledFormButton,
    StyledFormArea,
    StyledTitle, ExtraText, TextLink, CopyRightText,
} from "../components/Styles";
import Logo from './../assets/logo.png';
//formik
import {Formik, Form} from "formik";
import {TextInput} from "../components/FormLab";
import * as Yup from 'yup';
//icons
import {FiMail, FiLock, FiUser} from "react-icons/fi";
import {GiClockwiseRotation} from "react-icons/gi";

//loader
import Loader from "react-loader-spinner";

//auth & redux

import {connect} from "react-redux";
import {signupUser} from "../auth/actions/userActions";
import {useHistory} from "react-router-dom";

const Signup = ({signupUser}) => {
    const history = useHistory();

    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo}/>
                <StyledTitle color={colors.theme} size={30}>User Signup </StyledTitle>
                <Formik
                    initialValues={{email: "", password: "", firstName: "", lastName: "", passwordConfirm: ""}}
                    validationSchema={Yup.object().shape({
                        email: Yup.string()
                            .email()
                            .required("Required"),
                        password: Yup.string()
                            .required("No password provided.")
                            .min(6, "Password is too short - should be 6 chars minimum.")
                            .matches(/(?=.*[0-9])/, "Password must contain a number."),
                        passwordConfirm: Yup.string()
                            .oneOf([Yup.ref('password'), null], 'Passwords must match'),
                        firstName: Yup.string()
                            .required("It must be filled,please add your Firs name")
                            .min(3, "C'mon, your name is longer than that"),
                        lastName: Yup.string()
                            .required("It must be filled,please add your Last name")
                            .min(2, "C'mon, your last name is longer than that"),
                    })}
                    onSubmit={(values, {setSubmitting,SetFieldError}) => {
                        console.log("onSubmit values",values)
                        signupUser(values,history,SetFieldError, setSubmitting)
                    }}

                >
                    {({isSubmitting}) => (
                        <Form >
                            <TextInput
                                type='text'
                                name = 'firstName'
                                label='First Name'
                                placeholder='John'
                                icon={<FiUser/>}
                            />
                            <TextInput
                                type='text'
                                name = 'lastName'
                                label='Last Name'
                                placeholder='Doe'
                                icon={<FiUser/>}
                            />
                            <TextInput
                                name='email'
                                type='text'
                                label='Email'
                                placeholder='emailexample@gmail.com'
                                icon={<FiMail/>}
                            />
                            <TextInput
                                name='password'
                                type='password'
                                label='Password'
                                placeholder='*********'
                                icon={<FiLock/>}
                            />
                            <TextInput
                                name='passwordConfirm'
                                type='password'
                                label='Confirm Password'
                                placeholder='*********'
                                icon={<GiClockwiseRotation/>}
                            />
                            <ButtonGroup>
                                {!isSubmitting && <StyledFormButton type='submit'>
                                    Signup
                                </StyledFormButton>}
                                {isSubmitting && (
                                    <Loader
                                        type="Bars"
                                        color={colors.theme}
                                        height={49}
                                        width={100}
                                    />
                                )}
                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>
                <ExtraText>

                   Already have an account? <TextLink to="/login">Login </TextLink>
                </ExtraText>
            </StyledFormArea>
            <CopyRightText>All rights are reserved &copy;2021 </CopyRightText>
        </div>
    );
}

export default connect(null,{signupUser})(Signup);