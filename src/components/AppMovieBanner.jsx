export default function AppMovieBanner({ image, title, director, genre, abstract }) {



    return (

        <>
            {/* Movie img banner */}
            <div className="movie-img-container">
                <img className="img-fluid w-25" src={`http://localhost:3000/movies_cover/${image}`} alt="" />
            </div>

            {/* Movie detail */}
            <div className="movie-info text-center">

                <h2 className="mt-3">{title}</h2>
                <small className=" d-block text-body-secondary">Diretto da: {director}</small>
                <small className="text-body-secondary">Genere: {genre}</small>

                <h3>Descrizione</h3>

                <p>{abstract}</p>


            </div>

        </>


    )
}