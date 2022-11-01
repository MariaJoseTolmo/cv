import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ControlledCarousel from './components/carousel'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ControlledCarousel/>
    <App />
  </React.StrictMode>
)
