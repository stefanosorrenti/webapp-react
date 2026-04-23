//IMPORTS
import { Link } from "react-router-dom";



export default function AppMoviesModal({movie, setModalValue, modalValue, selectedValue,}) {
    
    return (

        /* Modal */
        <>

            {modalValue && selectedValue === movie.id && (
                /* Backdrop */
                <div className="modal show d-block soft-dark-bgc" tabindex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">

                            {/* Modal header */}
                            <div className="modal-header">
                                <h5 className="modal-title">{movie.title}</h5>

                            </div>

                            {/* Modal body */}
                            <div className="modal-body">
                                <p>
                                    <strong>Descriione: </strong>{movie.abstract}
                                    <ul className="mt-3">
                                        <li><strong>Diretto da: </strong>{movie.director}</li>
                                        <li><strong>Genere: </strong>{movie.genre}</li>
                                        <li><strong>Anno: </strong>{movie.release_year}</li>
                                    </ul>
                                </p>
                            </div>

                            {/* Modal footer */}
                            <div className="modal-footer">
                                <button onClick={() => setModalValue(false)} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Indietro</button>
                                <Link className="btn btn-primary" to={`/movie/${movie.id}`}>Scopri di piu...</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>



    )
}