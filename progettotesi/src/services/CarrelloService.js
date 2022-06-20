import {connect} from 'react-redux'

function aggiungiCarrello(element) {
    return function(dispatch){
        

    }
       
}

const mapStateToProps = (state) => {
    return {login: state.login};
};

export default connect(mapStateToProps)(aggiungiCarrello);