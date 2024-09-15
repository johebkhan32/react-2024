import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const cryptoApiHeaders = {
    'x-rapidapi-key': '3dce903239msh6bebdb6978fadcfp130c66jsn407db1fbfef2',
	'x-rapidapi-host': 'coinranking1.p.rapidapi.com'

}


const baseUrl = 'https://api.coinranking.com/v2';

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        
        getCryptoDetails: builder.query({
            query: (uuid) => createRequest(`/coin/${uuid}`),
            
        }),
        getCryptoHistory: builder.query({
            query: ({coinId, timePeriod}) => createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`),
        }),

        // getExchanges: builder.query({
        //     query: (coinId) => createRequest(`/${coinId}/exchanges`),
        // }),
    })
  });

        
            



export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } = cryptoApi;




