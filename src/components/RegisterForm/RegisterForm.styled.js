import { TextField } from "@mui/material";
import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
`;

export const Input = styled(TextField)`
    width: 260px;
    
    @media screen and (min-width: 481px) {
        width: 320px;
    }
`;

export const TitleReg = styled.h1`
    color: #4a4b47;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: '.3rem';
    text-align: center;
    margin-top: 30px;
    @media screen and (min-width: 481px) {
        font-size: 24px;
        margin-top: 20px;
    }
`