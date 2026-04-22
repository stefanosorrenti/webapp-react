import AppReview from "./AppReview";

export default function AppListOfReviews({array, id, name, vote, text}) {

    const stars = []
    
    


    return(
        <>
        {/* Eseguo il map sulla chiave valore che contiene le mie recensioni  */}
        {array.map(review => (
                            <div key={review.id} className="col card align-items-start p-5 my-3">

                                <AppReview name={review.name} vote={review.vote} />

                                <span><strong>Contenuto: </strong>{review.text}</span>
                            </div>
                        ))}

                    
        
        </>
    )
}