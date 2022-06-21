import React from 'react'
import './css/Carrello.css'
import {connect} from 'react-redux'

class Carrello extends React.Component {
    constructor(props){
        super(props)
        this.state={
            ordine:[],
            totale:0
        }
    }

    /* {this.state.utente ? this.state.utente.nome : ''}*/

    componentDidMount(){
        this.caricaCarrello();
    }

    caricaCarrello(){
        var aggiungiCarrello= this.props.login.carrello.map((element)=> { 
            return <tr>
                        <td>
                            <div className='display-flex align-center'>
                                <div className='img-product'>
                                    <img src={element.immagine} alt="FotoProdotto"/>
                                </div>
                                <div className='name-product'>
                                    {element.nome}
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className='descrizioneprod'>
                                {element.descrizione}
                            </div>
                        </td>
                        <td>
                            <div className='price'>
                                {element.prezzo}
                            </div> 
                        </td>
                        {/* manca ultima colona icona per eliminare il prodotto dal carrello */}
                        <td>
                            <a href="#" title="">
                                <img src="images/icons/delete.png" alt="" className='mCS_img_loaded'/>
                            </a>
                        </td>
                    </tr>
        });
        
       /* var p= this.props.login.carrello[0].prezzo;
        console.log('prezzo: ', p)*/
        this.setState({
            ordine: aggiungiCarrello
            /*totale: this.state.totale+p*/
        });
    }


    render = () => {
        return (
            <div className='paginaCarrello'>
                <div className='header'>

                    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800&display=swap" rel="stylesheet"/>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
                    <div className='cart-wrap'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-8'>
                                    <div className='main-heading'> 
                                        <h2> Carrello di {this.props.login.nome} </h2> 
                                    </div>
                                    <div className='table-cart'>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th> Prodotto </th>
                                                    <th> Descrizione </th>
                                                    <th> Prezzo </th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {this.state.ordine}

                                            </tbody>
                                        </table>
                                    </div>
                                    {/* /.table-cart */}
                                </div>
                                {/* /.col-lg-8 */}
                                <div className='col-lg-4'>
                                    <div className='cart-totals'>
                                        <h3> Totale ordine </h3>
                                        <form action="#" method="get" accept-charset="utf-8">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td> Subtotale </td>
                                                        <td className='subtotal'> {this.state.totale} </td>
                                                    </tr>
                                                    <tr>
                                                        <td> Spedizione </td>
                                                        <td className='free-shipping'> Spedizione gratuita </td>
                                                    </tr>
                                                    <tr className='total-row'>
                                                        <td> Totale </td>
                                                        <td className='price-total'> {this.state.totale} </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div className='btn-cart-totals'>
                                                <a href="#" className="checkout round-black-btn" title=""> Ordina </a>
                                            </div>
                                            {/* /.btn-cart-totals */}
                                        </form>
                                        {/* /form */}
                                    </div>
                                    {/* /.cart-totals */}
                                </div>
                                {/* /.col-lg-4 */}
                            </div>
                        </div>
                    </div>





                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {login: state.login};
};

export default connect(mapStateToProps)(Carrello);