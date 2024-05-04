import React, { Dispatch, SetStateAction, useState } from 'react'
import './StepControl.css'

interface StepControlProps {
    currentStep: number,
    instructionsLength: number,
    setCurrentStep: Dispatch<SetStateAction<number>>
}

const StepControl = (props: StepControlProps) => {
    props.setCurrentStep(0)
    const [playing, setPlaying] = useState(false)

    const nextStep = () => {
        if (props.currentStep < props.instructionsLength - 1) {
            props.setCurrentStep(props.currentStep + 1)
        }
    }

    const previousStep = () => {
        if (props.currentStep > 0) {
            props.setCurrentStep(props.currentStep - 1)
        }
    }

    const stop = () => {
        setPlaying(false)
    }

    const play = () => {
        setPlaying(true)
    }

    return (
        <div className="stepControl">
            <button onClick={previousStep}>Previous</button>
            <button onClick={stop}>Stop</button>
            <button onClick={play}>Play</button>
            <button onClick={nextStep}>Next</button>
        </div>
    )
}

export default StepControl 

