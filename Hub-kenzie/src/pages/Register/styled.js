import styled from "styled-components";

export const Conteiner = styled.div`
    width: 100vw;
    height: 100%;
    background-color: #121214;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 30px;
   
    header{
        margin-top:80px;
        margin-bottom: 20px;
        display: flex;
        flex-direction: row;
        width: 90vw;
        justify-content: space-between
    }
    img{
        object-fit: none;
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
        padding-bottom: 15px;
    }
    h2{
        color: #F8F9FA;
        margin-top: 34px;
        margin-bottom: 10px;
        font-size: 1rem;
    }
    p{
        margin-top: 15px;
        color: #868E96;
        font-size: 10px;
    }
    @media(min-width:700px){
        form{
            width: 370px;
        }
        header{
            width:370px;
        }
    }
`;

export const ButtonCadastrar = styled.button`
    width: 76vw;
    height: 39px;
    margin-top:20px ;
    background-color: #59323F;
    border: none;
    color: #ffffff;
    font-size: 13px;
    border-radius: 4px;
    
    @media(min-width:700px){
        width: 320px;
    }
`;


export const ButtonReturn = styled.button`
    width: 80px;
    height: 32px;
    background-color: #212529;
    color: #F8F9FA;
    border-radius: 4px;
    border: none;
    font-size: 10px;
    font-weight: bold;

    @media(min-width:700px){
        width: 68px;
    }
`; 

export const InputConteiner = styled.div`
    display: flex;
    flex-direction: column;
    label{
        color: #F8F9FA;
        font-size: 10px;
        margin-bottom: 15px;
        margin-top: 15px;
    }
    input{
        width: 75vw;
        height: 39px;
        background-color: #343B41;
        border: none;
        color: #F8F9FA;
        font-size: 14px;
        border-radius: 4px;
    }

    @media(min-width:700px){
        input{
            width: 320px;
        }
    }
`;

export const SelectConteiner = styled.div`
    display: flex;
    flex-direction: column;
    label{
        color: #F8F9FA;
        font-size: 10px;
        margin-bottom: 15px;
        margin-top: 15px;
    }
    select{
        width: 75vw;
        height: 39px;
        background-color: #343B41;
        border: none;
        color: #F8F9FA;
        font-size: 14px;
        border-radius: 4px;
    }

    @media(min-width:700px){
        select{
            width: 320px;
        }
    }
`;
export const SpanVerifi = styled.span`
    color: rgb(223, 36, 36);
    font-size: 12px;
    margin-top: 5px;
    font-weight: bold;
`;