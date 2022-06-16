

const loginReducer = (state=false, action) =>{
    switch(action.type){
        case 'LOGIN':
            /*loginUtente().then((x)=> {return x;} );*/

            console.log(action.payload);
            return action.payload;
            
            break;
        case 'LOGOUT':
            return false;
        default:
            return false;
    }
}

export default loginReducer;