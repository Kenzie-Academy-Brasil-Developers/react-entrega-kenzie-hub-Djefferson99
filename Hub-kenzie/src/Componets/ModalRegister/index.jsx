import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import {formVerificationTechRegister} from "../Verification/index"
import { SpanVerifi, DialogModal, ConteinerModal, Fechar } from "./styled"
import {TechContext} from "../../Providers/TechContext"
import { useContext } from "react";

export function ModalRegister(){
    
    const {techResgister} = useContext(TechContext)

    const closeModal = ()=>{
        ModalRegisterId.close()
    }
    
    const {register , handleSubmit, formState:{errors}, reset} = useForm({
        resolver: yupResolver(formVerificationTechRegister)
    })
  
    const submit =(formData)=>{
        techResgister(formData)
        reset()
        ModalRegisterId.close()
    }

    return(
        <DialogModal id="ModalRegisterId">
            <ConteinerModal>
                <header>
                    <h3>Cadastrar Tecnologia</h3>
                    <Fechar onClick={closeModal}>X</Fechar>
                </header>
                <div>
                    <form onSubmit={handleSubmit(submit)}>
                        <label htmlFor="title">Nome</label>
                        <input type="text" id="title" placeholder="Typescript" {...register("title")} />
                        <SpanVerifi>{errors.title && errors.title.message}</SpanVerifi>
                        <label htmlFor="status">Selecionar status</label>
                        <select id="status" {...register("status")}>
                            <option value="">Selecione um status</option>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                        <SpanVerifi>{errors.status && errors.status.message}</SpanVerifi>
                        <button type="submit">Cadastrar Tecnologia</button>
                    </form>
                </div>
            </ConteinerModal>
        </DialogModal>
    )
}