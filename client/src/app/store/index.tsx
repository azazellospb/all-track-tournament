import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { rootReducer } from 'src/app/store/rootReducer'
import { sessionSlice } from 'src/entities/session'
import { invalidateAccessTokenListener } from 'src/features/authentication/invalidateAccessToken/model/listener'
import { baseApi } from 'src/shared/api'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [sessionSlice.name],
  blacklist: [baseApi.reducerPath]
}

export function makeStore() {
  const appStore = configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
      }).concat(baseApi.middleware, invalidateAccessTokenListener.middleware)
  })

  setupListeners(appStore.dispatch)

  return appStore
}

export const store = makeStore()
export const persistedStore = persistStore(store)
