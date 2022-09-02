import React from 'react';
import CardsPage from "./cardsPage";
import {useGetCardsQuery} from "../api/cards-api";
import {Route, Routes} from "react-router-dom";
import UsinPage from "./usinPage";

const ROOT = "/";
const CARDS = "/cards";
const USIN = '/usin'
const AppPages = () => {

    const {data, isLoading} = useGetCardsQuery();
    return (
        <>
            <Routes>
                <Route path={ROOT}

                       element={
                           <CardsPage data={data}/>
                       }
                />

                <Route path={CARDS}

                       element={
                           <CardsPage data={data}/>
                       }
                />


                <Route path={USIN}
                       element={
                           <UsinPage/>}
                />
            </Routes>
        </>
    );
};

export default AppPages;
