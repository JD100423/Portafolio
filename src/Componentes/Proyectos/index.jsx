import React  from "react";
import { styled } from "styled-components";
import CinemasFlix from "../../img/cinemasFlix.png";
import AluraFood from "../../img/aluraFood.png";
import SmartBank from "../../img/smartBank.png";
import Org from "../../img/org.png";
import EliasPina from "../../img/eliasPina.png";
import Card from "../CardList";
import Doguito from '../../img/doguito.png';
import SistemaV from '../../img/Sistema-port.png';

const Container = styled.div`
    justify-content: center;
    perspective: 1000px;
`;

const Content = styled.div`
    justify-content: center;
    align-items: center ;
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

const Titulo = styled.h1`
    display: block;
    font-size: 40px;
    text-align: center;
    color: #000;
    font-family: 'Geologica', sans-serif;
    padding: 10px;
`;

    const proyectos = [
        {
            id: 1,
            imageSrc: `${CinemasFlix}`,
            title: 'Cinema Flix',
            description: 'Es un repositorio de peliculas donde puedes agregar peliculas y categorias a traves de una formulario.',
            projectLink: 'https://cinemas-movie-oloj2bobr-jd100423.vercel.app',

        },
        {
            id: 2,
            imageSrc: `${AluraFood}`,
            title: 'Alura Food',
            description: 'Es una pagina web en la cual puedes crear una cuenta para Alura Food.',
            projectLink: 'https://alura-food-nine.vercel.app',

        },
        {
            id: 3,
            imageSrc: `${SmartBank}`,
            title: 'Smart Bank',
            description: 'Es el dashboard de un banco en el cual puedes ver las transacciones que has realizado.',
            projectLink: 'https://smart-bank-iota.vercel.app',

        },
        {
            id: 4,
            imageSrc: `${EliasPina}`,
            title: 'Elias Piña',
            description: 'Es una minibiografia de la provincia Elias Pina(RD), el cual detalla algunos de sus encantos.',
            projectLink: 'https://eliaspina.vercel.app',

        },
        {
            id: 5,
            imageSrc: `${Org}`,
            title: 'App Org',
            description: 'Es una aplicacion web donde una empresa puede tener organizado sus empleados por departamentos.',
            projectLink: 'https://org-indol.vercel.app/',

        },
        {
            id: 6,
            imageSrc: `${Doguito}`,
            title: 'Doguito Login',
            description: 'Es una pagina para registro de una veterinaria.',
            projectLink: 'https://validaciones-alpha.vercel.app/',

        },
        {
            id: 7,
            imageSrc: `${SistemaV}`,
            title: 'Sistemas de Ventas',
            description: 'Es un sistemas de ventas, realizado con C# y Windows forms, si eres el user administrador tendras privilegios por el contrario solo podras vender y ver el stock.',
            projectLink: '#',

        },
        
    ];
const Proyectos = () => {
    return (
        <Container>
        <Content>

            <Titulo>Proyectos</Titulo>

            <CardContainer>
                {proyectos.map(proyecto =>(
                    <Card
                    key={proyecto.id}
                    imageSrc={proyecto.imageSrc}
                    title={proyecto.title}
                    description={proyecto.description}
                    projectLink={proyecto.projectLink}
                    />
                ))}
            </CardContainer>
           </Content>
        </Container>
    )
}

export default Proyectos;