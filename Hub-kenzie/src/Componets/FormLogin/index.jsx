import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import { formVerificationLogin } from "../../Componets/Verification"
import { useNavigate } from "react-router-dom"
import {InputConteiner,ButtonEntrar,ButtonCadastrar, SpanVerifi } from "./styled"
import { useContext } from "react";
import { UserContext } from "../../Providers/UseContext.jsx";

export function FormLogin(){

    const navegate = useNavigate()

    const registerPage = event =>{
        event.preventDefault()

        navegate("/register")
    }

    const {userLogin} = useContext(UserContext)

    const {register , handleSubmit, formState:{errors}, reset} = useForm({
        resolver: yupResolver(formVerificationLogin)
    })

    const submit = (formData)=>{
        userLogin(formData);
        reset()
    }


    return(
        <form onSubmit={handleSubmit(submit)}>
            <h2>Login</h2>
            <InputConteiner>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Digite seu email..."{...register("email")}/>
                <SpanVerifi>{errors.email && errors.email.message}</SpanVerifi>
            </InputConteiner>
            <InputConteiner>
                <label htmlFor="senha">Senha</label>
                <input type="password" id="senha" placeholder="Digite sua senha..."{...register("password")}/>
                <SpanVerifi>{errors.password && errors.password.message}</SpanVerifi>
            </InputConteiner>
            <ButtonEntrar type="submit">Entrar</ButtonEntrar>
            <p>Ainda não possui uma conta?</p>
            <ButtonCadastrar onClick={registerPage}>Cadastre-se</ButtonCadastrar>
        </form>
    )
}