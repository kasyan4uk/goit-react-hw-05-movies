import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MoviesPage from "./Pages/MoviesPage";
import Layout from "./Layout/Layout";

export default function App() {
    return <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage/>}></Route>
        <Route path="/movies" element={<MoviesPage/>}></Route>
      </Route>
  </Routes>
};