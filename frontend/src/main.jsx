import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'



// Intercept requestIdleCallback errors thrown by browser extensions
// before React 19's global error handler catches them and crashes
window.addEventListener('error', (event) => {
  if (event.message?.includes('requestIdleCallback')) {
    event.stopImmediatePropagation()
    event.preventDefault()
  }
}, true)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
