// empty react component

import React from 'react'

// component that accepts an array of instructions (objects) and renders them
// as a list of strings

enum InstructionType {
  COMPARISON = 'comparison',
  SWAP = 'swap',
  ASSIGNMENT = 'assignment',
}

interface Instruction {
  type: string
  clear: boolean,
  operands: number[],
  description: string
}

interface SortingArrayProps {
  instructions: Instruction[]
}

const SortingArray = (props: SortingArrayProps) => {
  return (
    <div>
      {

      }
    </div>
  )
}

export default SortingArray