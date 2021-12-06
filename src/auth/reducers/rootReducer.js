// the concept of the reducers is to interact our store ,and change when we need it
import { combineReducers } from "redux";

//session
import { sessionReducer } from "redux-react-session";

function user(state = {}, action) {
    switch (action.type) {
        case "ADD_USER":
            return action.payload;
        default:
            return state;

    }
}

const rootReducer = combineReducers({
    session: sessionReducer,
    user
});
export default rootReducer;
