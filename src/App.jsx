//IMPORTS
import { BrowserRouter, Routes, Route } from "react-router";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviePage";



function App() {
  

  return (

    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/movie/:id" element={<MoviesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
