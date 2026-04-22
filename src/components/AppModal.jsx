export default function AppModal() {

    return (

        {/* Modal */}
        <div className={modal && selected === element.id ? "dynamic-modal rounded card p-0" : "d-none"}>
            {/* Modal header */}
            <div className="card-header">
                <h2>{element.title}</h2>
            </div>


            <div className="card-body">
                <ul>
                    <li>{element.director}</li>
                    <li>{element.genre}</li>
                    <li>{element.release_year}</li>
                    <li>{element.abstract}</li>
                </ul>
                <Link className="btn btn-primary mb-3" to={`/movie/${element.id}`}>SCOPRI DI PIU'</Link>
                <button onClick={() => setModal(false)}>Indietro</button>
            </div>


            {/* Modal content */}

        </div>


    )
}