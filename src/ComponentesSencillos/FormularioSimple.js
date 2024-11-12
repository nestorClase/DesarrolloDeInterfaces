import React,{useState} from "react";

function Formulario(){
    const[nombre,setNombre]=useState('');
    const[enviado,setEnviado]=useState(false);


    const controlarEnvio=(e)=>{
        e.preventDefault();
        setEnviado(true);
    };

    return(
        <div>
            <h2>formulario</h2>
            <from onSubmit={controlarEnvio}>
                <input
                    type="text"
                    placeholder="pon nombre"
                    value={nombre}
                    onChange={(e)=>setNombre(e.target.value)}
                />
                <button type="submit">enviar</button>
            </from>
            {enviado&&<h2>hola {nombre}</h2>}
        </div>
    );
}

export default Formulario;