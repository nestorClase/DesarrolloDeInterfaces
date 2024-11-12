import React,{useState} from "react";

function Contador(){
    const[contador,setContador]=useState(0);

    return(
        <div>
            <h2>contador {contador}</h2>
            <button onClick={()=> setContador(contador +1)}></button>
            <button onClick={()=> setContador(contador -1)}></button>
        </div>
    );
}

export default Contador;