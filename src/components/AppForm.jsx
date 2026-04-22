//IMPORTS
import { useState } from "react"
export default function AppForm() {
    const [renderForm, setRenderForm] = useState(false)

    return (


        <>



            {
                renderForm ? (

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
                )
            }
        </>




    )
}