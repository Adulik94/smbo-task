
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
import {connect} from "react-redux";
import {Userinfo} from  '../auth/actions/userActions'

const NewUser = ({Userinfo}) => {
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

            </div>
            <StyledFromArea bg={colors.dark1}>
                <Avatar image={Logo}/>
                <StyledTitle size={65}>Hello User</StyledTitle>
                <Userinfo/>

                <ButtonGroup>

                    <StyledButton to="#">Logout</StyledButton>
                </ButtonGroup>
            </StyledFromArea>

        </div>
    )
}

export default connect(null,{Userinfo})(NewUser) ;