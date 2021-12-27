import React from "react";
import {
    StyledTitle,
    Avatar,
    StyledButton,
    ButtonGroup,
    StyledFormArea,
    colors
} from "../components/Styles";
//logo
import Logo from "./../assets/logo.png";
import { Userinfo } from "../auth/actions/userActions";

//auth & redux actions
import { connect, useSelector } from "react-redux";
import { logoutUser } from "../auth/actions/userActions";

//history
import { useHistory } from "react-router-dom";

const Dashboard = ({ logoutUser, user }) => {
    const history = useHistory();
    console.log("Dashboard user", user);
    return (
        <div>
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    backgroundColor: "transparent",
                    width: "100%",
                    padding: "0px",
                    display: "flex",
                    justifyContent: "flex-start"
                }}
            >
                <Avatar image={Logo} />
            </div>
            <StyledFormArea bg={colors.dark2}>
                <StyledTitle size={65}>
                    Welcome {typeof user !== "string" ? "" : user}
                </StyledTitle>
                <Userinfo />
                <ButtonGroup>
                    <StyledButton to="#" onClick={() => logoutUser(history)}>
                        Logout
                    </StyledButton>
                </ButtonGroup>
            </StyledFormArea>
        </div>
    );
};

const mapStateToProps = ({ session }) => ({
    user: session.user
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
