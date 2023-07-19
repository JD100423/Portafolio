import React from "react";
import { styled } from "styled-components";
import Profile from '../../img/profile.png';
import Vector from '../../img/vector.png';
import { useNavigate } from "react-router-dom";

const Container = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
height:71vh;

    @media(max-width: 768px) {
        display: block;
        flex-direction: column;
        justify-content: space-evenly;
        flex-wrap: wrap;
        height: 100%;
    }
`;

const Content = styled.div`
color: #fff;
text-align: left ;
padding: 20px;
background-color: #B3B6B7;
margin-right: 100px;
border-radius: 15px;

    @media(max-width: 768px) {
        margin: 0;

    }
`;

const Title = styled.h1`
font-family: 'Space Grotesk', sans-serif;
font-size: 36px;
font-weight: 700;
margin-bottom: 8px;
`;

const Info = styled.h2`
    font-family: 'Space Grotesk', sans-serif;
    font-size: 25px;
`;

const Description = styled.p`
    font-family: 'Raleway', sans-serif;
    font-size: 20px;

`;

const ImgProfile = styled.img`
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 50%;
    height: auto;

    @media(max-width: 768px) {
        margin: 15px 0px;
    }
    
`;

const Button= styled.button`
    background-color: #3E6FF1;
    color: #fff;
    padding: 15px 20px;
    border: none;
    font-family: 'Roboto', sans-serif;
    border-radius: 7px;
    font-size: 15px;

    &:hover {
        background-color: #0E36A1;
    }

    @media(max-width: 768px) {
        margin-top: 10px;
        
    }
`;

const Vinculos = styled.a`
    color: #222;
    text-decoration: none;
`;

const Links = styled.a`
    display:flex;
    margin-left: 20px;
    color: #222;
    font-family: 'Roboto', sans-serif;
    justify-content: space-evenly;

    @media(max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

const VectorIn = styled.img`
    width: 20px;
    margin-left: 5px;

    @media(max-width: 768px) {
        margin: 10px;
        padding: 10px;
    }
`;





const Home = () => {
    const navigate = useNavigate();
    return(
        <Container>
                
                <Content>
                <Title>Bartolo Del Rosario Marmolejos.</Title>
                <Info>Programador Jr. Front-End.</Info>
                <Description>Hola, soy estudiante universitario de Ing. en Sistemas Computacionales y graduado como Programador Jr. FrontEnd<br/>
                    te invito a que me conozcas mejor.
                </Description>
                <Links>
                <Vinculos href="https://github.com/JD100423">Github<VectorIn src={Vector}/></Vinculos>
                <Vinculos href="https://www.instagram.com/del_rosario10">Instagram<VectorIn src={Vector}/></Vinculos>
                <Vinculos href="https://www.linkedin.com/in/bartolo-del-rosario-marmolejos">LinkedIn<VectorIn src={Vector}/></Vinculos>
                <Button onClick={() => navigate("/acerca")}>Ver mas</Button>
                </Links>
                </Content>
                <ImgProfile src={Profile}/>
            </Container>
        
    )
}

export default Home;