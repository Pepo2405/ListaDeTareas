import React,{useState} from 'react';
import '../styles/TareaForm.css'
import {v4 as uuidv4} from 'uuid';


const FormTask = (props)=>{
    const [input,setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value);

    }
  

    const manejarEnvio = e =>{
        e.preventDefault()
        const tareaNueva = {
            id:uuidv4(),
            texto:input,
            completada:false
        };
        props.onSubmit(tareaNueva);
        e.target.reset();
        setInput('');
    };


    return(
        <form   
          onSubmit={manejarEnvio}
          className="tarea-formulario">
            <input
            autoComplete='off'
            id="tarea-input" 
            autoFocus={true}
            className="tarea-input"
            type="text"
            placeholder='Escribe una tarea'
            nombre="tarea"
            onChange={manejarCambio}
            />
            <button className="tarea-boton">Agregar Tarea</button>
        </form>
    );
};


export default FormTask;