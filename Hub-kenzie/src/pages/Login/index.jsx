import Logo from "../../assets/Logo.png"
import { useNavigate } from "react-router-dom"
import {Conteiner,InputConteiner,ButtonEntrar,ButtonCadastrar, SpanVerifi } from "./styled"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from "axios"

export function Login(){

    const navegate = useNavigate()

    const registerPage = event =>{
        event.preventDefault()

        navegate("/register")
    }

    const onSubmitHandle = (data) => {

        axios.post("https://kenziehub.herokuapp.com/sessions",{...data})
        .then((res)=> { 
           
            window.localStorage.clear(),
            window.localStorage.setItem("@TOKEN", res.data.token),
            window.localStorage.setItem("@NAME", res.data.user.name),
            window.localStorage.setItem("@MODULO", res.data.user.course_module),   
            navegate("/landing") 
        })
        .catch((err)=> console.log(err))
    }

    const formVerification = yup.object().shape({
        email: yup.string().required("Email obrigatório").email("Email inválido"),
        password: yup.string().required("Senha obrigatória")
    })

    const {register , handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(formVerification)
    })

    return(
        <Conteiner>
            <header>
                <img src={Logo} alt="logo" />
            </header>
            <main>
                <form onSubmit={handleSubmit(onSubmitHandle)}>
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
            </main>
        </Conteiner>
    )
}