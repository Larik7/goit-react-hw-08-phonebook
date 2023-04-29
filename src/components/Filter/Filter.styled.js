import styled from "styled-components";

export const FilterInput = styled.input`
    display: block;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
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
`;

export const TitleContact = styled.h2`
    color: #4a4b47;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: '.3rem';
    text-align: center;
    margin-top: 30px;
    @media screen and (min-width: 481px) {
        font-size: 20px;
    }
`