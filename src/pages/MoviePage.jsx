//IMPORTS
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import AppMovieBanner from "../components/AppMovieBanner"
import AppListOfReviews from "../components/AppListOfReviews"
import { use } from "react"

export default function MoviesPage() {

    //DATA
    const { id } = useParams()
    const [singleMovie, setSingleMovie] = useState([])
    const [renderForm, setRenderForm] = useState(false)

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

                    {renderForm ? (

                        /* Add review */
                        <div className="p-3">
                            <h3>Lascia qui la tua recensione!</h3>
                            {/* Name form */}
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="name" placeholder="Nome" />
                                <label for="name">Nome</label>
                            </div>

                            {/* Text form */}
                            <div className="form-floating mb-3">
                                <textarea className="form-control" placeholder="Lascia qui la tua recensione" id="content"></textarea>
                                <label for="content">Lascia qui la tua recensione!</label>
                            </div>

                            {/* Stars form */}
                            <div className="form-floating">
                                <select className="form-select" id="stars" aria-label="Floating label disabled select example">
                                    <option selected>Quanto ti è piaciuto?</option>
                                    <option className=" text-warning" value="1">★</option>
                                    <option className=" text-warning" value="2">★</option>
                                    <option className=" text-warning" value="3">★★★</option>
                                    <option className=" text-warning" value="4">★★★★</option>
                                    <option className=" text-warning" value="5">★★★★★</option>
                                </select>
                                <label for="stars">Seleziona la tua valutazione</label>

                                {/* Submit */}
                                <button onClick={() => setRenderForm(false)} className="btn btn-success my-3">Invia Recensione</button>
                            </div>
                        </div>
                    ) : (

                        <button onClick={() => setRenderForm(true)} className="btn btn-warning my-3">Aggiungi una recensione</button>
                    )}


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