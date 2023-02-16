import styled from "styled-components";

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
        border: 1px solid #F8F9FA;
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
export const ButtonEntrar = styled.button`
    width: 76vw;
    height: 39px;
    margin-top:20px ;
    background-color: #FF577F;
    border: none;
    color: #ffffff;
    font-size: 13px;
    border-radius: 4px;

    @media(min-width:700px){
        width: 320px;
    }
`;
export const ButtonCadastrar =styled.button`
    width: 76vw;
    height: 39px;
    margin-top:20px ;
    background-color: #868E96;
    border: none;
    color: #F8F9FA;
    font-size: 13px;
    border-radius: 4px;
    margin-bottom: 30px;
    
    @media(min-width:700px){
        width: 320px;
    }
`;
export const SpanVerifi = styled.span`
    color: rgb(223, 36, 36);
    font-size: 12px;
    margin-top: 5px;
`;