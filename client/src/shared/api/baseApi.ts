import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from 'src/shared/api/baseQueryWithReauth'

export const baseApi = createApi({
  tagTypes: [],
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({})
})
