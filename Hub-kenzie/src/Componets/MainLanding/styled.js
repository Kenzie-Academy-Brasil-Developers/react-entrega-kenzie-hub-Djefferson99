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
