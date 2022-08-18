import React, {useState} from 'react';
import {Button, InputNumber} from "antd";

import {useDispatch, useSelector} from "react-redux";

import {
     directionStarSelector,
    enterStarSelector,
    stenaStarSelector,
    tylStarSelector
} from "../../slices/selectors/card-selectors";
import {setDirectionStar, setEnterStar, setStenaStar, setTylStar} from "../../slices/reduxStore";

const UsinCycle = () => {

    const tylStar = useSelector( tylStarSelector);
    const stenaStar = useSelector( stenaStarSelector);
    const directionStar = useSelector(directionStarSelector);
    const enterStar = useSelector(enterStarSelector);

    const dispatch = useDispatch();

    const handleSettylStar = (tylStar)=>{
        dispatch(setTylStar(tylStar));
    }

    const handleSetStenaStar = (stenaStar)=>{
        dispatch(setStenaStar(stenaStar));
    }
    const handleSetDirectionStar = (directionStar)=>{
        dispatch(setDirectionStar(directionStar));
    }
    const handleSetEnterStar = (enterStar)=>{
        dispatch(setEnterStar(enterStar));
    }
    return (
        <div>
            <div>
              
                <div>
                    <h2>Тыловая</h2>
                    <InputNumber min={1} max={9} value={tylStar} onChange={
                        handleSettylStar
                    }/>
                </div>

                <div>
                    <h2>Янская у стены</h2>
                    <InputNumber min={1} max={9} value={stenaStar} onChange={handleSetStenaStar}/>
                </div>

                <div>
                    <h2>Янская от направления</h2>
                    <InputNumber min={1} max={9} value={directionStar} onChange={handleSetDirectionStar}/>
                </div>

                <div>
                    <h2>Янская от входа</h2>
                    <InputNumber min={1} max={9} value={enterStar} onChange={handleSetEnterStar}/>
                </div>

            </div>

        </div>
    );
};

export default UsinCycle;
