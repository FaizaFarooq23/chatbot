import React, { useState } from "react";

export default function QuestionCard({
  questions,
  selectedAnswer,
  handleAnswer,
  showExplanation,
}) {
  return (
    <div className="space-y-6 w-full">
      {questions.map((item, index) => (
        <div key={index} className="flex items-end text-right gap-4 flex-col">
          <span className="block text-base font-semibold">
            {item.content}
          </span>
          <div className="space-y-2">
            {item.choices.map((choice, optionIndex) => (
              <label
                key={optionIndex}
                htmlFor={`option-${item.id}-${optionIndex}`}
                className="flex items-center justify-end gap-2 text-sm"
              >
                {choice}
                <input
                  type={item.ch === 1 ? "radio" : "checkbox"}
                  name={`question-${item.id}`}
                  id={`option-${item.id}-${optionIndex}`}
                  value={choice}
                  checked={selectedAnswer === choice}
                  onChange={() => handleAnswer(choice)}
                  className="mr-2"
                />
              </label>
            ))}
          </div>

          {showExplanation && selectedAnswer && (
            <div className="mt-4 text-sm text-gray-700">
              <strong>Explanation:</strong> {item.reason}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
