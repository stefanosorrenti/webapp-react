//IMPORTS

import { Link } from "react-router-dom";


export default function AppCard({id, array, title, image, director, genre, release_year, abstract }) {


    return (

        <>
             {/* ESEGUO IL MAP PER GESTIRE I DATI PRESI DALLA NOSTRA API  */}
                        {array.map(element => (
                            <div key={element.id} className="card justify-content-center align-items-center">
                                {/* Card title */}
                                <h3 className="card-title fs-3">{element.title}</h3>

                                {/* Card-img */}
                                <div className="img-container">
                                    <img src={`http://localhost:3000/movies_cover/${element.image}`} alt="" />
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

                                <Link className="btn btn-primary mb-3" to={`/movie/${element.id}`}>SCOPRI DI PIU'</Link>

                            </div>
                        ))}
        </>
    )
}