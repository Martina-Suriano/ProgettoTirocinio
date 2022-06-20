import { Utente } from "../model/Utente";

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