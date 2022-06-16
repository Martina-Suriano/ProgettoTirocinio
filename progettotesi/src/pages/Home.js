import React from 'react'
import './css/Home.css'
import Inspire from './team/Inspire'
import {connect} from 'react-redux'
import { loginUtente } from '../services/LoginService'

class Home extends React.Component{

    onClickLogin = async ()=>  {
       await this.props.loginUtente();
    }

    render = () => {
        return (
            <div className='home'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className='welcomepage'>
                        
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className='presentazione'>
                                <h1> Benvenuto in Candy e-shop </h1>
                                <h4> Nel nostro shop online potrai trovare una vasta varietà di caramelle e cioccolata, </h4>
                                <h4> potrai inoltre organizzare le tue feste con tutto il necessario, </h4>
                                <h3> ci pensiamo noi! </h3>
                                <div className='accedi'>
                                    <button className='btn btn-success' type='button' onClick={this.onClickLogin}> LOGIN </button>
                                    <p> {this.props.login.nome} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className='inspireslot'>
                               <Inspire/>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className='homefooter'>
                                <h5> Se hai bisogno di aiuto contattaci via email: </h5>
                                <a href='##'> candyeshop@gmail.com </a>
                                <h5> oppure tramite telefono: 0982346789 </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {login: state.login};
};



export default connect(mapStateToProps, {loginUtente})(Home);
