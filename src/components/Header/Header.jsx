import React from "react";
import { ItemNav, ListNav, StyledNavLink } from "./Header.styled";

const Header = () => { 
    return (
        <ListNav>
            <ItemNav>
                <StyledNavLink to='/'>Home</StyledNavLink>
            </ItemNav>
            <ItemNav>
                <StyledNavLink to='/movies'>Movies</StyledNavLink>
            </ItemNav>
        </ListNav>
    )
};

export default Header