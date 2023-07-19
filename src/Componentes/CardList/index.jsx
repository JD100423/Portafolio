import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
 border: 3px solid #7C65A4;
 border-radius: 4px;
 padding: 20px;
 width: 400px;
 margin-left: 10px;
 margin-bottom: 15px;

 &:hover {
    box-shadow: 0px 0px 10px rgba(0,0,0.2);
 }
`;

const CardImg = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 10px;
`;

const CardTitle = styled.h2`
    font-size: 18px;
    margin-bottom: 10px;
    color: #000;
    font-family: 'Oxygen', sans-serif;
    font-weight: 700;
`;

const CardDescription = styled.p`
    font-size: 14px;
    color: #222;
    margin-bottom: 10px;
    font-family: 'Oxygen', sans-serif;
    font-weight: 500;
`;

const CardButton = styled(Link)`
    display: inline-block;
    padding: 10px 15px;
    background-color: #685588;
    color: #fff;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    font-family: 'Oxygen', sans-serif;
    font-weight: 500;

    &:hover{
        background-color: #0056b3;
        transform: scale(1.2);
    }
`;


const Card = ({imageSrc, title, description, projectLink}) => {
    return (
        <CardContainer>
                <CardImg src={imageSrc} alt={title}/>
                <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                    <CardButton to={projectLink}>Ver proyecto</CardButton>
                </div>
            </CardContainer>
    )
};

export default Card;