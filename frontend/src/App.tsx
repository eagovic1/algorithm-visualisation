import './App.css'
import React, { useState } from 'react'
import SortingArray from './components/SortingArray/SortingArray'

function App() {
  let [dataFetched, setDataFetched] = useState(false)
  let array = [3, 7, 1, 5, 4]
  let instructions = []
  fetch('http://localhost:5000/api/sort/bubble/steps', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      array: [5, 4, 3, 2, 1],
    })
  }).then(response => response.json()).then(data => {
    instructions = data.instructions
    setDataFetched(true)
  }).catch(error => {
    console.error('Error:', error)
  });

  if (!dataFetched)
    return <h1>Loading...</h1>
  return (
    <>
      <SortingArray instructions={instructions} />
    </>
  )
}

export default App
