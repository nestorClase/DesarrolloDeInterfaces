import React, { useState } from 'react';

function Compra() {
    const productos = ['Manzana', 'Banana', 'Naranja', 'Pera', 'Melón'];
    const [busqueda, setBusqueda] = useState('');

    const filtro = productos.filter((producto) =>
        producto.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div>
            <h2>lista dela compra</h2>
            <input
                type="text"
                placeholder="busca producto"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
            />
            <ul>
                {filtro.length > 0 ? (
                    filtro.map((producto, index) => (
                        <li key={index}>{producto}</li>
                    ))
                ) : (
                    <li>no hay productos</li>
                )}
            </ul>
        </div>
    );
}

export default Compra;