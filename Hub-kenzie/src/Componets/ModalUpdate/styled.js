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

    @media(min-width:700px){
        width: 30vw;
        max-width: 500px;
        header{
            width: 30vw;
            max-width: 500px;
        }
    }
`;

export const ConteinerButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    width: 100%;
`;
export const ButtonUpdade = styled.button`
    width: 50%;
    height: 48px;
    background-color: #59323F;
    color: #ffffff;
    font-size: 12px;
    border: none;
    margin-bottom: 20px;
    margin-top: 10px;
    border-radius: 4px;
`;

export const ButtonDelete = styled.button`
    width: 20%;
    height: 48px;
    background-color: #868E96;
    color: #ffffff;
    font-size: 12px;
    border: none;
    margin-bottom: 20px;
    margin-top: 10px;
    border-radius: 4px;
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