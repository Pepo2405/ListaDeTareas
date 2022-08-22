import React, { useState, useEffect } from "react";
import Formulario from "./Formulario";
import "../styles/ListaDeTareas.css";
import { Tarea } from "./Tarea";



const getLocalStorage = () =>{
    let lista = localStorage.getItem('lista');
    if(lista){
        return JSON.parse(localStorage.getItem('lista'));
    } else return [];
}

const ListaDeTareas = () => {
  const [tareas, setTareas] = useState(getLocalStorage());

  const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };
  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  };
  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) 
      {
        tarea.completada = !tarea.completada;}
    return tarea;
    });
    setTareas(tareasActualizadas);
  };

  const editarTarea = (id) => {
    const itemSeleccionado = tareas.find((tarea)=>tarea.id===id);
  }


  useEffect(()=>{
    localStorage.setItem('lista',JSON.stringify(tareas))
  },[tareas]);
  return (
    <>
      <Formulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {tareas.map((tarea) => {
          return (
            <Tarea
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea}
            />
          );
        })}
      </div>
    </>
  );
};

export default ListaDeTareas;
