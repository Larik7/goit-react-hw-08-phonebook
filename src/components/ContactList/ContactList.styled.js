import styled from "styled-components";
import { List, ListItem } from "@mui/material";

export const ListStyled = styled(List)`
    display: flex;
    margin: 0 auto;
    gap: 20px;
    flex-direction: column;
    background-color: rgba(220, 220, 220, 0.5);
    border-radius: 4px;
    border: 1px solid rgba(33, 33, 33, 0.2);
`;

export const ItemStyled = styled(ListItem)`
    display: flex;
`