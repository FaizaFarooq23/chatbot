import React, { useState } from "react";

export default function QuestionCard({ questions, showExplanation }) {
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(questions.length).fill(null) 
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); 

  const handleAnswerChange = (questionIndex, selectedOption) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionIndex] = selectedOption;
    setSelectedAnswers(updatedAnswers);

    if (questionIndex < questions.length - 1) {
      setCurrentQuestionIndex(questionIndex + 1);
    }
  };

  return (
    <div className="p-4 rounded-md space-y-6 w-full">
      {questions.slice(0, currentQuestionIndex + 1).map((item, questionIndex) => (
        <div key={questionIndex} className="bg-blue-100 text-right rounded-lg shadow-md p-4">
          {/* Display question content */}
          <span className="block text-base font-semibold mb-2">
            {item.content}
          </span>
          <div className="space-y-2">
            {item.choices.map((choice, optionIndex) => (
              <div key={optionIndex} className="flex items-center justify-end gap-2">
                <label htmlFor={`option-${item.id}-${optionIndex}`} className="text-sm">
                  {choice}
                </label>
                <input
                  type={item.ch === 1 ? "radio" : "checkbox"}
                  name={`question-${item.id}`}
                  id={`option-${item.id}-${optionIndex}`}
                  value={choice}
                  checked={selectedAnswers[questionIndex] === choice}
                  onChange={() => handleAnswerChange(questionIndex, choice)}
                  className="mr-2"
                />
              </div>
            ))}
          </div>
          {showExplanation && selectedAnswers[questionIndex] !== null && (
            <div className="mt-4 text-sm text-gray-700">
              <strong>Explanation:</strong> {item.reason}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
