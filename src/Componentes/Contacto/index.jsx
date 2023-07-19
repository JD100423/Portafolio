import React, { useState, useRef } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import { Send } from "@mui/icons-material";
import emailjs from '@emailjs/browser';
import validator from "validator";


const Contacto = () => {

    const form = useRef();
    
    const [ nombre, setNombre ] = useState("");
    const [ correo, setCorreo ] = useState("");
        const [ mensaje, setMensaje ] = useState("");
        const [ enfoque, setEnfoque ] = useState( {
            nombre: false,
            apellido: false,
            correo: false,
            mensaje: false
        });
        
        const validarEmail = (correo) => {
            try {
                 return validator.isEmail(correo);         
            }  catch(error) {
                return false;
            }
        };
        const activarBlur = (campo) => {
            setEnfoque((antEnfoque) => ({
                ...antEnfoque,[campo]:true
            }));
        };

        const validarCampo = (campo) => {
            if(campo.trim() === ""){
                return false;
            } else {
                return true;
            }
        };
    
        const resetBoton = (e) => {
            e.preventDefault();

            emailjs.sendForm('service_72v833p', 'template_mfscbxl', form.current, 'IjXHH8ZTm1vVUVf7Z')
            .then((resultado) => {
                console.log(resultado.text);
            }, (er) => {
                console.log(er.text);
            });
        };

    return (
        <>
        <Typography variant="h2" sx={{ textAlign: "center", margin: " 0px 15px ", }}>¡Contactame!</Typography>
        <div style={{
                display: "flex",
                padding: "25px",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "25px",
            }}>

        <Box component="form"
        sx={{
            
            justifyContent: "space-evenly",
            display: "flex",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" ,
            width: "75%",
            flexWrap: "wrap",
            borderRadius: "10px",
            padding: "25px",
            backgroundColor: "#CBD3D3",
            
        }}
        onSubmit={resetBoton}
        ref={form}
        >
            

            <TextField 
            nombre={nombre}
            name="user_name"
            sx={{ width: "100%",  marginBottom: '10px', }}
            label="Nombre"
            placeholder="Ingrese su nombre y apellido"
            onChange={(e) => { setNombre(e.target.value); }}
            required
            error={(enfoque.nombre && nombre.trim() === "") || (enfoque.nombre && nombre.length < 3)}
            helperText={
                enfoque.nombre && !validarCampo(nombre) ? "Debe llenar este campo" :
                enfoque.nombre && nombre.length < 3 ? "El campo debe contener al menos 3 caracteres." : ""
            }
            onBlur={() => activarBlur("nombre")}
            />
            <TextField 
            correo={correo}
            name="user_email"
            sx={{width: "100%", marginBottom: '10px', }}
            label="correo electronico"
            placeholder="Ingrese su correo electronico"
            error={(enfoque.correo && correo.trim() === "") || (enfoque.correo && validarEmail(correo) !== true)}
            helperText={
                enfoque.correo && correo.trim() ==="" ? "Debe llenar este campo." : 
                enfoque.correo && validarEmail(correo) !== true ?  "Ingrese un correo valido." : ""
            }
            onBlur={() => activarBlur("correo")}
            onChange={(e) => { setCorreo(e.target.value); }}
            required
            />
            <TextField 
            mensaje={mensaje}
            name="message"
            multiline
            rows={4}
            style={{
                width: "100%",
                marginBottom: "10px",
            }}
            label="Mensaje"
            placeholder="Ingrese su mensaje"
            error={(enfoque.mensaje && mensaje.trim() === "") || 
            (enfoque.mensaje && mensaje.length < 10)}
            helperText={
                enfoque.mensaje && mensaje.trim() === "" ? "Debe llenar este campo" :
                enfoque.mensaje && mensaje.length < 10 ? "El mensaje debe contener al menos 10 caracteres." : ""
            }
            onBlur={() => activarBlur("mensaje")}
            onChange={(e) => {
                setMensaje(e.target.value);
            }}
            required
            />
            <Button variant="contained"
            type="submit"
            startIcon={<Send />}
            style={{
                marginTop: "10px",
                padding: "10px",
            }}
            >Enviar</Button>
        </Box>
            </div>
        </>
    )
}

export default Contacto;