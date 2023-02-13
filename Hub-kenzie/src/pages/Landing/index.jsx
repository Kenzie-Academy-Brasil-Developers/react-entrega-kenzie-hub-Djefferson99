import LogoHub from "../../assets/Logo.png"
import PlusHub from "../../assets/Plus.png"
import{Conteiner, ButtonReturn, ConteinerHeader, DivConteiner, DivTecnologia} from "./styled"
import { useNavigate } from "react-router-dom"
//import { useState, useEffect } from "react"
//import axios from "axios"


export  function Landing(){

    // useEffect(()=>{
    //     async function profile(){
    //         try{
    //             const getToken = localStorage.getItem("@TOKEN")
                
    //             const config = {
    //                 headers:{
    //                     "Authorization": `Bearer ${getToken}`
    //                 }   
    //             }
    //             const res = await axios.get("https://kenziehub.herokuapp.com/profile", config ) 
    //             console.log(res.data)
    //         }catch(error){
    //             console.log(error)
    //         }
            
    //     }
    //     profile()
    // },[])

    const getName = localStorage.getItem("@NAME")
    const getModulo = localStorage.getItem("@MODULO")



    const navegate = useNavigate()

    const logout = event =>{
        event.preventDefault()
        
        window.localStorage.clear()
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
                        <h1>Olá, {getName}</h1>
                        <p>{getModulo}</p>
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