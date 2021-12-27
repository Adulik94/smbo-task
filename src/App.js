//style
import { StyledContainer } from "./components/Styles";
//pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
//loader
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { BrowserRouter as Router, Switch } from "react-router-dom"

//auth & redux
import AuthRoute from "./components/AuthRoute";
import BasicRoute from "./components/BasicRoute";
import {connect} from "react-redux";


function App({checked}) {
    console.log("checked",checked)
    return (
        <Router>
            {checked && (
                <StyledContainer>
                    <Switch>
                        <BasicRoute exact path ="/">
                            <Home/>
                        </BasicRoute>
                        <BasicRoute exact path="/signup" >
                            <Signup/>
                        </BasicRoute>
                        <BasicRoute exact path="/login">
                            <Login/>
                        </BasicRoute>
                        <AuthRoute exact path="/dashboard">
                            <Dashboard/>
                        </AuthRoute>
                    </Switch>
                </StyledContainer>)
            }
        </Router>
    );
}
const mapStateToProps=({session})=>({
    checked:session.checked
})
export default connect(mapStateToProps) (App);
