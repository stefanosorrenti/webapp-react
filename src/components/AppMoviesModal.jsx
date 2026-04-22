//IMPORTS
import { Link } from "react-router-dom";



export default function AppMoviesModal({movie, modalValue, selectedValue}) {

    return (

        /* Modal */
        <>

            {modalValue && selectedValue === movie.id && (
                /* Backdrop */
                <div class="modal show d-block soft-dark-bgc" tabindex="-1">
                    <div class="modal-dialog">
                        <div class="modal-content">

                            {/* Modal header */}
                            <div class="modal-header">
                                <h5 class="modal-title">{movie.title}</h5>

                            </div>

                            {/* Modal body */}
                            <div class="modal-body">
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
                            <div class="modal-footer">
                                <button onClick={() => setModal(false)} type="button" class="btn btn-secondary" data-bs-dismiss="modal">Indietro</button>
                                <Link className="btn btn-primary" to={`/movie/${movie.id}`}>Scopri di piu...</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>



    )
}