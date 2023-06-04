import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ListNav = styled.ul`
    list-style: none; 
    display: flex; 
    justify-content: center; 
    padding-top:15px;
    padding-bottom: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const ItemNav = styled.li`
    margin: 0 10px;
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: #333;
    font-weight: bold;
    transition: color 0.3s;
    :hover, 
    :focus {
    color: #666;
    }
`;
