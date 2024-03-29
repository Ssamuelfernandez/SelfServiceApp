import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { RamenApp } from './RamenApp.jsx'

import './i18n'
import './index.css'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <HashRouter>
      <RamenApp />
    </HashRouter>
  //</React.StrictMode>
)
