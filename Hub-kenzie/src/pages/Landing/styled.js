import styled from "styled-components";

export const Conteiner = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #121214;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 30px;
    
    header{
        margin-bottom: 20px;
        display: flex;
        flex-direction: row;
        width: 100vw;
        height: 100px;
        border-bottom: 1px solid #212529;
    }
    h1{
        margin: 0 auto;
        width: 90vw;
        font-size: 18px;
        font-weight: bold;
        color: #F8F9FA;
        margin-top: 25px;
    }
    p{
        color: #868E96;
        font-size: 12px;
        margin: 0 auto;
        width: 90vw;
        margin-top: 15px;
        margin-bottom: 30px;
    }
    h2{
        color: #F8F9FA;
        font-size: 16px;
        font-weight: 500;
        width: 90vw;
        margin: 0 auto;
        margin-top: 20px;
    }
    @media(min-width: 700px){
        h1{
          margin:0px;
          width: 100%;
        }
        p{
            width: auto;
            margin: 0px;
        }
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
export const ConteinerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90vw;
    margin: 0 auto;
    @media(min-width:700px){
        max-width: 800px;
        height: 115px;
    }
`;

