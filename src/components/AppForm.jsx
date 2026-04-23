//IMPORTS
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function AppForm({ paramsId, reviewRefresh }) {

    //USE EFFECT


    //DATA
    const [renderForm, setRenderForm] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        text: '',
        vote: ''
    })
    const [reviewAdded, setRewviewAdded] = useState(null)
    const [apiError, setApiError] = useState({})


    //FUNCTIONS 
    function getFormData(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })

    }

    function handlerSubmit(e) {
        e.preventDefault()
        setRenderForm(false)




        //POST API CALL
        axios.post(`http://localhost:3000/movies/${paramsId}/review`, formData)
            .then(res => {
                console.log(res.data);
                setRewviewAdded(true)
                reviewRefresh
                
            }
        )
        
        .catch(error => {
            setApiError(error)
            setRewviewAdded(false)
            console.log(error.data);
            
        })

        //console.log(formData, paramsId);



    }

    function handlerSubmitClick() {
        setRenderForm(true)
        setRewviewAdded(null)
    }


    return (


        <>  
            
            {/* Alerts */}
            {reviewAdded && (

                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    Recensione inviata!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => {setRewviewAdded(null)}}></button>
                </div>

            )}

            {reviewAdded === false && (

                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    Compila tutti i campi!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => {setRewviewAdded(null)}}></button>
                </div>
            )}


            {
                renderForm ? (





                    /* Add review */
                    <form className="p-3" onSubmit={handlerSubmit}>
                        <h3>Lascia qui la tua recensione!</h3>

                        {/* Name form */}
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" name="name" id="name" placeholder="Nome" value={formData.name} onChange={getFormData} required />
                            <label htmlFor="name">Nome</label>
                        </div>

                        {/* Text form */}
                        <div className="form-floating mb-3">
                            <textarea className="form-control" placeholder="Lascia qui la tua recensione" name="text" id="content" value={formData.content} onChange={getFormData} required ></textarea>
                            <label htmlFor="content">Lascia qui la tua recensione!</label>
                        </div>

                        {/* Stars form */}
                        <div className="form-floating">
                            <select className="form-select" name="vote" id="stars" aria-label="Floating label disabled select example" value={formData.stars} onChange={getFormData} required >

                                <option className=" text-warning" value="1">★</option>
                                <option className=" text-warning" value="2">★★</option>
                                <option className=" text-warning" value="3">★★★</option>
                                <option className=" text-warning" value="4">★★★★</option>
                                <option className=" text-warning" value="5">★★★★★</option>
                            </select>
                            <label htmlFor="stars">Seleziona la tua valutazione</label>

                        </div>

                        {/* Submit */}
                        <button type="submit" className="btn btn-success my-3">Invia Recensione</button>
                    </form>

                ) : (

                    <button onClick={handlerSubmitClick} className="btn btn-warning my-3">Aggiungi una recensione</button>
                )
            }
        </>




    )
}