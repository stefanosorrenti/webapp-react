//IMPORTS
import { BrowserRouter, Routes, Route } from "react-router";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviePage";
import { LoaderProvider } from "../contexts/LoaderContext";




function App() {


  return (


    <BrowserRouter>
      <LoaderProvider>

        <Routes>

          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/movie/:id" element={<MoviesPage />} />
          </Route>
          
        </Routes>

      </LoaderProvider>
    </BrowserRouter>



  )
}

export default App
