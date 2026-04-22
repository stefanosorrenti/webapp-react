import { useEffect, useState } from "react"

export default function AppReview({ name, vote }) {
    //DATA
    const stars = [] //Variabile d'appoggio per stampare le stelle nelle valutazioni
    
    //Creo una funzione per renderizzare le stelle passando come parametro il voto
    function getStars(vote) {
        for (let i = 0; i < vote; i++) { //Qui sto dicendo di pushare nella variabile d'appoggio un quantità di stelle PIENE pari al numero del voto
            stars.push(<i class="bi bi-star-fill text-warning"></i>)
        }

        for(let i = vote; i < 5; i++) { //Qui sto dicendo di pushare nella variabile d'appoggio un quantità di stelle VUOTE partendo dal numero del voto 
        // per un massimo di 5 volte, quello che otterrò la differenza di questi due valori in stelle vuote
            stars.push(<i class="bi bi-star text-warning"></i>)
        
        } 
        
        return stars
    }
    






    return (
        /* Card per le recensioni */
        <div className="card-head">

            <span>
                <strong>Nome:</strong> {name} {/* Stampo il nome passato come props */}
            </span>
            <span>
                <strong>Voto: </strong> {getStars(vote)} {/* Stampo il voto eseguendo la funzione */}

            </span>

        </div>
    )
}