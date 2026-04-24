//IMPORTS
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import AppMovieBanner from "../components/AppMovieBanner"
import AppListOfReviews from "../components/AppListOfReviews"
import { use } from "react"
import AppForm from "../components/AppForm"
import { useLoader } from "../../contexts/LoaderContext"
import { Puff } from "react-loader-spinner"
export default function MoviesPage() {

    //DATA
    const { setLoader, loader } = useLoader()
    const { id } = useParams()
    const [singleMovie, setSingleMovie] = useState([])
    const [renderForm, setRenderForm] = useState(false)
    const [movieApi, setMovieAPi] = useState(
        
        axios.get(`http://localhost:3000/movies/${id}`)
            .then(res => {

                setSingleMovie(res.data)
                setLoader(false)
            })
    )
    
    useEffect(() => {movieApi}, [])




    //console.log(singleMovie);
    if (singleMovie.length === 0) return <Puff
                visible={true}
                height="80"
                width="80"
                color="#ee250f"
                ariaLabel="puff-loading"
                
                wrapperClass="d-flex justify-content-center align-items-center vh-100"
        
        />

    return (

        <>
            {/* Movie info section */}
            <section>
                <div className="container">
                    <AppMovieBanner
                        image={singleMovie.image}
                        title={singleMovie.title}
                        director={singleMovie.director}
                        genre={singleMovie.genre}
                        abstract={singleMovie.abstract}
                        avg={singleMovie.avg_vote}
                    />
                </div>
            </section>

            {/* Reviews section */}
            <section>
                <div className="container text-center">


                    {/* Form */}
                    <AppForm paramsId={id} reviewRefresh={movieApi} />

                    {/* Reviews*/}
                    <div className="row row-cols-1 mt-3">
                        <h2>RECENSIONI:</h2>

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