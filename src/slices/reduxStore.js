import {configureStore, createSlice, nanoid} from "@reduxjs/toolkit";
import {logger} from "redux-logger";
import {cardsApi} from "../api/cards-api";
import {useState} from "react";


const cardSlice = createSlice({
    name: "@@card",
    initialState: {
        direction: "sever1",
        id: -1,
        period: "6",
        gradus: 0,

        tylStar: 1,
        stenaStar: 6,
        directionStar: 8,
        enterStar: 9,
        usinConfig: [],

        usinConfigObj: {
            1: {id: 1, description: "Тыловая handleSettylStar", value: 1},
            2: {id: 2, description: "Янская у стены", value: 2},
            3: {id: 3, description: "Янская от направления", value: 6},
            4: {id: 4, description: "Янская от входа", value: 4},
            5: {id: 5, description: "Энергия дворца", value: 9}
        }

    },
    reducers: {
        chouseDirection: {
            reducer: (state, action) => {
                state.direction = action.payload.direction;
                state.id = action.payload.id
            },
            prepare: (direction) => ({
                    payload: {
                        direction,
                        id: nanoid()
                    }
                }
            )
        },


        setUsinConfig: (state, action) => {
            state.usinConfig = [...action.payload]
        },

        updateUsinConfig: (state, action) => {

            const newObj = {...state.usinConfigObj};
            newObj[action.payload.id] = {...action.payload};

            state.usinConfigObj = newObj;


        },


        setTylStar: (state, action) => {
            state.tylStar = action.payload
        },

        setStenaStar: (state, action) => {
            state.stenaStar = action.payload
        },
        setDirectionStar: (state, action) => {
            state.directionStar = action.payload
        },
        setEnterStar: (state, action) => {
            state.enterStar = action.payload
        },

        chousePeriod: (state, action) => {
            state.period = action.payload
        },
        setGradus: (state, action) => {
            state.gradus = action.payload
        }
    }, /*extraReducers:(builder)=>{
        builder.addCase()
    }*/

})

const dataReducer = {[cardsApi.reducerPath]: cardsApi.reducer}
const reducer = {
    [cardsApi.reducerPath]: cardsApi.reducer,
    cardsReducer: cardSlice.reducer,

}
export const {
    chouseDirection, setGradus, chousePeriod,
    setDirectionStar, setEnterStar,
    setTylStar, setStenaStar,
    setUsinConfig, updateUsinConfig
} = cardSlice.actions;

export const store = configureStore(
    {
        reducer: reducer,
        devTools: true,
        middleware: (getDeafaultMiddlware) => getDeafaultMiddlware().concat(cardsApi.middleware)

    }
)
