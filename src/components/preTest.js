import React, { useState, useEffect } from "react";
import { pretestQuestions } from "@/data/CourseData";
import { LuClock4 } from "react-icons/lu";
import { Navigation } from "./navigation";
import QuestionCard from "./questionCard";
import { ProgressCircle } from "./progressCircle";



export default function PreTest({handleSubmit}) {
  const totalQuestions = pretestQuestions.length;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(
    Array(totalQuestions).fill(null)
  );
  const [timeLeft, setTimeLeft] = useState(200);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAnswer = (choice) => {
    if (answers[currentQuestionIndex] === null) {
      const updatedAnswers = [...answers];
      updatedAnswers[currentQuestionIndex] = choice;
      setAnswers(updatedAnswers);

      if (currentQuestionIndex < totalQuestions - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
      }
    }
  };

  const handleNavigate = (index) => {
    if (index >= 0 && index < totalQuestions && timeLeft > 0) {
      setCurrentQuestionIndex(index);
    }
  };



  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className='flex flex-col justify-between max-w-2xl w-[800px] p-6 space-y-4 shadow-lg bg-white bg-[url("/looper.svg")] bg-left h-[400px] rounded-lg'>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-1">
          <LuClock4 className="text-2xl leading-none" />
          <div className="flex flex-col font-semibold">
            <span className="text-gray-500 text-[10px] pt-1 leading-[9px] ">
              Remaining Time
            </span>
            <span className="text-sm leading-5 font-bold">
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>
        {answers.every((answer) => answer !== null) && (
          <button
            onClick={handleSubmit}
            disabled={timeLeft <= 0}
            className="bg-gradient-to-r from-[#5899E2] to-pepsi-blue duration-300 transition-colors hover:from-pepsi-blue hover:to-[#5899E2] cursor-pointer text-white px-4 py-2 text-sm rounded-md font-bold"
          >
            Submit Test
          </button>
        )}
      </div>

      <div className="flex items-center gap-4">
        <ProgressCircle
          currentIndex={answers.filter((answer) => answer !== null).length}
          totalQuestions={totalQuestions}
        />

        <QuestionCard
          questions={[pretestQuestions[currentQuestionIndex]]}
          selectedAnswer={answers[currentQuestionIndex]}
          handleAnswer={handleAnswer}
          showExplanation={false}
        />
      </div>
<div>
      <Navigation
        totalQuestions={totalQuestions}
        currentIndex={currentQuestionIndex}
        answeredQuestions={answers.map((answer) => answer !== null)}
        onNavigate={handleNavigate}
      /></div>
    </div>
  );
}
