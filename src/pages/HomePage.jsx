//IMPORTS
import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import AppCard from "../components/AppCard"

export default function HomePage() {

    //DATA
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/movies')
            .then(res => {
                //console.log(res.data);
                setMovies(res.data)
                //console.log(movies.title);
            })
    }, [])


    return (

        <>
            {/* CARDS SECTION */}
            <section>
                <div className="container">

                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5">

                        <AppCard  //Creo un componente apposito per la carda, passando come proprietà tutti dati recuperati dalle mie api
                            id={movies.id}
                            array={movies}
                            title={movies.title}
                            image={movies.image}
                            director={movies.director}
                            genre={movies.genre}
                            release_year={movies.release_year}
                            abstract={movies.abstract}
                        />

                    </div>

                </div>
            </section>
        </>


    )
}