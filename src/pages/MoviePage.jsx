//IMPORTS
import { useParams } from "react-router-dom"
export default function MoviesPage() {
    
    const { id } = useParams()

    return (
        <h1 className="text-danger">MOVIE PAGE {id}</h1>
    )
}