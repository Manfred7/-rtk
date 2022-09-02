import React, {useEffect} from 'react';
import {UncontrolledDiagram} from "../Components/UsinCycle/diagram";
import UsinCycle from "../Components/UsinCycle/usin-cycle";
import 'react-reflex/styles.css'
import s from "./usinPage.module.css"
import {ReflexContainer, ReflexElement, ReflexSplitter} from "react-reflex";
import {setUsinConfig, updateUsinConfig} from "../slices/reduxStore";
import {useDispatch} from "react-redux";


const usinConfig = [{id: 1, description: "Тыловая", value: 1},
    {id: 2, description: "Янская у стены", value: 1},
    {id: 3, description: "Янская от направления", value: 1},
    {id: 4, description: "Янская от входа", value: 1},
    {id: 5, description: "Энергия дворца", value: 1}
]
const UsinPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const usinConfig = [{id: 1, description: "Тыловая handleSettylStar", value: 1},
            {id: 2, description: "Янская у стены", value: 2},
            {id: 3, description: "Янская от направления", value: 6},
            {id: 4, description: "Янская от входа", value: 4},
            {id: 5, description: "Энергия дворца", value: 9}
        ]

        dispatch(setUsinConfig(usinConfig));

        const newVal = {id: 1, description: "Тыловая", value: 21}
        dispatch(updateUsinConfig(newVal));



    }, [])

    return (
        <ReflexContainer orientation="vertical" style={{height: "850px"}}>

            <ReflexElement className={s.leftPane}
                           minSize="200"
                           maxSize="350">
                <div className="pane-content">
                    <UsinCycle/>
                </div>
            </ReflexElement>

            <ReflexSplitter/>

            <ReflexElement className={s.rightPane}>
                <div className="pane-content">
                    <h2>Диаграмма</h2>
                    <UncontrolledDiagram/>
                </div>
            </ReflexElement>

        </ReflexContainer>

    );
};

export default UsinPage;
