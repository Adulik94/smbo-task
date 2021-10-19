// the concept of the reducers is to interact our store ,and change when we need it
import {combineReducers} from "redux";

//session
import {sessionReducer} from "redux-react-session";
const rootReducer =combineReducers({
    session:sessionReducer
})
export default rootReducer;