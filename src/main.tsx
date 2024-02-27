import React from 'react'
import ReactDOM from 'react-dom/client'
import SuspenseExampleOnReact17 from './SuspenseExampleOnReact17.tsx'
import SuspenseExampleOnReact18 from './SuspenseExampleOnReact18.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SuspenseExampleOnReact17 />
    <SuspenseExampleOnReact18 />
  </React.StrictMode>,
)
