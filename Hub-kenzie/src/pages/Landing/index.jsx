import LogoHub from "../../assets/Logo.png"
import PlusHub from "../../assets/Plus.png"
import{Conteiner, ButtonReturn, ConteinerHeader, DivConteiner, DivTecnologia} from "./styled"
import { useNavigate } from "react-router-dom"
import { Api } from "../../Api/axios"
import { useEffect, useState } from "react"

export  function Landing(){
     const [user, setUser] = useState([])
         
        async function profile(){
            try{
                const getToken = localStorage.getItem("@TOKEN")
                const getId = localStorage.getItem("@USERID")

                const config = {
                    headers:{
                        "Authorization": `Bearer ${getToken}`
                    }   
                }
                const res = await Api.get(`https://kenziehub.herokuapp.com/users/${getId}`, config ) 
                 setUser(res.data)
            }catch(error){
                console.log(error)
            }  
        }
        
        useEffect(()=>{
            profile()
        },[])
    
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
            <main>  
                <DivConteiner> 
                    <div>
                        <h1>Olá, {user.name}</h1>
                        <p>{user.course_module}</p>
                    </div> 
                </DivConteiner>       
                <DivTecnologia>
                    <h2>Tecnologias</h2>
                    <img src={PlusHub} alt="Botão de adicionar tecnologia" />
                </DivTecnologia>
                <ul>
                    <li></li>
                </ul>
            </main>
        </Conteiner>
    )
}