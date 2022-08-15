import React, {useState} from 'react';
import {Button, InputNumber} from "antd";
import {UncontrolledDiagram} from "./diagram";

const UsinCycle = () => {

    const [tylStar, setTylStar] = useState();
    const [stenaStar, setStenaStar] = useState();
    const [directionStar, setDirectionStar] = useState();
    const [enterStar, setEnterStar] = useState();

    const [result, setResult] = useState();

    const hanldeCalcResult = ()=>{
      const newCombination =[
           [tylStar,stenaStar].join("") ,
           [tylStar,directionStar].join(""),
           [tylStar,enterStar].join("")];
        setResult(newCombination);
    }

    const hasTree=()=> [tylStar,stenaStar ,directionStar  ,enterStar].includes(3);
    const hasFire=()=>[tylStar,stenaStar ,directionStar  ,enterStar].includes(9);

    const hasEarch=()=> {   return  [tylStar, stenaStar, directionStar, enterStar].includes(5) ||
        [tylStar, stenaStar, directionStar, enterStar].includes(2) ||
        [tylStar, stenaStar, directionStar, enterStar].includes(8);
    }

    const hasWater = ()=>[tylStar,stenaStar ,directionStar  ,enterStar].includes(1);

    const hasMetal=()=> {   return  [tylStar, stenaStar, directionStar, enterStar].includes(6) ||
        [tylStar, stenaStar, directionStar, enterStar].includes(7)
    }

    return (
        <div>
            <div>
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

                <Button onClick={ hanldeCalcResult}>Посчитать</Button>
            </div>

            <div>
                {result}

            </div>

        </div>
    );
};

export default UsinCycle;
