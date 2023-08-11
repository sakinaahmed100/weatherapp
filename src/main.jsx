import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStyle from './GlobalStyles.jsx'
import { MyContextProvider } from '../public/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <MyContextProvider>
    <App />
    </MyContextProvider>
  </React.StrictMode>,
)
