import React from "react";
import { useSpring, animated } from "@react-spring/web";
import "./ArrayElement.css";

interface ArrayElementProps {
  value: number;
  tag?: string;
  maxElement: number;
}

const ArrayElement = (props: ArrayElementProps) => {
  const { value, tag } = props;

  // Animate the inner height only based on the value
  const styles = useSpring({
    height: `${60 + (
      (value / props.maxElement) * 100
    )}px`, // Height change based on value
    config: { tension: 50, friction: 12 }, // Smooth animation
  });

  return (
    <div id="rootArrayElement"> {/* The wrapper div shouldn't bounce */}
      <animated.div
        className={"arrayElement " + (tag ? "taggedElement" : "")}
        style={styles}
      >
        {value}
      </animated.div>
    </div>
  );
};

export default ArrayElement;
