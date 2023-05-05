import { combineReducers } from '@reduxjs/toolkit'
import { sessionSlice } from 'src/entities/session'
import { baseApi } from 'src/shared/api'

export const rootReducer = combineReducers({
  [sessionSlice.name]: sessionSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer
})
