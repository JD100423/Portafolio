import React from "react";
import { styled } from "styled-components";
import Instagram from '../../img/IconInstagram.png';
import Facebook from '../../img/IconFacebook.png';
import GitHub from '../../img/IconGit.png';
import LinkedIn from '../../img/IconLinkedIn.png';

const FooterContainer = styled.footer`
    color: white;
    padding: 20px;
    text-align: center;
    background-color: #000 ;//linear-gradient(to left, black 60%, white 100% );
`;
const Titulo =styled.h1 `
    font-size: 23px;
    font-family: 'Roboto', sans-serif;

`;
const Vinculos = styled.a`
    color: #fff;
    text-decoration: none;
`;
const Iconos = styled.a`
    display: flex;
    margin-left: 20px;
    justify-content: center;
    color: #fff;
`;
const Icono = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 10px;
    overflow: hidden;
    filter: invert(100%);

    &:hover {
        transform: scale(1.2);
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <Titulo>&copy;Bartolo Del Rosario Marmolejos</Titulo>
            <Iconos>
                <Vinculos href="https://www.instagram.com/del_rosario10"><Icono src={Instagram} alt="Instagram"/></Vinculos>
                <Vinculos href="https://web.facebook.com/junior100901"><Icono src={Facebook} alt="Facebook"/></Vinculos>
                <Vinculos href="https://github.com/JD100423"><Icono src={GitHub} alt="GitHub"/></Vinculos>
                <Vinculos href="https://www.linkedin.com/in/bartolo-del-rosario-marmolejos"><Icono src={LinkedIn} alt="LinkedIn"/></Vinculos>
            </Iconos>

        </FooterContainer>
    )
};

export default Footer;