import React from 'react';
import {shallowEqual, useSelector} from "react-redux";
import {Arr, directionSelector, grandSelector, memoArr, memoGrand} from "../../slices/selectors/card-selectors";

const TestReselect = () => {

   // const direction = useSelector(directionSelector);

    /*const megaObg = useSelector(grandSelector,shallowEqual);*/

//    const megaArr= useSelector(memoArr);

    const tt = useSelector((state) =>{
        return ({
            period :state.cardsReducer.period,
            direction:state.cardsReducer.direction
        })}, shallowEqual)
   /* const megaArr= useSelector(Arr, shallowEqual);*/

/*    const megaObg = useSelector(memoGrand, shallowEqual);*/


    console.log("render TestReselect")

    return (
        <div>
            <h2>TestReselect</h2>
            <h3>{tt.direction}</h3>
           <h3>{tt.period}</h3>
            {/*<h4>{megaObg.direction}  {megaObg.period}</h4>*/}
           {/* <h4>megaArr.period {megaArr.period[0]}  {megaArr.period[1]}</h4>
            <h4>megaArr.direction {megaArr.direction[0]}  {megaArr.direction[1]}</h4>*/}
            <br/>
            <br/><br/>

        <hr/>

        </div>
    );
};

export default TestReselect;
