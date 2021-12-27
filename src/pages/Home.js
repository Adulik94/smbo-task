import React from "react";
import {
    StyledTitle,
    StyledSubtitle,
    Avatar,
    StyledButton,
    ButtonGroup,
    colors,
    StyledFormArea
} from "../components/Styles";
//logo
import Logo from './../assets/logo.png'

const Home = () => {
    return (
        <div>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                backgroundColor: 'transparent',
                width: '100%',
                padding: '15px',
                display: 'flex',
                justifyContent: 'flex-start'
            }}>
                <Avatar image={Logo}/>
            </div>
            <StyledFormArea bg={colors.dark3}>
                <StyledTitle size={65}>Welcome To Page</StyledTitle>
                <StyledSubtitle size={27}>Fell Free Fell Free Fell Free </StyledSubtitle>
                <ButtonGroup>
                    <StyledButton to='/login'>LogIn</StyledButton>
                    <StyledButton to='/signup'>Signup</StyledButton>
                </ButtonGroup>
            </StyledFormArea>
        </div>
    )
}

export default Home;