import React from 'react';
import {UncontrolledDiagram} from "../UsinCycle/diagram";
import UsinCycle from "../UsinCycle/usin-cycle";
import 'react-reflex/styles.css'
import s from "./usinPage.module.css"
import {ReflexContainer, ReflexElement, ReflexSplitter} from "react-reflex";

const UsinPage = () => {
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
