import React from "react";
import { styled } from "styled-components";

const ContainerCard = styled.div`
    width: 300px;   
    height: auto;
    padding: 10px;
    background-color: whitesmoke;
    border: none;
    border-radius: 15px;

    @media(max-width: 768px) {
        margin-bottom: 15px;
    }
`;

const CardTitulo = styled.h3`
    font-size: 15px;
    color: #111;
    font-weight: 600;
`;

const CardDescription = styled.p`
    font-size: 13px;
    color: #333;
    font-weight: 400;
`

const CardIMG = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 5px;
    padding: 10px;
`;
const CardEd = ({img, titulo, descripcion}) => {
    return (
        <ContainerCard>
            <CardIMG src={img} alt={titulo}/>
            <div>
                <CardTitulo>{titulo}</CardTitulo>
                <CardDescription>{descripcion}</CardDescription>
            </div>
        </ContainerCard>
    )
}

export default CardEd;