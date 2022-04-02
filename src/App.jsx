import React from 'react';
import './App.css';
import CardSouth from "./Components/CardSouth/cardSouth";
import CardLoShu from "./Components/CardLoShu/cardLoShu";
import CardEast from "./Components/CardEast/cardEast";

function App() {
  return (
    <div className="App">
        <div style={{display:"flex", direction: "row"}} >
            <div>
                <h2>Стандартный ЛоШу</h2>
              <CardLoShu/>
            </div>
            <div>
                <h2>Юг снизу</h2>
                <CardSouth/>
            </div>

            <div>
                <h2>Восток снизу</h2>
                <CardEast/>
            </div>

        </div>

    </div>
  );
}

export default App;
