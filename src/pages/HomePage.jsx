//IMPORTS
import { useState, useEffect } from "react"
import axios from "axios"

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
                <li key={movie.id}>{movie.title}</li>
            ))}
        </ul>

    )
}