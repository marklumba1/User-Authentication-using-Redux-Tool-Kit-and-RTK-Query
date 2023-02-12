import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const apiSlice = createApi({
    reducerPath: `api`,
    baseQuery: fetchBaseQuery({ baseUrl: ` http://localhost:4000`}),
    endpoints: (builder) => ({
        addUser: builder.mutation({
            query: (body) => ({
                url:`register`,
                method: `POST`,
                body: body
            })
        }),
        loginUser: builder.mutation({
            query: (credentials) => ({
                url: `login`,
                method: `POST`,
                body: credentials
            })
        })
    })
})
//auto generated useEndpointNameQuery
export const {useAddUserMutation, useLoginUserMutation} = apiSlice