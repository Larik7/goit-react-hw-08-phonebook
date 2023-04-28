import styled from "styled-components";
import { Form as FormikForm, ErrorMessage as FormikError } from "formik";

export const Form = styled(FormikForm)`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 400px;
    padding: 10px;
    border: 1px solid #0F6CFA;
    border-radius: 10px;
`;

export const FormField = styled.label`
    display: flex;
    flex-direction: column;
    font-weight: 500;
`;

export const ErrorMessage = styled(FormikError)`
    color: #F42E16;
`

export const SubmitBtn = styled.button`
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
    padding: 5px;
    margin: 0 auto;
    width: 200px;
    font-size: 15px;
    font-weight: 500;
    border-radius: 10px;
    border: 1px solid #0F6CFA;
    background-color: white;
    :hover {
        background-color: #16F420;
    }
`