import React from 'react'
import { render } from 'react-dom'
import App from '../components/App.js'

render(
    // define the encompassing component
    // DOM element dans lequel on veut sacrer le component
    <App/>,
    document.getElementById('app')
)