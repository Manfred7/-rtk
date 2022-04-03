import React, {useState} from 'react';
import './App.css';
import CardUniversal from "./Components/CardUniversal/cardUniversal";
import CardLoShu from "./Components/CardLoShu/cardLoShu";


import CustomProperties from 'react-custom-properties';
import {customEastProp, customNordProp, customSouthProp, customWestProp} from "./data/cards-setting";
import {DatePicker, Space} from 'antd';

import {Select} from 'antd';
import CardsPage from "./Components/Pages/cardsPage";


function App() {


    return (
        <div className="App">
            <CardsPage/>
        </div>
    );
}


//TODO: 1. Фильтр: вводим год дома, градуса на входе двери и получаем карту летящих звезд
//  то есть нужэна выборка из бд по году и градусу.
//  нужна по градусу определять направление на двери =- то есть нужен маппинг направлений на дипапазоны.
// нужен маппиинг направлений на  то какие стили для гридов пробрасывать в компонент универсальной карты.


export default App;
