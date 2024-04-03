// empty react component

import React from 'react'
import './ArrayElement.css'

interface ArrayElementProps {
    value: number
}

const ArrayElement = (props : ArrayElementProps) => {
    return (
        <div className = {"number" + }>
            {props.value}
        </div>
    )
}