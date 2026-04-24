import axios from "axios"
import { useEffect, useState } from "react"

export default function AdminPage() {

    //DATA
    const [moviesList, setMoviesList] = useState([])

    //USE EFFECT
    useEffect(() => {
        axios.get('http://localhost:3000/movies')
            .then(res => {
                console.log(res.data);

                setMoviesList(res.data)


            })
    }, [])

    return (
        <>

            <div className="container">

                <div className="d-flex flex-column justify-content-evenly gap-2 overflow-x-auto">
                    {/* Title */}
                    <h1>Elenco completo  dei film.</h1>

                    {/* Table */}
                    <table className="table table-light table-striped table-hover py-5 ">

                        {/* Table Head */}
                        <thead>
                            <tr>
                                <th>Titolo</th>
                                <th>Diretto da</th>
                                <th>Genere</th>
                                <th>Anno d'uscita</th>
                                <th>Azioni</th>
                            </tr>
                        </thead>

                        {/* Table body */}
                        <tbody>

                            {moviesList.map(movie => (

                                <tr>
                                    <td>{movie.title}</td>
                                    <td>{movie.director}</td>
                                    <td>{movie.genre}</td>
                                    <td>{movie.release_year}</td>
                                    <th>
                                        <ul>
                                            <li><i class="bi bi-pencil-square"></i></li>
                                            <li><i class="bi bi-trash"></i></li>
                                        </ul>
                                    </th>
                                </tr>

                            ))}

                        </tbody>

                    </table>
                    
                    {/* Add movies button */}
                    <button className="btn btn-success align-self-center align-self-md-end mb-3">Aggiungi un film</button>
                </div>

            </div>
        </>
    )
}