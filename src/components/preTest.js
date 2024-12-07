import React, { useState, useEffect } from "react";
import QuestionCard from "./questionCard";
import { pretestQuestions } from "@/data/CourseData";

export default function PreTest() {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes timer (300 seconds)
  const [isTimerActive, setIsTimerActive] = useState(true); // To control whether the timer is active

  // Start the timer countdown
  useEffect(() => {
    let interval;

    if (isTimerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }

    // Clear the interval when the time runs out or when the component unmounts
    return () => clearInterval(interval);
  }, [isTimerActive, timeLeft]);

  // Format time into MM:SS format
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center backdrop-blur bg-gradient-to-r from-[#5899E2] to-white overflow-hidden no-scrollbar">
      <div className="flex flex-col  overflow-y-scroll no-scrollbar h-96 m-6 rounded-lg max-w-2xl w-full bg-white bg-opacity-40 ">
      <div className="w-20 p-4 flex flex-col items-center justify-center text-white text-2xl font-semibold">
          <div className="bg-pepsi-blue p-2 rounded-lg shadow-md">
            {timeLeft > 0 ? formatTime(timeLeft) : "Time's Up"}
          </div> </div>       <div className="flex-1 p-4">
          <QuestionCard questions={pretestQuestions} showExplanation={false} />
        </div>
        
       </div>
    </div>
  );
}
