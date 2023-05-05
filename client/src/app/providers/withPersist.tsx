import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { persistedStore } from 'src/app/store'

export const withPersist = (component: () => React.ReactNode) => () => {
  return <PersistGate persistor={persistedStore}>{component()}</PersistGate>
}
