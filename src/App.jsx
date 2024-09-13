import { useState } from 'react'
import Button from './conponents/buton\'s/Button'
import Result from './conponents/result/Result'
import './App.css'

function App() {
  const [num1, setNum1] = useState()
  const [num2, setNum2] = useState()
  const [result,setResult] = useState()
  return (
    <>
     <Button setNum1={setNum1} num1={num1} num2={num2} setNum2={setNum2} setResult={setResult}/>
     <Result result={result}/>
    </>
  )
}

export default App
