import Logo from "../../assets/Logo.png"
import { useNavigate } from "react-router-dom"
import { Conteiner, ButtonReturn, InputConteiner, SelectConteiner, ButtonCadastrar ,SpanVerifi } from "./styled"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useState } from "react"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Register(){
    const {selectModulo} = useState()

    const onSubmitHandle = (data) => {
        let register = {
            "email": data.email,
            "password": data.password,
            "name": data.name,
            "bio": data.bio,
            "contact": data.contact,
            "course_module": data.modulo
        }

        axios.post("https://kenziehub.herokuapp.com/users", register)
        .then((res)=>{
            res.data
            toast("Cadastrado com sucesso!")
            setTimeout(() => {
                navegate("/")
            }, 3000);
        }
        )
        .catch((err)=>{
            console.log(err)
            toast("Erro no cadastro")
        } 
        )
    }
    const formVerification = yup.object().shape({
        name: yup.string().required("Nome obrigatório"),
        email: yup.string().required("Email obrigatório").email("Email inválido"),
        password: yup.string().required("Senha obrigatória").min(6,"Deve ter pelo menos 6 caracteres"),
        password2: yup.string().required('Confirmação obrigatória').oneOf([yup.ref("password")], 'Senhas não conferem'),
        bio: yup.string().required("Bio obrigatória"),
        contact: yup.string().required("Contato obrigatório"),
        modulo: yup.string().required("Módulo obrigatório")
        
    })
    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(formVerification)
    })   

    const navegate = useNavigate()
    const returnPage = ()=> navegate(-1)

    return(
      <Conteiner>
        <header>
            <img src={Logo} alt="logo" />
            <ButtonReturn onClick={returnPage}>Voltar</ButtonReturn>
        </header>
        <main>
            <form onSubmit={handleSubmit(onSubmitHandle)}>
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
        </main>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
      <ToastContainer />
      </Conteiner>
    )
}