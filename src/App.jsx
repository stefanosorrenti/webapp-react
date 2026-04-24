//IMPORTS
import { BrowserRouter, Routes, Route } from "react-router";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviePage";
import { LoaderProvider } from "../contexts/LoaderContext";
import AdminPage from "./pages/AdminPage";




function App() {


  return (


    <BrowserRouter>
      <LoaderProvider>

        <Routes>

          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/movie/:id" element={<MoviesPage />} />
            <Route path="/movie/admin" element={<AdminPage />} />
          </Route>
          <Route path="*" element={<h1>Pagina non trovata</h1>} />

        </Routes>

      </LoaderProvider>
      
    </BrowserRouter>



  )
}

export default App
