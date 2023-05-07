import { Route, Routes } from "react-router-dom"
import StarshipList from "./pages/StarshipList/StarshipList"

import "./App.css"
import StarshipDetails from "./pages/StarshipDetails/StarshipDetails"

function App() {
  return (
    <>
      <h1>Star Wars Starships</h1>
      <Routes>
        <Route path="/" element={<StarshipList />} />
        <Route path="/starships/:id" element={<StarshipDetails />}></Route>
      </Routes>
    </>
  )
}

export default App
