import React from "react";
import {
    StyledTitle,
    Avatar,
    StyledButton,
    ButtonGroup,
    StyledFromArea,
    colors,
} from "../components/Styles";
//logo
import Logo from './../assets/logo.png'
import {Userinfo} from '../auth/actions/userActions'

//auth & redux actions
import {connect,useSelector} from "react-redux";
import {logoutUser} from '../auth/actions/userActions'


//history
import {useHistory} from "react-router-dom";

const Dashboard = ({logoutUser}) => {
    const history = useHistory();
    const selectUser = (state)=> state.user
    const user = useSelector(selectUser)
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
            <StyledFromArea bg={colors.dark2}>
                <StyledTitle size={65}>Hello,{JSON.stringify(user)}
                </StyledTitle>
                {/*<ExtraText color={colors.light1}>{username.email}</ExtraText>*/}
                <Userinfo/>
                <ButtonGroup>
                    <StyledButton to="#" onClick={() => logoutUser(history)}>Logout</StyledButton>
                </ButtonGroup>
            </StyledFromArea>

        </div>
    )
}



export default connect(null, {logoutUser})(Dashboard);