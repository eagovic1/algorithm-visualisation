import React from "react";
import "./ArrayElement.css";

interface ArrayElementProps {
  value: number;
  index: number;
  tag?: string;
}

const ArrayElement = (props: ArrayElementProps) => {
  return (
    <div id="rootArrayElement">
        <div className="elementIndex">{props.index}</div>
      <div
        className={"arrayElement " + (props.tag && "taggedElement")}
        style={{ height: `${60 + (props.value - 1)*25}px` }}
      >
        {props.value}
      </div>
    </div>
  );
};

export default ArrayElement;
