import { createContext, useEffect, useState } from "react";
import { Api } from "../Api/axios";
import {toast} from "react-toastify";
import { useNavigate } from "react-router-dom"

export const UserContext = createContext({});

export const UserProvider = ({children}) =>{
    const [user , setUser] = useState(null)

    useEffect(()=>{
        const renderUser = async ()=>{
            const token = localStorage.getItem("@TOKEN")
            const userId = localStorage.getItem("@USERID")

            if(!token){
                return
            }
            const res = await Api.get(`/users/${userId}`,{
                headers: {
                  Authorization: `Bearer ${token}`
                }
            }); 
            setUser(res.data)
        }
        renderUser()
    },[])

    const navigate = useNavigate()

    const userResgister = async (formData) =>{
        try {
            console.log(formData)
            const register = {
                "email": formData.email,
                "password": formData.password,
                "name": formData.name,
                "bio": formData.bio,
                "contact": formData.contact,
                "course_module": formData.modulo
            }

            const res = await Api.post("/users", register); 
            toast("Cadastrado com sucesso!")
            
            setTimeout(() => {        
                navigate("/")
            }, 3000);
        } catch (error) {
            console.log(error)
        }
    }

    const userLogin = async (formData) =>{
        try {
            const res = await Api.post("/sessions",{...formData}); 
            setUser(res.data.user)     
            window.localStorage.clear(),
            window.localStorage.setItem("@TOKEN", res.data.token),
            window.localStorage.setItem("@USERID", res.data.user.id),
            navigate("/landing") 
        } catch (error) {
            console.log(error)
        }

    }
    const userLogout = ()=>{
        setUser(null)
        localStorage.clear()
        navigate("/")
    }        
    return(
        <UserContext.Provider value={{user, userResgister, userLogin, userLogout }}>
            {children}
        </UserContext.Provider>

    )
}