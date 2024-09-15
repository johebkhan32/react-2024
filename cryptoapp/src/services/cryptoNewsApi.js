import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



const cryptoNewsHeaders = {
    "x-rapidapi-key": "3dce903239msh6bebdb6978fadcfp130c66jsn407db1fbfef2",
	"x-rapidapi-host": "news-api14.p.rapidapi.com"
}
   

const baseUrl = "https://news-api14.p.rapidapi.com/v2/search/articles"



const createRequest = (url) => ({url, headers: cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`?query=${newsCategory}&language=en&limit=${count}`),
        })
    })
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
