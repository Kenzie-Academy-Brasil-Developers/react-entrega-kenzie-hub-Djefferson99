import {formVerification} from "../../Componets/Verification/index.jsx";
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import {InputConteiner, SelectConteiner, ButtonCadastrar ,SpanVerifi } from "./styled"
import { useContext } from "react";
import { UserContext } from "../../Providers/UseContext.jsx";

export function FormRegister({selectModulo}){

    const {userResgister} = useContext(UserContext)

    const {register, handleSubmit, formState:{errors}, reset} = useForm({
        resolver: yupResolver(formVerification)
    })   

    const submit = (formData)=>{
        userResgister(formData);
        reset()
    }

    return(
        <form onSubmit={handleSubmit(submit)}>
            <h2>Crie sua conta</h2>
            <p>Rapido e grátis, vamos nessa</p>
            <InputConteiner>
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" placeholder="Digite aqui seu nome" {...register("name")}/>
                <SpanVerifi>{errors.name && errors.name.message}</SpanVerifi>
            </InputConteiner>
            <InputConteiner>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Digite aqui seu email" {...register("email")}/>
                <SpanVerifi>{errors.email && errors.email.message}</SpanVerifi>
            </InputConteiner>
            <InputConteiner>
                <label htmlFor="senha">Senha</label>
                <input type="password" id="senha" placeholder="Digite aqui sua senha" {...register("password")}/>
                <SpanVerifi>{errors.password && errors.password.message}</SpanVerifi>
            </InputConteiner>
            <InputConteiner>
                <label htmlFor="confirmarSenha">Confirmar Senha</label>
                <input type="password" id="confirmarSenha" placeholder="Digite aqui sua senha novamente"{...register("password2")}/>
                <SpanVerifi>{errors.password2 && errors.password2.message}</SpanVerifi>
            </InputConteiner>
            <InputConteiner>
                <label htmlFor="bio">Bio</label>
                <input type="text" id="bio" placeholder="Fale sobre você" {...register("bio")}/>
                <SpanVerifi>{errors.bio && errors.bio.message}</SpanVerifi>
            </InputConteiner>
            <InputConteiner>
                <label htmlFor="contato">Contato</label>
                <input type="text" id="contato" placeholder="Opção de contato"{...register("contact")} />
                <SpanVerifi>{errors.contact && errors.contact.message}</SpanVerifi>
            </InputConteiner>
            <SelectConteiner>
                <label htmlFor="selecionarModulo">Selecionar módulo</label>
                <select value={selectModulo} id="selecionarModulo" {...register("modulo")}>
                    <option value="">Selecione seu módulo</option>
                    <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                    <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                    <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                    <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
                </select>
                <SpanVerifi>{errors.modulo && errors.modulo.message}</SpanVerifi>
            </SelectConteiner>
            <ButtonCadastrar type="submit">Cadastrar</ButtonCadastrar>
        </form>   
    )
}