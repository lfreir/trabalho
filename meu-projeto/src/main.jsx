import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Header} from '/Users/Leonardo/Aula/meu-projeto/src/componentes/Header/Header.jsx'
import { Rodape } from './componentes/Rodape/Rodape.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />
    <Rodape />
  </React.StrictMode>,
)
