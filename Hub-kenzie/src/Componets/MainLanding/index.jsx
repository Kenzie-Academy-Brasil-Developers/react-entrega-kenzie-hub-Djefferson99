import PlusHub from "../../assets/Plus.png"
import { Api } from "../../Api/axios"
import { useEffect } from "react"
import { DivConteiner, DivTecnologia} from"./styled"
export function Main({user, setUser}){
    
         
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

    return(
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
    )
}