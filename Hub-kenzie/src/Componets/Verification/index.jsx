import * as yup from "yup"


export const formVerification = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória").min(6,"Deve ter pelo menos 6 caracteres"),
    password2: yup.string().required('Confirmação obrigatória').oneOf([yup.ref("password")], 'Senhas não conferem'),
    bio: yup.string().required("Bio obrigatória"),
    contact: yup.string().required("Contato obrigatório"),
    modulo: yup.string().required("Módulo obrigatório")
    
})
  

export const formVerificationLogin = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória")
})