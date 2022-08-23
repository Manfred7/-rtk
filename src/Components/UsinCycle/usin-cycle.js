import React, {useState} from 'react';
import {Button, InputNumber} from "antd";

import {useDispatch, useSelector} from "react-redux";

import {
    directionStarSelector,
    enterStarSelector,
    stenaStarSelector,
    tylStarSelector, usinConfigObjSelector, usinConfigSelector, usinStars
} from "../../slices/selectors/card-selectors";
import {
    setDirectionStar,
    setEnterStar,
    setStenaStar,
    setTylStar,
    setUsinConfig,
    updateUsinConfig
} from "../../slices/reduxStore";

const UsinCycle = () => {

    const stars = useSelector(usinConfigSelector);

    const config = useSelector(usinConfigObjSelector);
    /* console.log({config});*/

    /*console.log("stars", stars);*/

    const dispatch = useDispatch();

    const handleSetStar = (id, newStarValue) => {
        /*   console.log({id});*/
        /*  console.log({newStarValue});
          console.log("config[id]", config[id]);*/

        let newVal = {...config[id]};
        newVal.value = newStarValue;

        dispatch(updateUsinConfig(newVal));
    }


    const StarInput = ({starInfo, onStarChange}) => {
        console.log(starInfo)
        return <>
            <div>
                <h2>{starInfo.description}</h2>
                <InputNumber min={1} max={9} value={starInfo.value} onChange={(val) => {
                    onStarChange(starInfo.id, val)
                }
                }/>
            </div>
        </>
    }

    const StarControls = () => {

        const controls = [];
        for (const key of Object.keys(config)) {
            const item = config[key];
            let control = <StarInput key={item.id} starInfo={item} onStarChange={handleSetStar}/>;
            controls.push(control)
        }

        return controls
    }

    if (config != undefined) {
        console.log(config)
        console.log("!!!!!!!!!!!!!!");
        return (
            <div>
                <StarControls/>
            </div>
        );
    } else {
        console.log("!!!else!!!!!");
        return null

    }
};

export default UsinCycle;
