import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import "./StepControl.css";
import LeftArrow from "../../assets/images/left.png";
import RightArrow from "../../assets/images/right.png";
import Play from "../../assets/images/play.png";
import Pause from "../../assets/images/pause.png";

interface StepControlProps {
  currentStep: number;
  instructionsLength: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
}

const StepControl = (props: StepControlProps) => {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    props.setCurrentStep(1);
  }, []);

  useEffect(() => {
    if (playing) {
      const timeout = setTimeout(() => {
        nextStep();
      }, 1000);
      return () => clearInterval(timeout);
    }
  }, [playing, props.currentStep]);

  const nextStep = () => {
    if (props.currentStep < props.instructionsLength) {
      props.setCurrentStep(props.currentStep + 1);
    }
  };

  const previousStep = () => {
    if (props.currentStep > 1) {
      props.setCurrentStep(props.currentStep - 1);
    }
  };

  const pause = () => {
    setPlaying(false);
  };

  const play = () => {
    setPlaying(true);
  };

  return (
    <div className="stepControl">
      <button onClick={previousStep}>
        <img className="controlIcon" src={LeftArrow} alt="Previous" />
      </button>
      <button onClick={pause}>
        <img className="controlIcon" src={Pause} alt="Pause" />
      </button>
      <button onClick={play}>
        <img className="controlIcon" src={Play} alt="Play" />
      </button>
      <button onClick={nextStep}>
        <img className="controlIcon" src={RightArrow} alt="Next" />    
      </button>
    </div>
  );
};

export default StepControl;
