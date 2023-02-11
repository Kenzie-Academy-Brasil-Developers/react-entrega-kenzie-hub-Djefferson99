import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login/index.jsx";
import {Landing} from "./pages/Landing/index.jsx"
import {Register} from "./pages/Register/index.jsx"
import "./App.css"

function App() {
  

  return (
    <Routes>
      <Route path="/" element={ <Login/> } />
      <Route path="/landing" element={ <Landing />} />
      <Route path="/register" element={ <Register/> } />
    </Routes>
  )
}

export default App
