import React from 'react';
import Contador from './ComponentesSencillos/Contador';
import Formulario from './ComponentesSencillos/Formulario';
import Toggle from './ComponentesSencillos/Toggle';
import ListaTareas from './ComponentesSencillos/ListaTareas';
import ListaCompra from './ComponentesSencillos/ListaCompra';


const App = () => {
  return (
    <div>
      <h1>Componentes React Sencillos</h1>
      <Contador />
      <Formulario />
      <Toggle />
      <ListaTareas />
      <ListaCompra />
    </div>
  );
};

export default App;
