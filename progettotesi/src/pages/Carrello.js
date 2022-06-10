import React from 'react'
import './css/Carrello.css'
import {Utente} from '../model/Utente'

class Carrello extends React.Component {
    constructor(props){
        super(props)
        this.state={

            ordine:[],
            totale:0
        }
    }

    componentDidMount(){
        fetch('http://localhost:3001/utenti')
            .then(response => response.json())
            .then(data => {
                var utenteFiltrato= data.filter(x => x.nome === this.props.nomeUtente);
                var nuovoUtente= utenteFiltrato.map((element) => {
                    return new Utente(element.id, element.nome, element.cognome, element.email, element.ordine, element.numprod, element.totordine);
                })
            
                console.log(nuovoUtente)
                this.setState({
                    utente: nuovoUtente[0]
                });
            })

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
                                        <h2> Carrello: 
                                            {this.state.utente ? this.state.utente.nome : ''}
                                         </h2> 
                                    </div>
                                    <div className='table-cart'>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th> Prodotto </th>
                                                    <th> Quantità </th>
                                                    <th> Totale </th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className='display-flex align-center'>
                                                            <div className='img-product'>
                                                                <img src="https://www.91-img.com/pictures/laptops/asus/asus-x552cl-sx019d-core-i3-3rd-gen-4-gb-500-gb-dos-1-gb-61721-large-1.jpg" alt="FotoProdotto" className='mCS_img_loaded'/>
                                                            </div>
                                                            <div className='name-product'>
                                                                Apple iPad Mini
                                                                G2356
                                                            </div>
                                                            <div className='price'>
                                                                $1,250.00
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className='product-count'>
                                                        <form action="#" className='count-inlineflex'>
                                                            <div className='qtyminus'> - </div>
                                                            <input type="text" name="quantity" value="1" className='qty'/>
                                                            <div className='qtyplus'> + </div>
                                                        </form>
                                                    </td>
                                                    <td>
                                                        <div className='total'>
                                                            $6,250.00
                                                        </div>
                                                    </td>
                                                    {/* manca ultima colona icona per eliminare il prodotto dal carrello */}
                                                    <td>
                                                        <a href="#" title="">
                                                            <img src="images/icons/delete.png" alt="" className='mCS_img_loaded'/>
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className='display-flex align-center'>
                                                            <div className='img-product'>
                                                                <img src="https://www.91-img.com/pictures/laptops/asus/asus-x552cl-sx019d-core-i3-3rd-gen-4-gb-500-gb-dos-1-gb-61721-large-1.jpg" alt="" className='mCS_img_loaded'/>
                                                            </div>
                                                            <div className='name-product'>
                                                                Apple iPad Mini
                                                                G2356
                                                            </div>
                                                            <div className='price'>
                                                                $1,250.00
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className='product-count'>
                                                        <form action="#" className='count-inlineflex'>
                                                            <div className='qtyminus'> - </div>
                                                            <input type="text" name="quantity" value="1" className='qty'/>
                                                            <div className='qtyplus'> + </div>
                                                        </form>
                                                    </td>
                                                    <td>
                                                        <div className='total'>
                                                            $6,250.00
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="#" title="">
                                                            <img src="images/icons/delete.png" alt="" className='mCS_img_loaded'/>
                                                        </a>
                                                    </td>
                                                </tr>
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
                                                        <td className='subtotal'>$2,589.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td> Spedizione </td>
                                                        <td className='free-shipping'> Spedizione gratuita </td>
                                                    </tr>
                                                    <tr className='total-row'>
                                                        <td> Totale </td>
                                                        <td className='price-total'>$1,591.00</td>
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

export default Carrello;