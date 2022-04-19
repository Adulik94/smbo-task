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
import {FiMail, FiLock} from "react-icons/fi";
//loader
import Loader from "react-loader-spinner";

//aut & redux

import {connect} from "react-redux";
import {loginUser} from "../auth/actions/userActions";
import { useHistory} from "react-router-dom";


const Login = ({loginUser}) => {
    const history = useHistory();
    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo}/>
                <StyledTitle color={colors.theme} size={30}>Hello User</StyledTitle>
                <Formik
                    initialValues={{
                        email: "",
                        password: ""
                    }}
                    validationSchema={Yup.object({
                        email: Yup.string()
                            .email("Email is invalid or already taken")
                            .required("Required"),
                        password: Yup.string()
                            .min(8, "Password is too short  ")
                            .max(20, "Password is too long")
                            .required("Required"),
                    })
                    }
                    onSubmit={(values, {setSubmitting, SetFieldError}) => {
                        console.log(values)
                        loginUser(values, history, SetFieldError, setSubmitting)
                    }}
                >
                    {({isSubmitting}) => (
                        <Form>
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
                            <ButtonGroup>
                                {!isSubmitting && <StyledFormButton type='submit'>
                                    Login
                                </StyledFormButton>}
                                {isSubmitting && (
                                    <Loader
                                        type="Bars"
                                        color={colors.theme}
                                        height={50}
                                        width={100}
                                    />
                                )}
                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>
                <ExtraText>
                    New here?( ͡≖ ‿‿ ͡≖) 👉<TextLink to="/signup"> Signup </TextLink>
                </ExtraText>
            </StyledFormArea>
            <CopyRightText>All rights are reserved &copy;2021 </CopyRightText>
        </div>
    );
}

export default connect(null, {loginUser})(Login);