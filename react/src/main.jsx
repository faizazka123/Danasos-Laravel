import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './router.jsx'
import { RouterProvider } from 'react-router-dom'
import { ContextProvider } from './contexts/ContextProvider'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="517766527052-11n8r7epj8tmmcbsnsi4s53d7ggikb5h.apps.googleusercontent.com">
    <React.StrictMode>
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </React.StrictMode>,
  </GoogleOAuthProvider>
)
