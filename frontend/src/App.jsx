import { useState } from 'react'
import ClickerButton from './components/ClickerButton'
import Score from './components/Score'

function App() {
  const [score,setScore]= useState(0)
 
  return (
    <>
      <ClickerButton></ClickerButton>
      <Score score={score}></Score>
    </>
  )
}

export default App
