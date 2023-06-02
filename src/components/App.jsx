import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MoviesPage from "./Pages/MoviesPage";

export default function App() {
    return <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/movies" element={<MoviesPage/>}></Route>
  </Routes>
};