import { Utente } from "../model/Utente";

export const loginUtente = ()=> {

    
        fetch("http://localhost:3001/utenti")
            .then(response => response.json())
            .then(data => {
                var nuovoUtente= data.map((element) => {
                    return new Utente (element.id, element.nome, element.cognome, element.email, element.carrello);
                })

                console.log('sono :' + nuovoUtente[0].nome);
                return nuovoUtente[0];
            });
    


}