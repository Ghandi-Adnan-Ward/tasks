import React, {   } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter as Router,   } from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
  
  <React.StrictMode>
         <I18nextProvider i18n={i18n}>

    <Router basename="/tasks">
      <App/>
      </Router>
      </I18nextProvider>

   </React.StrictMode>,
)

