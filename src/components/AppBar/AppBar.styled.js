import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const Header = styled.header`
    max-width: 100%;
    display: flex;
    padding: 20px;
    gap: 30px;
    background-color: #38c7c5;
    align-items: center;
`;

export const Logo = styled(NavLink)`
    display: none;
    @media screen and (min-width: 761px) {
        display: flex;
        text-decoration: none;
        color: #4a4b47;
        align-items: center;
        justify-content: center;
        gap: 10px;
        font-size: 24px;
        font-weight: 700;
        letter-spacing: '.3rem',
    }
`;


export const LogoMobile = styled(NavLink)`
        display: flex;
        text-decoration: none;
        color: #4a4b47;
        align-items: center;
        justify-content: center;
        gap: 10px;
        font-size: 24px;
        font-weight: 700;
        letter-spacing: '.3rem';
    @media screen and (min-width: 761px) {
        display: none;
    }
`;