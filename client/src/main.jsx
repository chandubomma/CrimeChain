import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContractsProvider } from './context/ContractsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContractsProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContractsProvider>
 
)
