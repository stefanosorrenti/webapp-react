//IMPORTS

import { useState } from "react";
import { Link } from "react-router-dom";
import AppModal from "./AppMoviesModal";
import AppMoviesModal from "./AppMoviesModal";


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
                <div key={element.id} className="card justify-content-center align-items-center ">


                    {/* Card title */}
                    <h3 className="card-title fs-3">{element.title}</h3>

                    {/* Modal */}
                    <AppMoviesModal movie={element} setModalValue={setModal} modalValue={modal} selectedValue={selected} />

                    {/* Card-img */}

                    <div onMouseEnter={() => getHover(element.id)} onMouseLeave={() => setHovered(false)} onClick={() => setModal(true)} className="img-container" >
                        <img src={`http://localhost:3000/movies_cover/${element.image}`} alt="" />
                        <div className={hovered && selected === element.id ? 'hover-effect' : 'hover-effect d-none'}><i className="bi bi-eye-fill"></i></div>

                    </div>

                    {/* Card text */}
                    <div className="card-body d-md-none">
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
                        
                        <Link className="btn btn-primary my-3 d-md-none" to={`/movie/${element.id}`}>Scopri di piu...</Link>

                </div >
            ))
            }
        </>
    )
}