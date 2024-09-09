import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import "./StepControl.css";
import LeftArrow from "../../assets/images/left.png";
import RightArrow from "../../assets/images/right.png";
import Play from "../../assets/images/play.png";
import Pause from "../../assets/images/pause.png";
import Restart from "../../assets/images/restart.png";

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

  const restart = () => props.setCurrentStep(1);

  return (
    <div className="stepControl">
      <img onClick={play} className="controlIcon" src={Play} alt="Play" />
      <img onClick={pause} className="controlIcon" src={Pause} alt="Pause" />
      <img
        onClick={nextStep}
        className="controlIcon"
        src={RightArrow}
        alt="Next"
      />
      <img
        onClick={restart}
        className="controlIcon"
        src={Restart}
        alt="Restart"
      />
    </div>
  );
};

export default StepControl;
