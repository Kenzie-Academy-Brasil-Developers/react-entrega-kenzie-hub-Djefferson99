import { createContext, useState } from "react";
import { Api } from "../Api/axios";
import {toast} from 'react-toastify';

export const TechContext = createContext({});

export const TechProvider = ({children}) =>{
    const [tech , setTech] = useState([])
    const [list, setlist] = useState(true)
    const [techId, setTechId] = useState("")

    const techResgister = async (formData) =>{
        const token = localStorage.getItem("@TOKEN")
        try {
            const res = await Api.post("users/techs", formData,{
                headers: {
                  Authorization: `Bearer ${token}`
                }
              }); 
            // setTech([tech , res.data])
            setTech(res.data)
            setTechId(res.data.id)
            toast("Tecnologia cadastrada com sucesso!")
            setlist(false)
        } catch (error) {
            console.log(error)
            toast("Erro no cadastro")    
        }
    }
    
    const techUpdade = async (formData) =>{
        const token = localStorage.getItem("@TOKEN")
        try {
            const res = await Api.put(`users/techs/${techId} `, formData,{
                headers: {
                  Authorization: `Bearer ${token}`
                }
              });
              toast("Tecnologia atualizada com sucesso!")
              setTech(res.data)
        } catch (error) {
            console.log(error)
            toast("Erro na atualização")    
        }

    }
    const techDelete = async ()=>{
        const token = localStorage.getItem("@TOKEN")
        try {
            const res = await Api.delete(`users/techs/${techId} `,{
                headers: {
                  Authorization: `Bearer ${token}`
                }
              });
              toast("Tecnologia deletada com sucesso!")
              setTech(res.data)
              if(tech){
                setlist(true)
              }
        } catch (error) {
            console.log(error)
            toast("Erro no delete")    
        }

    }        
    return(
        <TechContext.Provider value={{techResgister, tech, setTech , list, techUpdade, techDelete}}>
            {children}
        </TechContext.Provider>

    )
}