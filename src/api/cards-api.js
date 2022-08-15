import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const cardsApi = createApi({
    reducerPath: "cardsApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8000/"}),
      endpoints :(builder) =>({
       getCards: builder.query({
           query: () => "/starCards",
       })})
});


export const {useGetCardsQuery} = cardsApi;
