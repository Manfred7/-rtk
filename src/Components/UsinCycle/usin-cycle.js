import React, {useState} from 'react';
import {Button, InputNumber} from "antd";
import {UncontrolledDiagram} from "./diagram";
import s from "./usin-cycle.module.css"

const UsinCycle = () => {

    const [tylStar, setTylStar] = useState();
    const [stenaStar, setStenaStar] = useState();
    const [directionStar, setDirectionStar] = useState();
    const [enterStar, setEnterStar] = useState();

    const [result, setResult] = useState();

    const hanldeCalcResult = () => {
        const newCombination = [
            [tylStar, stenaStar].join(""),
            [tylStar, directionStar].join(""),
            [tylStar, enterStar].join("")];
        setResult(newCombination);
    }

    const hasTree = () => [tylStar, stenaStar, directionStar, enterStar].includes(3);
    const hasFire = () => [tylStar, stenaStar, directionStar, enterStar].includes(9);

    const hasEarch = () => {
        return [tylStar, stenaStar, directionStar, enterStar].includes(5) ||
            [tylStar, stenaStar, directionStar, enterStar].includes(2) ||
            [tylStar, stenaStar, directionStar, enterStar].includes(8);
    }

    const hasWater = () => [tylStar, stenaStar, directionStar, enterStar].includes(1);

    const hasMetal = () => {
        return [tylStar, stenaStar, directionStar, enterStar].includes(6) ||
            [tylStar, stenaStar, directionStar, enterStar].includes(7)
    }

    const T_F = (hasTree() && hasFire()) ? 'Есть' : "Нет";
    const F_E = (hasFire() && hasEarch()) ? 'Есть' : "Нет";
    const E_M = (hasEarch() && hasMetal()) ? 'Есть' : "Нет";
    const M_W = (hasMetal() && hasWater()) ? 'Есть' : "Нет";
    const W_T = (hasWater() && hasTree()) ? 'Есть' : "Нет";

    return (
        <div>
            <div>
                <h2>Связь Дерево порождает Огонь {T_F}</h2>
                <h2>Связь Вода порождает Дерево {W_T}</h2>
                <h2>Связь Металл порождает Воду {M_W}</h2>
                <h2>Связь Огонь порождает Землю {F_E}</h2>
                <h2>Связь Земля порождает Металл {E_M}</h2>
                <div>
                    <h2>Тыловая</h2>
                    <InputNumber min={1} max={9} value={tylStar} onChange={setTylStar}/>
                </div>

                <div>
                    <h2>Янская у стены</h2>
                    <InputNumber min={1} max={9} value={stenaStar} onChange={setStenaStar}/>
                </div>

                <div>
                    <h2>Янская от направления</h2>
                    <InputNumber min={1} max={9} value={directionStar} onChange={setDirectionStar}/>
                </div>

                <div>
                    <h2>Янская от входа</h2>
                    <InputNumber min={1} max={9} value={enterStar} onChange={setEnterStar}/>
                </div>
                <div className={s.buttonBox}>
                    <Button onClick={hanldeCalcResult}>Посчитать</Button>
                </div>
            </div>

            <div>
                {result}

            </div>

        </div>
    );
};

export default UsinCycle;
