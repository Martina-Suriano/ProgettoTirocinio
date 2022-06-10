import React from 'react'
import './css/Negozio.css'
import {Prodotto} from '../model/Prodotto'
/*import {useSelector, useDispatch} from 'react-redux'
import { increment } from '../action/indexAction'*/

class Negozio extends React.Component {
    constructor(props){
        super(props)
        this.state={
            prodotti:[]
        }
    }

    /*login= useSelector(state => state.login);
    counter= useSelector(state => state.counter);
    dispatch= useDispatch(); */


    componentDidMount() {
      this.caricaProdotti();

    }

    caricaProdotti(){
        fetch('http://localhost:3001/prodotti')
            .then(response => response.json())
            .then(data => {
                var prodottoFiltrato= data.filter(x => x.tipo === this.props.tipoProdotto);
                var nuovoProdotto= prodottoFiltrato.map((element) => {
                    return new Prodotto(element.nome, element.descrizione, element.prezzo, element.immagine, element.tipo);
                })
                var aggiungiProdotto= nuovoProdotto.map((element)=> { 
                    return  <li>
                                <button type="button" className='btn btn-link' onClick={()=>this.onClick(element)}>
                                    <img src={element.immagine} alt='Foto'/> 
                                </button>
                                
                            </li>
                });
              
                this.setState({
                    prodotti: aggiungiProdotto,
                    prodottoCorrente: nuovoProdotto[0]
                });
                
            })
    }

    onClick = (element) => {
        this.setState({
            prodottoCorrente: element
        })
    }

    componentDidUpdate(oldprops){
        if(oldprops.tipoProdotto!== this.props.tipoProdotto){
           this.caricaProdotti();
        }
    }

    onClickButton= (element) => {
        this.setState({
            ordine: element,
            contCarrello: this.state.contCarrello + 1
        })
        var c= this.state.contCarrello;
        console.log(element);
        console.log(c);
    }

    render = () => {
        return (
            <div className='paginaProdotti'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className={"header"+this.props.tipoProdotto}>

                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <h2> Prodotti disponibili </h2>
                            <ul className='elencoprodotti' type='none'>
                                
                                { this.state.prodotti }
                                
                            </ul>
                        </div>
                        {this.state.prodottoCorrente && (
                            <div className='col-sm-6'>

                                    <h2 className='product-title'> Nome Prodotto: {this.state.prodottoCorrente.nome} </h2>
                                    
                                    <p className='product-description'> Descrizione: {this.state.prodottoCorrente.descrizione} </p>
                                    <h5 className='price'> Prezzo: {this.state.prodottoCorrente.prezzo} € </h5>
                                    
                                    <div className='acquista'>
                                        <button type="button" className='btn btn-success' onClick={()=> this.onClickButton(this.state.prodottoCorrente)}>
                                             Aggiungi al carrello
                                        </button>
                                    </div>

                                    <div className='contCarrello'>
                                        <h4> Prodotti nel carrello: </h4>
                                    </div>
                                
                            </div>
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Negozio;
