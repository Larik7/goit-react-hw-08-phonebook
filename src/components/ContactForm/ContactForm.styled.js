import styled from "styled-components";
import { Form as FormikForm, ErrorMessage as FormikError, Field } from "formik";

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
    color: #757575;
    font-weight: 500;
    font-size: 20px;
`;
export const ErrorMessage = styled(FormikError)`
    font-size: 12px;
    color: #F42E16;
`
export const FormLabel = styled.span`
  display: block;
  margin-bottom: 20px;
  color: #757575;
  font-weight: 500;
  font-size: 20px;
`;

export const InputContact = styled(Field)`
    display: block;
    margin-top: 15px;
    padding: 10px;
    width: 100%;
    border: 1px solid rgba(33, 33, 33, 0.2);
    border-radius: 4px;
    cursor: pointer;
    font-size: 15px;
    width: 238px;
    @media screen and (min-width: 481px) {
        width: 298px;
    }
    :focus {
        outline-color: #f50057;
    }
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