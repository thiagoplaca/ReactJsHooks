import './index.css'
import ReactDOMClient from 'react-dom/client'
import React from 'react'

import App from './views/App'


const rootEl = document.getElementById('root')
const root = ReactDOMClient.createRoot(rootEl)
root.render(
        <App />
)

