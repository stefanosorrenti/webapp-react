import { createContext, useContext, useState } from "react";

const LoaderContext = createContext();

function LoaderProvider({children}) {

    //Logica che voglio passare ai miei figli
    const [loader, setLoader] = useState(false)

    return(

        <LoaderContext.Provider
            value={
                {
                    loader,
                    setLoader
                }
            }        
        >
            {children}
        </LoaderContext.Provider>
    )
    
}

function useLoader() {
    const context = useContext(LoaderContext)
    return context
}

export { LoaderProvider, useLoader }