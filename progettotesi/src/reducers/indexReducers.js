import loginReducer from "./login";
import { combineReducers } from "redux";
import carrelloReducer from "./carrello";

const rootReducer = combineReducers({
    login: loginReducer,
    carrello: carrelloReducer
})

export default rootReducer;