import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import './index.css'

import "@fontsource/bebas-neue"; // Defaults to weight 400.
// Supports weights 100-900
import '@fontsource-variable/public-sans';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>    <App /></BrowserRouter>

  </React.StrictMode>,
)
