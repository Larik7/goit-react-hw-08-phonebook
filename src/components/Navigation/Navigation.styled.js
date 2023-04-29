import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderLink = styled(NavLink)`
    font-size: 12px;
    text-decoration: none;
    color: #00212f;
    font-weight: 600;
    @media screen and (min-width: 481px) {
        font-size: 16px;
    }
    &.active {
        color: #f83369;
    }
`;

export const Nav = styled.nav`
    display: flex;
    gap: 10px;
    @media screen and (min-width: 481px) {
        gap: 20px;
    }
`