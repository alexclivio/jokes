import React from 'react'
import ReactDOM from 'react-dom'
import Jokes from './Jokes'
import './css/jokes.css'
import './css/main.css'

const App = () => {
  return (
    <div className='main-container'>
      <Jokes/>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)