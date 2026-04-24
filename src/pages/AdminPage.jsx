import axios from "axios"
import { useEffect, useState } from "react"

export default function AdminPage() {

    //DATA
    const [moviesList, setMoviesList] = useState([])
    const [modal, setModal] = useState(false)
    const [formData, setFormData] = useState({
        title: '',
        director: '',
        genre: '',
        release_year: '',
        abstract: '',
        image: ''


    })
    //USE EFFECT
    useEffect(() => {
        axios.get('http://localhost:3000/movies')
            .then(res => {
                console.log(res.data);

                setMoviesList(res.data)


            })
    }, [])

    //FUNCTIONS
    function handlerSubmit(e) {
        e.preventDefault()
        setModal(false)
        console.log(formData);

        axios.post('http://localhost:3000/movies', formData)
        .then(res => {
            console.log(res.data);
            
        })
        .catch(error => {
                    console.log(error.response.data); //MESSAGGIO DI ERRORE
                    
                    
    
                })
        
    }

    function handlerInput(e) {
        setFormData({...formData, [e.target.name] : e.target.value})
    }
    return (
        <>

            <div className="container">

                <div className="d-flex flex-column justify-content-evenly gap-2 overflow-x-auto">
                    {/* Title */}
                    <h1>Elenco completo  dei film.</h1>

                    {/* Table */}
                    <table className="table table-light table-striped table-hover py-5 ">

                        {/* Table Head */}
                        <thead>
                            <tr>
                                <th>Titolo</th>
                                <th>Diretto da</th>
                                <th>Genere</th>
                                <th>Anno d'uscita</th>
                                <th>Azioni</th>
                            </tr>
                        </thead>

                        {/* Table body */}
                        <tbody>

                            {moviesList.map(movie => (

                                <tr key={movie.id}>
                                    <td>{movie.title}</td>
                                    <td>{movie.director}</td>
                                    <td>{movie.genre}</td>
                                    <td>{movie.release_year}</td>
                                    <th>
                                        <ul>
                                            <li><i className="bi bi-pencil-square"></i></li>
                                            <li><i className="bi bi-trash"></i></li>
                                        </ul>
                                    </th>
                                </tr>

                            ))}

                        </tbody>

                    </table>

                    {/* Add movies button */}
                    <button onClick={() => { setModal(true) }} className="btn btn-success align-self-center align-self-md-end mb-3">Aggiungi un film</button>
                </div>

            </div>


            {modal && (
                <>

                    {/* Movies modal */}
                    <div className="modal show d-block soft-dark-bgc" tabIndex="-1">
                        <div className="modal-dialog">
                            <div className="modal-content">

                                {/* Modal header */}
                                <div className="modal-header">
                                    <h5 className="modal-title">Aggiungi un film.</h5>
                                    <button onClick={() => setModal(false)} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                                </div>

                                {/* Modal body */}

                                <div className="modal-body">
                                    <form className="p-3" onSubmit={handlerSubmit}>
                                        <h3>Lascia qui la tua recensione!</h3>

                                        {/* Title input */}
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" name="title" id="title" placeholder="Inserisci il titolo del film" value={formData.title} onChange={handlerInput} />
                                            <label htmlFor="title">Inserisci il titolo del film</label>
                                        </div>

                                        {/* Director input */}
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" name="director" id="director" placeholder="Inserisci il nome del regista" value={formData.director} onChange={handlerInput} />
                                            <label htmlFor="director">Inserisci il nome del regista</label>
                                        </div>

                                        {/* Genre input */}
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" name="genre" id="genre" placeholder="Inserisci il genere" value={formData.genre} onChange={handlerInput} />
                                            <label htmlFor="genre">Inserisci il genere</label>
                                        </div>

                                        {/* Relase year input */}
                                        <div className="form-floating mb-3">
                                            <input type="number" className="form-control" name="release_year" id="release_year" placeholder="Inserisci l'anno d'uscita" value={formData.release_year} onChange={handlerInput} />
                                            <label htmlFor="release_year">Inserisci l'anno d'uscita</label>
                                        </div>

                                        {/* Abstract input */}
                                        <div className="form-floating mb-3">
                                            <textarea className="form-control" placeholder="Inserisci una descrizione" name="abstract" id="abstract" value={formData.abstract} onChange={handlerInput}></textarea>
                                            <label htmlFor="abstract">Inserisci una descrizione</label>
                                        </div>

                                        {/* Images input */}
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" name="image" id="image" placeholder="Inserisci la copertina" accept="image/*" value={formData.image} onChange={handlerInput}/>
                                            <label htmlFor="image">Inserisci la copertina</label>
                                        </div>

                                        {/* Submit */}
                                        <button type="submit" className="btn btn-success my-3">Invia Recensione</button>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div >

                </>

            )}



        </>
    )
}