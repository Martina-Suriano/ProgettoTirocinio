import { Utente } from "../model/Utente";

/*export const loginUtente = async ()=> {
        var x= await fetch("http://localhost:3001/utenti")
          /*  .then(response => response.json())
            .then(data => {
                var nuovoUtente= data.map((element) => {
                    return new Utente (element.id, element.nome, element.cognome, element.email, element.carrello);
                })

                console.log('sono :' + nuovoUtente[0].nome);
                return nuovoUtente[0];
            });
        var y= await x.json();
        var nuovoUtente= y.map((element) => {
            return new Utente (element.id, element.nome, element.cognome, element.email, element.carrello);
        })
         return nuovoUtente[0];
}*/

export function loginUtente() {
    return function(dispatch){
        return fetch("http://localhost:3001/utenti")
        .then(response => response.json())
        .then(data => {
            var nuovoUtente= data.map((element) => {
                return new Utente (element.id, element.nome, element.cognome, element.email, element.carrello);
            });
        return dispatch({type: "LOGIN", payload: nuovoUtente[0]});
        })
    }
}