import React from 'react'
import ReactDOM from 'react-dom/client'
import { SocetProvider } from './context/SocetContext'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SocetProvider>
      <App />
    </SocetProvider>
  </React.StrictMode>,
)
