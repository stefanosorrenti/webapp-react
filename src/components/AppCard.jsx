//IMPORTS

import { useState } from "react";
import { Link } from "react-router-dom";


export default function AppCard({ id, array, title, image, director, genre, release_year, abstract }) {
    //DATA
    const [hovered, setHovered] = useState(false)
    const [selected, setSelected] = useState(0)
    const [modal, setModal] = useState(false)
    function getHover(elmentId) {
        setSelected(elmentId)
        setHovered(true)

    }
    return (

        <>



            {/* ESEGUO IL MAP PER GESTIRE I DATI PRESI DALLA NOSTRA API  */}
            {array.map(element => (
                <div key={element.id} className="card justify-content-center align-items-center position-relative mod">


                    {/* Card title */}
                    <h3 className="card-title fs-3">{element.title}</h3>

                    {/* Modal */}
                    {modal && selected === element.id && (
                        /* Backdrop */
                        <div class="modal show d-block soft-dark-bgc" tabindex="-1">
                            <div class="modal-dialog">
                                <div class="modal-content">

                                    {/* Modal header */}
                                    <div class="modal-header">
                                        <h5 class="modal-title">{element.title}</h5>
                                        
                                    </div>

                                    {/* Modal body */}
                                    <div class="modal-body">
                                        <p>
                                            <strong>Descriione: </strong>{element.abstract}
                                            <ul className="mt-3">
                                                <li><strong>Diretto da: </strong>{element.director}</li>
                                                <li><strong>Genere: </strong>{element.genre}</li>
                                                <li><strong>Anno: </strong>{element.release_year}</li>
                                            </ul>
                                        </p>
                                    </div>

                                    {/* Modal footer */}
                                    <div class="modal-footer">
                                        <button onClick={() => setModal(false)} type="button" class="btn btn-secondary" data-bs-dismiss="modal">Indietro</button>
                                        <Link className="btn btn-primary" to={`/movie/${element.id}`}>Scopri di piu...</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Card-img */}

                    <div onMouseEnter={() => getHover(element.id)} onMouseLeave={() => setHovered(false)} onClick={() => setModal(true)} className="img-container" >
                        <img src={`http://localhost:3000/movies_cover/${element.image}`} alt="" />
                        <div className={hovered && selected === element.id ? 'hover-effect' : 'hover-effect d-none'}><i className="bi bi-eye-fill"></i></div>

                    </div>

                    {/* Card text */}
                    <div className="card-body">
                        {/* List of element data */}
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <span className="fw-bold">Diretto da: </span>
                                {element.director}
                            </li>
                            <li className="list-group-item">
                                <span className="fw-bold">Genere: </span>
                                {element.genre}
                            </li>
                            <li className="list-group-item">
                                <span className="fw-bold">Anno d'uscita: </span>
                                {element.release_year}
                            </li>
                            <li className="list-group-item">
                                <span className="fw-bold">Descrizione: </span>
                                {element.abstract}
                            </li>
                        </ul>

                    </div>

                </div >
            ))
            }
        </>
    )
}