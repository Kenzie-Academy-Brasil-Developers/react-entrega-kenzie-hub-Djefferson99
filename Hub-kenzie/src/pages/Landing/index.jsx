import LogoHub from "../../assets/Logo.png"
import{Conteiner, ButtonReturn, ConteinerHeader} from "./styled"
import { useNavigate } from "react-router-dom"
import { Main } from "../../Componets/MainLanding"
import { useState } from "react"

export  function Landing(){
    const [user, setUser] = useState([])
    const navegate = useNavigate()

    const logout = event =>{
        event.preventDefault()
        
        window.localStorage.clear()
        setUser([])
        navegate("/")
    }

    
    return(
        
        <Conteiner>
            <header>
                <ConteinerHeader>
                    <img src={LogoHub} alt="logo" />
                    <ButtonReturn onClick={logout}>Sair</ButtonReturn>
                </ConteinerHeader>
            </header>
            <Main user={user} setUser={setUser}/>
        </Conteiner>
    )
}