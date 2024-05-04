// empty react component

import React from 'react'
import './ArrayElement.css'

interface ArrayElementProps {
    value: number,
    index: number,
    tag?: string
}

const ArrayElement = (props: ArrayElementProps) => {
    return (
        <div className="root">
            <div className={"arrayElement" + props.tag && " taggedElement"}>
                {props.value}
            </div>
            <div className="elementIndex">
                {props.index}
            </div>
        </div>
    )
}

export default ArrayElement