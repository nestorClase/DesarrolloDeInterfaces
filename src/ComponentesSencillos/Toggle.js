import React,{useState} from "react";

function Toggle(){
    const [visible,setVisible]=useState(true);

    const handleToggle=()=>{
        setVisible(!visible);
    }


    return(
        <div>
            <button onClick={()=>setVisible(!visible)}>
                {visible ? 'ocultar':'mostrar'}elemento
            </button>
            {visible &&<div>ocultar mostrar</div>}
        </div>
    );
}

export default Toggle;