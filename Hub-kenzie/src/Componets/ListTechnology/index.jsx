import PlusHub from "../../assets/Plus.png"
import { DivTecnologia } from "./styled"
import { ModalRegister } from "../ModalRegister"
import { useContext, useEffect, useState } from "react"
import { TechContext } from "../../Providers/TechContext"
import { UlList } from "./styled"
import { ModalUpdade } from "../ModalUpdate"

export function ListTechnology(){
    const [list, setList] = useState(true) 

    const {tech, setCard, techApi} = useContext(TechContext)

    useEffect(()=>{
        techApi()
        console.log(tech)
        if(tech.length > 0){
            setList(false)
        }else{
            setList(true)
        }
    },[tech])


    const renderModal = () =>{
        ModalRegisterId.showModal()
    }
    const renderModalUpdade = (element)=>{
        setCard(element)
        ModalUpdateId.showModal()
    }
    console.log(tech)
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
                { 
                    tech.map(element=>{
                        return(
                            <li onClick={()=> renderModalUpdade(element)} key={element.id} id={element.id}>
                                <h3>{element.title}</h3>
                                <span>{element.status}</span>
                            </li>
                        )
                    })
                }
            </UlList>
            }
            <ModalRegister/>
            <ModalUpdade />
        </div>
    )
}