import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Accordian from './Components/Accordian.jsx'
import SearchBar from './Components/SearchBar.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SearchBar />
    {/* <App />  */}
    {/* <Accordian/> */}
  </React.StrictMode>,
)
