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

    
    return(
        
        <ul>
            {movies.map(movie => (
                 <Link key={movie.id} to={`/movie/${movie.id}`}><li>{movie.title}</li></Link> 
                
            ))}
        </ul>

    )
}