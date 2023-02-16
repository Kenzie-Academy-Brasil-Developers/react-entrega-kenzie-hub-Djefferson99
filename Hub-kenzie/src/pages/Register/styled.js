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




