import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux'
import Router from './app/Router.jsx'
import { store } from './redux/Store.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter >
        <Router />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
