import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query'
import { config } from 'src/shared/config'
import type { RootState } from 'src/app/store/types'

export const baseQuery = fetchBaseQuery({
  baseUrl: config.API_ENDPOINT,
  prepareHeaders: (headers, { getState }) => {
    const { accessToken } = (getState() as RootState).session

    if (accessToken) {
      headers.set('Authorization', `Bearer ${accessToken}`)
      headers.set('credentials', 'same origin')
    }
    return headers
  }
})
