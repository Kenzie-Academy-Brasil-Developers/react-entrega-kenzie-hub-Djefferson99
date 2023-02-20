import { DivConteiner} from"./styled"
import { useContext } from "react";
import { UserContext } from "../../Providers/UseContext.jsx";
import { ListTechnology } from "../ListTechnology/index";

export function Main(){
    
    const {user} = useContext(UserContext)
  
    return(
        <main>  
            <DivConteiner> 
                <div>
                    <h1>Olá, {user.name}</h1>
                    <p>{user.course_module}</p>
                </div> 
            </DivConteiner>       
            <ListTechnology/>
        </main>
    )
}