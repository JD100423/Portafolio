import React from "react";
import { styled } from "styled-components";
import logo from '../../img/Logo.png';
import { Link } from "react-router-dom";

const Nav = styled.nav`
    background-color: #000; //linear-gradient(to right, black 60%, white 100%);
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 768px) {
        max-width: 100%;
    }
`;  

const NavList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex; 

    @media(max-width: 768px) {
        flex-direction: column;
    }
`;

const List = styled.li`
    margin-left: 16px;
`

const Lista = styled.a`
    display: block;
    font-family: 'Roboto', sans-serif;
    color: #fff;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    border-radius: 6px;
    margin: 10px;
    transition: color 0.3s, background-color ease-in-out;

    &:hover{
        background-color: #FFF;
        color: #333;
    }
`

const Logo = styled.img`
    width: 190;
    height: 140px;
    margin-left: 16px;
    `;
const Header = () => {
    

    return(
        <Nav>
            <Link to="/"><Logo src={logo}/></Link>
                <NavList>
                <List><Link to="/" style={{textDecoration: "none",}}><Lista>Inicio</Lista></Link></List>
                <List><Link to="/acerca" style={{textDecoration: "none",}}><Lista>Acerca de</Lista></Link></List>
                <List><Link to="/proyectos" style={{textDecoration: "none",}}><Lista>Proyectos</Lista></Link></List>
                <List><Link to="/contacto" style={{textDecoration: "none",}}><Lista>Contacto</Lista></Link></List>
            </NavList>
        </Nav>
    )
}

export default Header;