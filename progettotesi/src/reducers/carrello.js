const carrelloReducer = (state=false, action) =>{
    switch(action.type){
        case 'AGGIUNGI':
            console.log('ELEMENTO AGGIUNTO AL CARRELLO');
            
            break;
            
        case 'RIMUOVI':
            return false;
        default:
            return false;
    }
}

export default carrelloReducer;