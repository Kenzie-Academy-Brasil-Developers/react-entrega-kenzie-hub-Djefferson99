import React from "react";
import { TechProvider } from "./TechContext";
import { UserProvider } from "./UseContext";

const Providers = ({children})=>{
    return(
        <UserProvider>
            {children}
        </UserProvider>
        
    )
}

export default Providers