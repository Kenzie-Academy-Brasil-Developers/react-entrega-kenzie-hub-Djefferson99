import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import {formVerificationTechRegister} from "../Verification/index"
import { SpanVerifi, DialogModal, ConteinerModal, Fechar, ConteinerButton, ButtonUpdade, ButtonDelete} from "./styled"
import {TechContext} from "../../Providers/TechContext"
import { useContext } from "react";

export function ModalUpdade(){
    
    const {tech, techUpdade, techDelete} = useContext(TechContext)

    const closeModal = ()=>{
        ModalUpdate.close()
    }
    
    const {register , handleSubmit, formState:{errors}, reset} = useForm({
        resolver: yupResolver(formVerificationTechRegister)
    })
  
    const submit =(formData)=>{
        techUpdade(formData)
        reset()
        ModalUpdate.close()
    }
    const deleteButton = ()=>{
        techDelete()
        reset()
        ModalUpdade.close()
    }
    return(
        <DialogModal id="ModalUpdate">
            <ConteinerModal>
                <header>
                    <h3>Tecnologia Detalhes</h3>
                    <Fechar onClick={closeModal}>X</Fechar>
                </header>
                <div>
                    <form onSubmit={handleSubmit(submit)}>
                        <label htmlFor="title">Nome do Projeto</label>
                        <input type="text" id="title" placeholder={tech.title} {...register("title")} />
                        <SpanVerifi>{errors.title && errors.title.message}</SpanVerifi>
                        <label htmlFor="status">Status</label>
                        <select id="status" {...register("status")}>
                            <option value="">{tech.status}</option>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                        <SpanVerifi>{errors.status && errors.status.message}</SpanVerifi>
                        <ConteinerButton>
                            <ButtonUpdade type="submit">Cadastrar Tecnologia</ButtonUpdade>
                            <ButtonDelete onClick={deleteButton}>Excluir</ButtonDelete>
                        </ConteinerButton>
                    </form>
                </div>
            </ConteinerModal>
        </DialogModal>
    )
}