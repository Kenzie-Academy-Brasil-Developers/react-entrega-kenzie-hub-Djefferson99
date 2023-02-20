import styled from "styled-components";

export const DialogModal = styled.dialog`
    width: 90vw;
    padding: 0;
    border: none;
    @media(min-width:700px){
        width: 30vw;
        max-width: 500px;
    }
`;
export const ConteinerModal = styled.div`
    width: 90vw;
    margin: 0;
    header{
        width: 90vw;
        height: 40px;
        background-color: #343B41;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0;
        margin-bottom: 0;
    }
    h3{
        color: #F8F9FA;
        font-size: 12px;
        font-weight: bold;
        margin-left: 15px;
    }
    div{
       background-color: #212529;
       height: 100%;
    }
    form{
        display: flex;
        flex-direction: column;
        padding-top: 20px;
    }
    label{
        color: #F8F9FA;
        font-size: 10px;
        margin-left: 15px;
        margin-bottom: 20px;
    }
    input, select{
        width: 90%;
        margin-left: 15px;
        height: 35px;
        background-color:#343B41 ;
        margin-bottom: 10px;
        color: #F8F9FA;
        border: none;
        border-radius: 4px;
    }
    button{
        width:90%;
        margin: 0 auto;
        height: 35px;
        background-color: #FF577F;
        color: #F8F9FA;
        font-size: 13px;
        border-radius: 4px;
        margin-top: 20px;
        border: none;
        margin-bottom: 20px;
    }
    @media(min-width:700px){
        width: 30vw;
        max-width: 500px;
        header{
            width: 30vw;
            max-width: 500px;
        }
    }
`;
export const Fechar = styled.span`
    color: #868E96;
    font-size: 13px;
    margin-right: 15px;
    cursor: pointer;
`;

export const SpanVerifi = styled.span`
    color: rgb(223, 36, 36);
    font-size: 12px;
    margin-left: 15px;
`;