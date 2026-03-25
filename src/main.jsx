import { createRoot } from 'react-dom/client'

import { StrictMode } from 'react'

import Login from './pages/login'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
  </StrictMode>,
)
