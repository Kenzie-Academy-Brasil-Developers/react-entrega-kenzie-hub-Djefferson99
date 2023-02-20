import React from "react";
import { TechProvider } from "./TechContext";
import { UserProvider } from "./UseContext";

const Providers = ({children})=>{
    return(
        <UserProvider>
            <TechProvider>
                {children}
            </TechProvider>
        </UserProvider>
        
    )
}

export default Providers