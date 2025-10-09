import React from 'react'
  import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// const newElement = (
//   <a href="https://google.com" target='_blank'>visit google</a>
// )

const reactElement = React.createElement(
  'a',
  {
    href : 'https://google.com',
    target : '_blank'
  },
  'Visit new Browser'
  
)
createRoot(document.getElementById('root')).render(
    reactElement
)
