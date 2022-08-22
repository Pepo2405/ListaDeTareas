import React from 'react';
import '../styles/Tarea.css'
import {FiDelete} from 'react-icons/fi'



const Tarea = ({id,texto, completada,completarTarea,eliminarTarea})=>{
    return(
        <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
					<div 
					onClick={()=>completarTarea(id)}
					className='tarea-texto'>
						{texto}
					</div>
					<div className='tarea-icono' onClick={()=>eliminarTarea(id)}>
						<FiDelete/> 
					</div>
				</div>
    );
};

export {Tarea}