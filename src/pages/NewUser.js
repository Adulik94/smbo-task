



import React from "react";
import {
    StyledTitle,
    Avatar,
    StyledButton,
    ButtonGroup,
    StyledFromArea,
    colors
} from "../components/Styles";
//logo
import Logo from './../assets/logo.png'

const NewUser = () => {
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
            <StyledFromArea bg={colors.dark1}>
                <StyledTitle size={65}>Hello User</StyledTitle>
                <ButtonGroup>
                    <StyledButton to="#">Logout</StyledButton>
                </ButtonGroup>
            </StyledFromArea>

        </div>
    )
}

export default NewUser;