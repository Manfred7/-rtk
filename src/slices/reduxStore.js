import {configureStore, createSlice, nanoid} from "@reduxjs/toolkit";
import {logger} from "redux-logger";
import {cardsApi} from "../api/cards-api";

const cardSlice = createSlice({
    name: "@@card",
    initialState: {
        direction: "sever1",
        id: -1,
        period: "6period"
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
        chousePeriod: (state, action) => {
            state.period = action.payload
        }
    }, /*extraReducers:(builder)=>{
        builder.addCase()
    }*/

})

const dataReducer = { [cardsApi.reducerPath]: cardsApi.reducer}
const reducer = {
    [cardsApi.reducerPath]: cardsApi.reducer,
    cardsReducer:   cardSlice.reducer ,

}
export const {chouseDirection, chousePeriod} = cardSlice.actions;

export const store =  configureStore(
    {
        reducer:reducer,
        devTools:true,
        middleware: (getDeafaultMiddlware)=>getDeafaultMiddlware().concat(cardsApi.middleware)

    }
)
