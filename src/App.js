import Cards from './componets/Cards';
import React, {useState, useEffect} from 'react';
import './App.css';

import {} from './importarimg';

function App() {

  const[cards, setCards] = useState([1, 2, 3, 4]);

  return (
    <div className="App">
      <div className="cards-container">
      {
        cards.map((card) => (
          <Cards/>
      ))
    }
    </div>
    </div>
  );
}

export default App;
