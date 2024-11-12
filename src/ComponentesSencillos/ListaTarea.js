import React, { useState } from "react";

function Tareas() {
    const [tareas, setTareas] = useState([]);
    const [nuevaTarea, setNuevaTarea] = useState('');

    const agregarTarea = () => {
        if (tarea.trim() !== '') { 
            setTareas([...tareas, tarea]); 
            setTarea(''); 
        }
    };

    return (
        <div>
            <h2>lista de tareas</h2>
            <input
                type="text"
                placeholder="nueva tarea"
                value={nuevaTarea}
                onChange={(e) => setNuevaTarea(e.target.value)}
            />
            <button onClick={agregarTarea}>nueva tarea</button>
            <ul>
                {tareas.map((tarea, index) => (
                    <li key={index}>
                        <input
                            type="checkbox"
                            checked={tarea.completada}
                            onChange={() => listaCompleta(index)}
                        />
                        {tarea.texto}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Tareas;