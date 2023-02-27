import { createContext, useContext, useEffect, useState } from "react";
import { Api } from "../Api/axios";
import {toast} from "react-toastify";
import { UserContext } from "./UseContext";


export const TechContext = createContext();

export const TechProvider = ({children}) =>{
    const {user} = useContext(UserContext)
    
    const [tech , setTech] = useState([])
    const [card , setCard] = useState({})


    useEffect(()=>{
        setTech(user.techs)

    },[])
    
    const techApi = async () =>{
        const token = localStorage.getItem("@TOKEN")
        const Id = localStorage.getItem("@USERID")
        try {
            const res = await Api.get(`users/${Id}`,{
                headers: {
                  Authorization: `Bearer ${token}`
                }
              }); 
            setTech(res.data.techs)
        } catch (error) {
            console.log(error) 
        }
    }

    const techResgister = async (formData) =>{
        const token = localStorage.getItem("@TOKEN")
        try {
            const res = await Api.post("users/techs", formData,{
                headers: {
                  Authorization: `Bearer ${token}`
                }
              }); 
            setTech([...tech , res.data])
            toast("Tecnologia cadastrada com sucesso!")
        } catch (error) {
            console.log(error)
            toast("Erro no cadastro")    
        }
    }
    
    const techUpdade = async (formData, card) =>{
        console.log(formData)
        const token = localStorage.getItem("@TOKEN")
        try {
            const res = await Api.put(`users/techs/${card.id} `, formData,{
                headers: {
                  Authorization: `Bearer ${token}`
                }
              });
              toast("Tecnologia atualizada com sucesso!")
               const index = tech.findIndex(element =>{
                return(
                    element.id == card.id
                )
              })
              tech[index] = {
                ...card , formData
              }
              setTech(tech)
        } catch (error) {
            console.log(error)
            toast("Erro na atualização")    
        }

    }
    const techDelete = async ()=>{
        const token = localStorage.getItem("@TOKEN")
        try {
            const res = await Api.delete(`users/techs/${card.id} `,{
                headers: {
                  Authorization: `Bearer ${token}`
                }
              });
              toast("Tecnologia deletada com sucesso!")
              setTech([...tech, res.data])
        } catch (error) {
            console.log(error)
            toast("Erro no delete")    
        }

    }        
    return(
        <TechContext.Provider value={{techResgister, tech, setTech , techUpdade, techDelete, setCard, card, techApi }}>
            {children}
        </TechContext.Provider>

    )
}