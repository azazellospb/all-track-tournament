import React from 'react'
import { withProviders } from 'src/app/providers'
import { Routing } from 'src/app/routing'

const App = () => {
  return <Routing />
}

export default withProviders(App)
