import React, {useEffect, useState} from 'react';
import {InputNumber} from "antd";
import {foolCheck} from "../../data/util";

const VneGua = () => {

    const [gradus, setGradus] = useState(0);
    const [vneGua, setVneGua] = useState('');

    useEffect(() => {

        const res = foolCheck(gradus);
        console.log(res);
        setVneGua(res);

    }, [gradus])
    return (
        <div style={{marginLeft:"200px", marginTop:"30px"}}>
            <h3>Проверка вне гуа</h3>
            <InputNumber min={0} max={359.9} value={gradus} onChange={setGradus}/>
            <h3>Вне гуа:{vneGua}</h3>
        </div>
    );
};

export default VneGua;
