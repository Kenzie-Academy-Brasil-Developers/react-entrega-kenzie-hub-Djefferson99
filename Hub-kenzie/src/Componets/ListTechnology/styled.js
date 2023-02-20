import styled from "styled-components";

export const DivTecnologia = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
    width: 90vw;
    margin: 0 auto;
    margin-top: 20px;
    img{
        cursor: pointer;
    }
    @media(min-width:700px){
        max-width: 800px;
        
    }
`;
export const UlList = styled.ul`
    background-color: #212529;
    width: 90vw;
    margin: 20px auto;
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 4px;
    li{
        background-color: #121214;
        width:85vw;
        margin: 0 auto;
        height: 50px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-radius: 5px;
        cursor: pointer;
        transition: 0.5s;
    }
    li:hover{
        background-color: #343B41;
    }
    h3{
        font-size: 15px;
        color: #F8F9FA;
        margin-left:15px;
        font-weight: bold;
    }
    span{
        color: #868E96;
        font-size: 13px;
        margin-right: 15px;
    }
    @media(min-width:700px){
        max-width: 800px;
        li{
            width: 55vw;
        }
    }
`;