import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export function ProgressCircle({ currentIndex, totalQuestions }) {
  const remainingQuestions = totalQuestions - currentIndex;
  const progressPercentage = (remainingQuestions / totalQuestions) * 100;

  return (
    <div className="h-32 w-32 flex items-center font-bold justify-center">
      <CircularProgressbar
        value={progressPercentage}
        maxValue={100}
        text={`${remainingQuestions}/${totalQuestions}`}
        styles={buildStyles({
          pathColor: "#1B52A2",   
          trailColor: "#e5e7eb", 
          textColor: "#1B52A2",  
          textSize: "20px",
        })}
      />
    </div>
  );
}
