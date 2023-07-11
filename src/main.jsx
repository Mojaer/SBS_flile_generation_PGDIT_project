import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import AuthContext from './Authentication/AuthCenter/AuthContext'


const allDataClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={allDataClient}>
      <React.StrictMode>
        <AuthContext>
          <RouterProvider router={router} />
        </AuthContext>
      </React.StrictMode>
    </QueryClientProvider>
  </React.StrictMode>,
)
