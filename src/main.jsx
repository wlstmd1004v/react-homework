import React from 'react'
import ReactDOM from 'react-dom/client'
import EUID from './components/EUID'
import SeulbinimButton from './components/seulbinim';
import BeomButton from './components/beom'
import YamooButton from './components/yamoo9';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EUID />
    <SeulbinimButton />
    <BeomButton />
    <YamooButton />
  </React.StrictMode>,
)
