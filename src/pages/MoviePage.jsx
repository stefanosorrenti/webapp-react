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

            </section>

            {/* Reviews section */}
            <section>
                <div className="container">
                    <h2>RECENSIONI:</h2>
                </div>
            </section>

        </>

        /* 
    
    
    "genre": "Science Fiction",
    "release_year": 2010,
    "abstract": "A skilled thief is given a chance at redemption if he can successfully perform inception.",
    "image": "inception.jpg",
    "created_at": "2024-11-29T10:40:13.000Z",
    "updated_at": "2025-05-22T10:55:27.000Z",
    "reviews": [ */


    )
}