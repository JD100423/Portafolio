import React, { useEffect } from "react";
import Header from "./Componentes/Header";
import Home from "./Componentes/Home";
import Proyectos from "./Componentes/Proyectos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { styled } from "styled-components";
import { createGlobalStyle } from 'styled-components';
import Footer from "./Componentes/Footer";
import Contacto from "./Componentes/Contacto";
import Acerca from "./Componentes/Acerca";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #fff;
`;

const Content = styled.div`
  flex: 1;
`;

const GlobalStyle = createGlobalStyle`

html, body, #root {
    height: 100%;
  }

  body {
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: black;
    border-radius: 4px;
  }
`;

function App() {

  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    setTimeout( () => {
      document.documentElement.style.overflow = 'auto';
    }, 100);
  }, []);

  return (

    <Container>
    <GlobalStyle />
        <BrowserRouter>
      <Content>
          <Header/>
        <Routes >
          <Route path="/" element={<Home />}/>
          <Route path="/proyectos" element={<Proyectos />}/>
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/contacto" element={<Contacto />}/>
        </Routes>
        </Content>
        <Footer/>
    </BrowserRouter>
    </Container>
       
  );
}

export default App;
