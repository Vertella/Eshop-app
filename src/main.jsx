import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ReactDOM from 'react-dom';
import { CartProvider } from './context/CartContext.jsx'

// Root element for React to render into
createRoot(document.getElementById('root')).render(
  // StrictMode help find potential problems in app during development
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>,
)
