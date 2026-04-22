//IMPORTS
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import AppMovieBanner from "../components/AppMovieBanner"
import AppListOfReviews from "../components/AppListOfReviews"

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
                    <AppMovieBanner image={singleMovie.image} title={singleMovie.title} director={singleMovie.director} genre={singleMovie.genre} abstract={singleMovie.abstract} />
                </div>
            </section>

            {/* Reviews section */}
            <section>
                <div className="container text-center">
                    <h2>RECENSIONI:</h2>
                    <div className="row row-cols-1 mt-3">

                        {/* Inserisco manualmente le chiavi nelle props e non solo l'array perchè voglio rendere riutilizzabile il componente
                        se mettessi solo l'array (singleMovie.reviews) il componente sarebbe meno flessibile (se le chiavi del componente cambiano ad esempio?) */}
                        <AppListOfReviews
                            array={singleMovie.reviews}
                            id={singleMovie.id}
                            name={singleMovie.name}
                            vote={singleMovie.vote}
                            text={singleMovie.text}
                        />

                    </div>
                </div>
            </section>

        </>


    )
}