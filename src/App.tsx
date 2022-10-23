import Home from './pages/Home'
import React, { ReactElement } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/Error'
import Root from './pages/Root'
import { Provider } from 'react-redux'
import store from './configs/Redux'
import Array from './pages/Array'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'home/',
        element: <Home />,
        children: [
          {
            path: 'array/',
            element: <Array />,
          },
        ],
      },
    ],
  },
])

function App(): ReactElement {
  return (
    <React.Fragment>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.Fragment>
  )
}

export default App
