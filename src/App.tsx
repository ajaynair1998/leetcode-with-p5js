import Home from './pages/Home'
import React, { ReactElement } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/Error'
import Root from './pages/Root'
import Array from './pages/Array'
import BinarySearch from './pages/Array/BinarySearch'

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
            children: [{ path: 'binarysearch/', element: <BinarySearch /> }],
          },
        ],
      },
    ],
  },
])

function App(): ReactElement {
  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  )
}

export default App
