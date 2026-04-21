//IMPORTS
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function MoviesPage() {

    //DATA
    const { id } = useParams()
    const [singleMovie, setSingleMovie] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3000/movies/${id}`)
            .then(res => {

                setSingleMovie(res.data)
            })
    }, [])




    //console.log(singleMovie);
    if (singleMovie.length === 0) return <h1>Loading...</h1>

    return (

        <>
            {/* Movie info section */}
            <section>
                <div className="container">
                    {/* Movie img banner */}
                    <div className="movie-img-container">
                        <img className="img-fluid w-25" src={`http://localhost:3000/movies_cover/${singleMovie.image}`} alt="" />
                    </div>

                    {/* Movie detail */}
                    <div className="movie-info text-center">

                        <h2 className="mt-3">{singleMovie.title}</h2>
                        <small className=" d-block text-body-secondary">Diretto da: {singleMovie.director}</small>
                        <small className="text-body-secondary">Genere: {singleMovie.genre}</small>

                        <h3>Descrizione</h3>

                        <p>{singleMovie.abstract}</p>


                    </div>
                </div>
            </section>

            {/* Reviews section */}
            <section>
                <div className="container text-center">
                    <h2>RECENSIONI:</h2>
                    <div className="row row-cols-1 mt-3">

                    {singleMovie.reviews.map(review => (
                        <div className="col card align-items-start p-5">

                            <div className="card-head">
                                <span><strong>Nome:</strong> {review.name}</span>
                                <span><strong>Voto: </strong>{review.vote}</span>
                            </div>

                            <span><strong>Contenuto: </strong>{review.text}</span>
                        </div>
                    ))}

                    </div>
                </div>
            </section>

        </>


    )
}