export default function AppReview({name, vote}) {


    return (

        <div className="card-head">
            <span><strong>Nome:</strong> {name}</span>
            <span><strong>Voto: </strong>{vote}</span>
        </div>
    )
}