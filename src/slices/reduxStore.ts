import {configureStore, createSlice, nanoid, PayloadAction} from "@reduxjs/toolkit";
import {cardsApi} from "../api/cards-api";

import {useDispatch, useSelector, TypedUseSelectorHook} from "react-redux";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

type TConfigRecord = {
    id: number,
    description: string,
    value: number
};

type TConfigObject = {
    [id: number]: TConfigRecord
}

type TState = {
    direction: string,
    /*id: number,*/
    period: string,
    gradus: number,
    usinConfigObj: TConfigObject
}

const initialStateValue: TState = {
    direction: "sever1",
    period: "6",
    gradus: 0,

    usinConfigObj: {
        1: {id: 1, description: "Тыловая", value: 1},
        2: {id: 2, description: "Янская у стены", value: 2},
        3: {id: 3, description: "Янская от направления", value: 6},
        4: {id: 4, description: "Янская от входа", value: 4},
        5: {id: 5, description: "Энергия дворца", value: 9}
    }

};

const cardSlice = createSlice({
    name: "@@card",
    initialState: initialStateValue,
    reducers: {
        chouseDirection: (state, action:PayloadAction<string>) => {
            state.direction = action.payload;
        },

        updateUsinConfig: (state, action:PayloadAction<TConfigRecord>) => {

            const newObj = {...state.usinConfigObj};
            newObj[action.payload.id] = {...action.payload};

            state.usinConfigObj = newObj;
        },

        chousePeriod: (state, action:PayloadAction<string>) =>
        {
            state.period = action.payload
        },

        setGradus: (state, action:PayloadAction<number>) =>
        {
            state.gradus = action.payload
        }
    },

})

const reducer = {
    [cardsApi.reducerPath]: cardsApi.reducer,
    cardsReducer: cardSlice.reducer,

}
export const {
    chouseDirection, setGradus, chousePeriod,
     updateUsinConfig
} = cardSlice.actions;

export const store = configureStore(
    {
        reducer: reducer,
        devTools: true,
        middleware: (getDeafaultMiddlware) => getDeafaultMiddlware().concat(cardsApi.middleware)

    }
)


