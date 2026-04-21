//IMPORTS
import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export default function HomePage() {

    //DATA
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/movies')
            .then(res => {
                console.log(res.data);
                setMovies(res.data)
            })
    }, [])

    console.log();

    return (

        <>
            {/* CARDS SECTION */}
            <section>
                <div className="container">

                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5">

                        {/* ESEGUO IL MAP PER GESTIRE I DATI PRESI DALLA NOSTRA API  */}
                        {movies.map(movie => (
                            <div className="card justify-content-center align-items-center">
                                {/* Card title */}
                                <h3 className="card-title fs-3">{movie.title}</h3>

                                {/* Card-img */}
                                <div className="img-container">
                                    <img src={`http://localhost:3000/movies_cover/${movie.image}`} alt="" />
                                </div>

                                {/* Card text */}
                                <div className="card-body">
                                    {/* List of movie data */}
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <span className="fw-bold">Diretto da: </span>
                                            {movie.director}
                                        </li>
                                        <li className="list-group-item">
                                            <span className="fw-bold">Genere: </span>
                                            {movie.genre}
                                        </li>
                                        <li className="list-group-item">
                                            <span className="fw-bold">Anno d'uscita: </span>
                                            {movie.release_year}
                                        </li>
                                        <li className="list-group-item">
                                            <span className="fw-bold">Descrizione: </span>
                                            {movie.abstract}
                                        </li>
                                    </ul>
                                    
                                </div>

                                <Link className="btn btn-primary mb-3" to={`/movie/${movie.id}`}>SCOPRI DI PIU'</Link>

                            </div>
                        ))}

                    </div>

                </div>
            </section>
        </>


    )
}