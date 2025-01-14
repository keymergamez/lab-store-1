import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Header from './components/Header'

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <Header/ >
    <App />
  </React.StrictMode>
  </BrowserRouter>
)
