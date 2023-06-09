import React from 'react'
import logo from './지구.png';
import './ReactPage.css'

const ReactPage = () => {
  return (
    <div>
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React <code>English</code> Together
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default ReactPage