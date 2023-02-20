import LogoHub from "../../assets/Logo.png"
import{Conteiner, ButtonReturn, ConteinerHeader} from "./styled"
import { Main } from "../../Componets/MainLanding"
import { useContext } from "react";
import { UserContext } from "../../Providers/UseContext.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export  function Landing(){

    const {userLogout} = useContext(UserContext)

    return(
        
        <Conteiner>
            <header>
                <ConteinerHeader>
                    <img src={LogoHub} alt="logo" />
                    <ButtonReturn onClick={()=>{userLogout()}}>Sair</ButtonReturn>
                </ConteinerHeader>
            </header>
            <Main/>
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