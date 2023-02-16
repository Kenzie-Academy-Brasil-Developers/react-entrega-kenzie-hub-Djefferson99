import styled from "styled-components";

export const Conteiner = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #121214;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;

    header{
        margin-top:80px;
        margin-bottom: 20px;
    }
    main{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    form{
        width: 90vw;
       
        background-color: #212529;
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }
    h2{
        color: #F8F9FA;
        margin-top: 34px;
        margin-bottom: 10px;
        font-size: 1rem;
        font-weight: bold;
    }
    p{
        margin-top: 30px;
        color: #868E96;
        font-size: 10px;
    }
    
    @media(min-width:700px){
        form{
            width: 370px;
        }
    }
`;





