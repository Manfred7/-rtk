import React from 'react';
import './App.css';
import CardUniversal from "./Components/CardUniversal/cardUniversal";
import CardLoShu from "./Components/CardLoShu/cardLoShu";

import CustomProperties from 'react-custom-properties';
import {customEastProp, customNordProp, customSouthProp, customWestProp} from "./data/cards-setting";

function App() {


    return (
        <div className="App">
            <div style={{display: "flex", direction: "row" , flexWrap: "wrap"}}>
                <div>
                    <h2>Север снизу(Стандартный Лошу)</h2>
                    <CustomProperties properties={customNordProp}>
                        <CardUniversal/>
                    </CustomProperties>
                </div>

                <div>
                    <h2>Юг снизу</h2>
                    <CustomProperties properties={customSouthProp}>
                        <CardUniversal/>
                    </CustomProperties>
                </div>

                <div>
                    <h2>Восток снизу</h2>
                    <CustomProperties properties={customEastProp}>
                        <CardUniversal/>
                    </CustomProperties>
                </div>

                <div>
                    <h2>Запад снизу</h2>
                    <CustomProperties properties={customWestProp}>
                        <CardUniversal/>
                    </CustomProperties>
                </div>

            </div>

        </div>
    );
}

export default App;
