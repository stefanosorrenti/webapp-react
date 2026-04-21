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
            <ul>
                <li>{singleMovie.title}</li>
            </ul>

            <section>
                <h3>Recensioni:</h3>
                <ul>
                    {singleMovie.reviews.map(review => (
                        <li key={review.id}>{review.name} <br /> Testo: {review.text}</li>
                    ))}
                </ul>
            </section>
        </>


    )
}