import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/globals.css'
import { Home } from './components/Home'
import { BrowserRouter } from 'react-router-dom'
import { AppNav } from './routes/AppNav'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      <Home></Home>
      <AppNav></AppNav>
    </React.StrictMode>
  </BrowserRouter>
)