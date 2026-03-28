import { createRoot } from 'react-dom/client'

import { StrictMode } from 'react'
import Signup from "./pages/signup.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < Signup/>
  </StrictMode>,
)
