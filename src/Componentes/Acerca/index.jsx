import React from 'react';
import { styled } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Perfil from '../../img/perfil.png';
import HTML from '../../img/html5.png';
import CSS from '../../img/CSS3.png';
import JavaScript from '../../img/js.png';
import C from '../../img/C.png';
import Sql from '../../img/sql.png';
import Xamarin from '../../img/xamarin.png';
import oymLogo from '../../img/logoo&m.png';
import itlaLogo from '../../img/logoItla.png';
import aluraLogo from '../../img/Alula.png';
import Photoshop from '../../img/photoshop.png';
import Ciberseguridad from '../../img/ciber.png';
import logoAprende from '../../img/aprende.png';
import CardEd from '../EducationList';


const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    //background: linear-gradient(to bottom, gray 60%, white 100%);

    @media(max-width: 768px) {
        flex-direction: column;
    }
`;

const Content = styled.div`
    text-align: left;
    margin-left: 35px;
    padding: 20px;
`;

const Title = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 30px;
    color: #000;
`;

const ImgProfile = styled.img`
    width: 100%;
    max-width: 600px;
`;

const Description = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 100;
    color: #000;
    flex-wrap: wrap;
`;

const Links = styled(Link)`
    text-decoration: none;
    color: #333;
    font-weight: 700;
`;

const ContainerSkills = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const SkillTitle = styled.h1`
    font-size: 35px;
    font-family: 'Roboto', sans-serif;
`;

const ContentSkills = styled.div`
    text-align: center;
    flex-wrap: wrap;
    
`;

const SkillCard = styled.div`
    display: flex;
    justify-content: space-evenly;
    
    @media(max-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`;

const Card = styled.div`
    width: 150px;
    padding: 13px;
    margin-left: 10px;
    margin-bottom: 15px;
    border: 4px solid #93A3CF;
    border-radius: 10px;
`;

const CardImg = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 10px;
`;

const CardTitle = styled.h4`
    margin: 0;
    font-family: 'Raleway', sans-serif;
`;

const ContainerEd = styled.div`
    justify-content: center;
    `;

const ContentEd = styled.div`
    align-items: center;
`;

const CardContainer = styled.div`
    display: flex;  
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

const TituloEd = styled.h2`
    display: block;
    font-size: 35px;
    text-align: center;
    color: #000;
    font-family: 'Roboto', sans-serif;
    padding: 10px;
    margin: 10px;
`;


const educacion = [
    {
        id: 1,
        img: `${oymLogo}`,
        titulo: 'Ingenieria en Sistemas Computacionales',
        descripcion: '2021-En curso',
    },
    {
        id: 2,
        img: `${itlaLogo}`,
        titulo: 'Photoshop',
        descripcion: '2023-2023',
    },
    {
        id: 3,
        img: `${itlaLogo}`,
        titulo: 'Ciberseguridad',
        descripcion: '2023-2023',
    },
    {
        id: 4,
        img: `${aluraLogo}`,
        titulo: 'Programador Jr. Front-End',
        descripcion: '2022-2023',
    },
    {
        id: 5,
        img: `${logoAprende}`,
        titulo: 'Técnico en redes de datos',
        descripcion: '2023-2023',
    },

];

const Btn = styled.button`
    background-color: transparent;
    padding: 20px;
    border: none;
    text-align: center;
    font-size: 15px;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    transition: color 0.3s background-color ease-in-out;
    
    &:hover{
        background-color: #555;
        color: #fff;
        box-shadow: 0px 0px 5px rgba(0 0 0.9);
    }
`;

const Acerca = () => {

    const navigate = useNavigate()
    return (
        <>
        <Container>
            <Content>
                <Title>Bartolo del Rosario Marmolejos</Title>
                <Description>Hola, soy estudiante universitario de Ing. en Sistemas Computacionales (Universidad Dominicana O&M) y ademas 
                            soy Programador Jr. Front-End (One-Alura Latam), tengo conocimientos en lenguajes de programacion tales como:
                            C#, JavaScript, HTML 5, CSS 3, SQL y Python. Durante mis estudios he realizado varios proyectos desarrollando
                            así mis conocimientos en dichos lenguajes puesdes ver algunos de esto proyectos <Links to={"/proyectos"}>aquí</Links>.

                </Description>
            </Content>
            <ImgProfile src={Perfil}/>

        </Container>
        <ContainerSkills>
            <ContentSkills>
                <SkillTitle>Skills</SkillTitle>
                <ContentSkills>
                    <SkillCard>
                    <Card>
                        <CardImg src={HTML}/>
                        <div>
                            <CardTitle>HTML 5</CardTitle>
                        </div>
                    </Card>

                    <Card>
                        <CardImg src={CSS}/>
                        <div>
                            <CardTitle>CSS 3</CardTitle>
                        </div>
                    </Card>

                    <Card>
                        <CardImg src={JavaScript}/>
                        <div>
                            <CardTitle>JavaScript</CardTitle>
                        </div>
                    </Card>

                    <Card>
                        <CardImg src={C}/>
                        <div>
                            <CardTitle>C#</CardTitle>
                        </div>
                    </Card>

                    <Card>
                        <CardImg src={Sql}/>
                        <div>
                            <CardTitle>SQL</CardTitle>
                        </div>
                    </Card>

                    <Card>
                        <CardImg src={Xamarin   }/>
                        <div>
                            <CardTitle>Xamarin</CardTitle>
                        </div>
                    </Card>

                    <Card>
                        <CardImg src={Photoshop}/>
                        <div>
                            <CardTitle>Photoshop</CardTitle>
                        </div>
                    </Card>

                    <Card>
                        <CardImg src={Ciberseguridad}/>
                        <div>
                            <CardTitle>Ciberseguridad</CardTitle>
                        </div>
                    </Card>
                    </SkillCard>
                </ContentSkills>
            </ContentSkills>
        </ContainerSkills>
        <ContainerEd>
            <ContentEd>
                    <TituloEd>Educación</TituloEd>
                <CardContainer>
                    {educacion.map(educacion => (
                        <CardEd
                        key={educacion.id}
                        img={educacion.img}
                        titulo={educacion.titulo}
                        descripcion={educacion.descripcion}
                        />
                    ))}
                </CardContainer>
            </ContentEd>
        </ContainerEd>
        <div style={{ display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                      margin: '20px',
                      padding: '15px',  }}>
            <Btn onClick={() => navigate("/proyectos")}>Ver Proyectos</Btn>
            <Btn onClick={() => navigate("/contacto")}>Contacto</Btn>
        </div>
        </>
    )
}

export default Acerca;