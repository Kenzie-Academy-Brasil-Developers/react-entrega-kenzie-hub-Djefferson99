import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login/index.jsx";
import {Landing} from "./pages/Landing/index.jsx"
import {Register} from "./pages/Register/index.jsx"
import { useState } from "react";
import "./App.css"

function App() {
  const {selectModulo} = useState()


  return (
    <Routes>
      <Route path="/" element={ <Login/> } />
      <Route path="/landing" element={ <Landing />} />
      <Route path="/register" element={ <Register/> } selectModulo={selectModulo}/>
    </Routes>
  )
}

export default App
