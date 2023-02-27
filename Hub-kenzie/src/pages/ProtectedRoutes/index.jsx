import React from "react";
import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../Providers/UseContext.jsx";

const ProtectedRoutes = ()=>{
    const {user} = useContext(UserContext)
    const userId = localStorage.getItem("@USERID")

    const navigate = useNavigate()
    
    useEffect(()=>{
        if(!user){
            navigate("/")
        }
        if(userId){
            navigate("/landing")
        }
    },[])
    return(
        <>
        { user ? <Outlet/> : null}
        </>
    )
}

export default ProtectedRoutes