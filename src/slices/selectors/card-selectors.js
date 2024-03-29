import {createSelector} from "reselect";
import React from "react";

export const directionSelector = (state) => state.cardsReducer.direction;
export const periodSelector = (state) => state.cardsReducer.period;
export const gradusSelector = (state) => state.cardsReducer.gradus;

export const enterStarSelector = (state) => state.cardsReducer.enterStar;
export const directionStarSelector = (state) => state.cardsReducer.directionStar;
export const stenaStarSelector = (state) => state.cardsReducer.stenaStar;
export const tylStarSelector = (state) => state.cardsReducer.tylStar;


export const usinConfigSelector = (state) => state.cardsReducer.usinConfig;

export const usinConfigObjSelector = (state) => state.cardsReducer.usinConfigObj;


export const memoGrand = createSelector([periodSelector, directionSelector],
    (period, direction) => ({
        period,
        direction
    })
);


export const usinStars = createSelector([usinConfigObjSelector],
    (usinStars) => {

        let result = []

        for (const key of Object.keys(usinStars)) {
            const item = usinStars[key].value;
            result.push(item)
        }

        return result
    }
);

export const grandSelector = (state) => {
    return ({
        period: state.cardsReducer.period,
        direction: state.cardsReducer.direction
    })
}

export const Arr = (state) => {
    return ({
        period: [state.cardsReducer.period, 2],
        direction: [state.cardsReducer.direction, 3]
    })
}


export const memoArr = createSelector([periodSelector, directionSelector],
    (period, direction) => ({
        period: [period, 2],
        direction: [direction, 3]
    })
);
/*export const grandSelector =(state) =>{
  return ({
      period :state.cardsReducer.period,
      direction:state.cardsReducer.direction
  })
}*/
