import { useState } from 'react'
import React from 'react'
import Board from './components/Board';
import './App.css'

function App() {
  //these are the same thing
  const [count, setCount] = React.useState(0) //count is set at the value 0
  //setCount is a function
  const [count1, setCount1] = useState(0)

  return (
    <div className=''>
      <Board/>
    </div>
  )
}

export default App
