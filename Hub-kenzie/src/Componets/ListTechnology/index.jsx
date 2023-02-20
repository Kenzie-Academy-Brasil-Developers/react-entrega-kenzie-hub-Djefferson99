import PlusHub from "../../assets/Plus.png"
import { DivTecnologia } from "./styled"
import { Modal } from "../Modal"
import { useContext } from "react"
import { TechContext } from "../../Providers/TechContext"
import { UlList } from "./styled"
import { ModalUpdade } from "../ModalUpdate"

export function ListTechnology(){
    

    const {tech, list} = useContext(TechContext)

    const renderModal = () =>{
        ModalRegister.showModal()
    }
    const renderModalUpdade = ()=>{
        ModalUpdate.showModal()
    }
  
    return(
        <div>         
            <DivTecnologia>
                <h2>Tecnologias</h2>
                <img onClick={renderModal} src={PlusHub} alt="Botão de adicionar tecnologia" />
            </DivTecnologia>
            {
                list ?
                <div></div>
                :
            <UlList>
                
                    <li onClick={renderModalUpdade}>
                        <h3>{tech.title}</h3>
                        <span>{tech.status}</span>
                    </li> 
                    
                    {/* // tech.map(element=>{
                    //     <li>
                    //         <h3>{element.title}</h3>
                    //         <span>{element.status}</span>
                    //     </li>
                    // })
                    }) */}
            </UlList>
            }
            <Modal/>
            <ModalUpdade/>
        </div>
    )
}