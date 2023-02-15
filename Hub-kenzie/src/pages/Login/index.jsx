import Logo from "../../assets/Logo.png"
import { useNavigate } from "react-router-dom"
import {Conteiner,InputConteiner,ButtonEntrar,ButtonCadastrar, SpanVerifi } from "./styled"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import { formVerificationLogin } from "../../Componets/Verification"
import { Api } from "../../Api/axios"


export function Login(){

    const navegate = useNavigate()

    const registerPage = event =>{
        event.preventDefault()

        navegate("/register")
    }

  
        async function onSubmitHandle(data){
            try{
                const res = await Api.post("https://kenziehub.herokuapp.com/sessions",{...data});            
            
                window.localStorage.clear(),
                window.localStorage.setItem("@TOKEN", res.data.token),
                window.localStorage.setItem("@USERID", res.data.user.id),
                navegate("/landing") 
            }catch(error){
                console.log(error)
            }
            
        }


    const {register , handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(formVerificationLogin)
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