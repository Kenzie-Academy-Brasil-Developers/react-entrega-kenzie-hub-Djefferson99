import Logo from "../../assets/Logo.png"
import {Conteiner} from "./styled"
import { FormLogin } from "../../Componets/FormLogin"

export function Login(){

    return(
        <Conteiner>
            <header>
                <img src={Logo} alt="logo" />
            </header>
            <main>
                <FormLogin/>
            </main>
        </Conteiner>
    )
}