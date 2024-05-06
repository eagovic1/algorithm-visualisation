import './App.css'
import React, { useState, useEffect } from 'react'
import SortingArray from './components/SortingArray/SortingArray'

enum InstructionType {
  TAG = "tag",
  SWAP = "swap",
  COMPARE = "compare",
  ASSIGN = "assign"
}

interface Instruction {
  type: InstructionType,
  clear: boolean,
  operands: number[],
  description: string
}

function App() {
  const [dataFetched, setDataFetched] = useState(false)
  const [instructions, setInstructions] = useState<Instruction[]>([])
  const array = [5, 2, 3, 4, 1];

  useEffect(() => {
    fetch('http://localhost:3000/api/sort/bubble/steps', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        array: array
      })
    }).then(response => response.json()).then(data => {
      console.log('Success:', data)
      setInstructions(data)
      setDataFetched(true)
    }).catch(error => {
      console.error('Error:', error)
    });
  }, [])

  if (!dataFetched)
    return <h1>Loading...</h1>
  return (
    <>
      <SortingArray instructions={instructions} array={array} />
    </>
  )
}

export default App
