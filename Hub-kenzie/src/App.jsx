import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login/index.jsx";
import {Landing} from "./pages/Landing/index.jsx"
import {Register} from "./pages/Register/index.jsx"
import { useState } from "react";
import "./App.css"
import ProtectedRoutes from "./pages/ProtectedRoutes/index.jsx";

function App() {
  const {selectModulo} = useState()


  return (
    <Routes>
      <Route path="/" element={ <Login/> } />
      <Route path="/register" element={ <Register/> } selectModulo={selectModulo}/>
      <Route path="/landing" element={<ProtectedRoutes/>}>
        <Route path="/landing" element={ <Landing />} />
      </Route>
    </Routes>
   
  )
}

export default App
