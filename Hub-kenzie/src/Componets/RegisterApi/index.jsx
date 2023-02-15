import { Api } from "../../Api/axios";
import {toast} from 'react-toastify';

export async function onSubmitHandle(data){
    
    const register = {
        "email": data.email,
        "password": data.password,
        "name": data.name,
        "bio": data.bio,
        "contact": data.contact,
        "course_module": data.modulo
    }
    
    console.log(register)
    
    try{
        const res = await Api.post("https://kenziehub.herokuapp.com/users", register);            
    
        res.data
        toast("Cadastrado com sucesso!")
    
    }catch(err){
        console.log(err)
        toast("Erro no cadastro")
    }
    
}