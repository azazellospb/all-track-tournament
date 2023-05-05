import React, { Suspense } from 'react'
import { Spin } from 'antd'
import { useRoutes } from 'react-router-dom'
import { routes } from 'src/app/routing/config'

export const Routing = () => {
  const RouterComponent = () => useRoutes(routes)
  // TODO: Отцентровать Spin по цетру страницы
  return (
    <Suspense fallback={<Spin tip="Loading" size="large" />}>
      <RouterComponent />
    </Suspense>
  )
}
