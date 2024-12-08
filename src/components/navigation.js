export function Navigation({
    totalQuestions,
    currentIndex,
    answeredQuestions,
    onNavigate,
  }) {
    return (
      <div className="flex justify-between gap-4 items-center ">
        <button
          onClick={() => onNavigate(currentIndex - 1)}
          disabled={currentIndex === 0}
          className="border-[1px] border-blue-950 font-semibold text-sm text-gray-800 px-3 py-2 rounded-md"
        >
          Prev
        </button>
  
        <div className="flex gap-2">
          {Array.from({ length: totalQuestions }).map((_, index) => (
            <button
              key={index}
              onClick={() =>
                (answeredQuestions[index] || index === currentIndex) &&
                onNavigate(index)
              }
              className={`w-8 h-8 rounded-md border-[1.5px] shadow-sm ${
                index === currentIndex
                  ? "bg-gradient-to-r from-[#5899E2] to-pepsi-blue text-white"
                  : answeredQuestions[index]
                  ? "bg-pepsi-blue text-white"
                  : ""
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
  
        <button
          onClick={() => onNavigate(currentIndex + 1)}
          disabled={
            currentIndex === totalQuestions - 1 ||
            !answeredQuestions[currentIndex]
          }
          className={` rounded-md border-[1.5px] text-sm text-gray-800 px-3 py-2 font-semibold ${
            answeredQuestions[currentIndex]
              ? " border-blue-950 "
              : ""
          }`}
        >
          Next
        </button>
      </div>
    );
  }
  