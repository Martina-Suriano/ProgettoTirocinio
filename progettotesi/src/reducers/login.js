import { loginUtente } from "../services/LoginService.js"

const loginReducer = (state=false, action) =>{
    switch(action.type){
        case 'LOGIN':
            console.log(loginUtente());
            break
        case 'LOGOUT':
            return false;
        default:
            return false;
    }
}

export default loginReducer;