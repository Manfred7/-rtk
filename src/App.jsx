import React, {useEffect} from 'react';
import './App.css';
import CardsPage from "./Components/Pages/cardsPage";
import {useGetCardsQuery} from "./api/cards-api";


function App() {

    const {data, isLoading} = useGetCardsQuery();

/*    console.log({data});
    if (data) {
        /!*const periodSix = data.periodSix;
        const periodSeven = data.periodSeven;
        const periodEight = data.periodEight;*!/

        const {periodSix,periodSeven,periodEight , indexesMaps} = data;
        /!*console.log({periodSix})*!/

        const {s1, s2, sz1, sz2, sv1, sv2, y1, y2, yz1, yz2, yv1, yv2 } = periodSix;

        console.log({s1});
        console.log({s2});
    }
    */





    if (isLoading) {
        return (<h1>Loading...</h1>)
    }

    return (
        <div className="App">


            <CardsPage data={data} />
        </div>
    );
}


//TODO: 1. Фильтр: вводим год дома, градуса на входе двери и получаем карту летящих звезд
//  то есть нужэна выборка из бд по году и градусу.
//  нужна по градусу определять направление на двери =- то есть нужен маппинг направлений на дипапазоны.
// нужен маппиинг направлений на  то какие стили для гридов пробрасывать в компонент универсальной карты.


export default App;
