import styled from "styled-components";

export const DivConteiner = styled.div`
    width: 100vw;
    border-bottom: 1px solid #212529;
    display: flex;
    flex-direction: column;

    @media(min-width: 700px){
        div{
            max-width: 800px;
            width: 100%;
            height: 100px;
            margin: 0 auto;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
    }
`;
export const DivTecnologia = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
    width: 90vw;
    margin: 0 auto;
    margin-top: 20px;
    @media(min-width:700px){
        max-width: 800px;
        
    }
`;