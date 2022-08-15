import {createSelector} from "reselect";

export const directionSelector =(state)=> state.cardsReducer.direction;
export const periodSelector =(state) => state.cardsReducer.period;
export const gradusSelector =(state) => state.cardsReducer.gradus;


export const memoGrand  = createSelector([periodSelector, directionSelector],
    (period,direction )=>({
        period,
        direction
    })
);

export const grandSelector =(state) =>{
  return ({
      period :state.cardsReducer.period,
      direction:state.cardsReducer.direction
  })
}

export const Arr =(state) =>{
    return ({
        period :[state.cardsReducer.period,2] ,
        direction:[state.cardsReducer.direction,3]
    })
}


export const memoArr  = createSelector([periodSelector, directionSelector],
    (period,direction )=>({
        period :[period,2] ,
        direction:[direction,3]
    })
);
/*export const grandSelector =(state) =>{
  return ({
      period :state.cardsReducer.period,
      direction:state.cardsReducer.direction
  })
}*/
