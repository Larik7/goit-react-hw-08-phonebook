import styled from "styled-components";

export const UserContainer = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    margin-left: auto;
`;


export const Name = styled.p`
    display: none;
    @media screen and (min-width: 481px) {
        display: block;
        font-weight: 700;
        margin: 0;
        color: #00212f;
        font-size: 18px;
    }
`;