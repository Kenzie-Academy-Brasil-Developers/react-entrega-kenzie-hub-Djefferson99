import Logo from "../../assets/Logo.png"
import { useNavigate } from "react-router-dom"
import { Conteiner, ButtonReturn } from "./styled"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {FormRegister} from "../../Componets/FormRegister/index"

export function Register({selectModulo}){

    const navegate = useNavigate()
    const returnPage = ()=> navegate(-1)

    return(
      <Conteiner>
        <header>
            <img src={Logo} alt="logo" />
            <ButtonReturn onClick={returnPage}>Voltar</ButtonReturn>
        </header>
        <main>
            <FormRegister selectModulo={selectModulo}/>
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