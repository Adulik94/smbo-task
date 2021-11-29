//style
import {StyledContainer} from "./components/Styles";
//pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NewUser from "./pages/NewUser";
//loader
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
    return (
        <Router>
            <StyledContainer>
                <Switch>
                    <Route path="/signup">
                        <Signup/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/user">
                        <NewUser/>
                    </Route>
                    <Route path="/">
                    <Home/>
                </Route>
                </Switch>
            </StyledContainer>
        </Router>


    );
}

export default App;
