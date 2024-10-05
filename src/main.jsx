import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./globals.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { UsersPage } from './pages/UsersPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/users',
    element: <UsersPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>
)
