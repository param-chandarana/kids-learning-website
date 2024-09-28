"use client";

import { useState } from "react";
import Link from "next/link";
import { IoArrowForwardCircleSharp } from "react-icons/io5";

const questions = [
  {
    id: 1,
    text: "How many apples 🍎 are shown here?",
    options: [
      { id: 1, text: "1 apple", isCorrect: false },
      { id: 2, text: "2 apples", isCorrect: true },
      { id: 3, text: "3 apples", isCorrect: false },
    ],
    emoji: "🍎🍎",
  },
  {
    id: 2,
    text: "If you have 5 oranges 🍊 and you eat 2, how many are left?",
    options: [
      { id: 1, text: "2 oranges", isCorrect: false },
      { id: 2, text: "3 oranges", isCorrect: true },
      { id: 3, text: "4 oranges", isCorrect: false },
    ],
    emoji: "🍊🍊🍊🍊🍊",
  },
  {
    id: 3,
    text: "If you have 6 cookies 🍪 and share 3 with your friends, how many cookies do you have left?",
    options: [
      { id: 1, text: "1 cookies", isCorrect: false },
      { id: 2, text: "2 cookies", isCorrect: false },
      { id: 3, text: "3 cookies", isCorrect: true },
    ],
    emoji: "🍪🍪🍪🍪🍪🍪",
  },
  {
    id: 4,
    text: "Look at the 🚗 cars. How many are there?",
    options: [
      { id: 1, text: "1", isCorrect: false },
      { id: 2, text: "2", isCorrect: true },
      { id: 3, text: "3", isCorrect: false },
    ],
    emoji: "🚗🚗",
  },
  {
    id: 5,
    text: "Look at the 🐠 fish. How many are there?",
    options: [
      { id: 1, text: "5", isCorrect: true },
      { id: 2, text: "6", isCorrect: false },
      { id: 3, text: "7", isCorrect: false },
    ],
    emoji: "🐠🐠🐠🐠🐠",
  },
];

const QuizCard = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [finished, setFinished] = useState(false);

  const handleAnswerClick = (option) => {
    setSelectedAnswer(option.id);
    setShowFeedback(true);

    if (option.isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextClick = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinished(true);
    }
    setSelectedAnswer(null);
    setShowFeedback(false);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setFinished(false);
    setSelectedAnswer(null);
    setShowFeedback(false);
  };

  const question = questions[currentQuestion];

  return (
    <div className="text-xl min-h-[80vh] p-4 md:p-8 lg:p-16">
      <div className="lg:pl-20">
        <h1 className="text-4xl md:text-6xl font-bold my-8 pl-4 md:pl-16 lg:ml-20 lg:pl-20">
          Count It Up!
        </h1>
      </div>

      <div className="bg-[#A7C393] p-8 md:p-16 lg:p-20 mx-auto max-w-6xl rounded-lg inner-shadow border-2 border-black relative">
        {!finished ? (
          <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch">
            <div className="w-full md:w-1/2 md:pr-8">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">Question:</h2>
              <p className="text-lg md:text-2xl mb-6">{question.text}</p>

              <div className="flex mb-6">
                <span className="text-7xl">{question.emoji}</span>
              </div>
            </div>

            {/* Updated section to center the buttons */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <div className="space-y-6">
                {question.options.map((option) => (
                  <button
                    key={option.id}
                    className={`block w-full py-3 text-left px-6 rounded-md border-2 border-black inner-shadow ${
                      selectedAnswer === option.id
                        ? option.isCorrect
                          ? "bg-green-500 text-white scale-[1.05]"
                          : "bg-red-500 text-white"
                        : showFeedback && option.isCorrect
                        ? "bg-green-500 text-white scale-[1.05]"
                        : "bg-[#FDBD41] text-black hover:bg-[#e1a932]"
                    }`}
                    onClick={() => handleAnswerClick(option)}
                    disabled={showFeedback} // Disable buttons once an answer is selected
                  >
                    {option.text}
                  </button>
                ))}
              </div>

              {/* Feedback Section */}
              {showFeedback && (
                <div className="mt-6 text-center">
                  {question.options.find(
                    (option) => option.id === selectedAnswer
                  )?.isCorrect ? (
                    <p className="text-black font-bold">
                      Hooray! You&apos;re a star!
                    </p>
                  ) : (
                    <p className="text-black font-bold">
                      Oops! That&apos;s incorrect!
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">
              Quiz Finished!
            </h1>
            <p className="md:text-xl">
              Your score: {score} / {questions.length}
            </p>
            <div className="flex justify-center mt-4">
              <Link href="/kids/math/counting">
                <button className="bg-gray-400 text-white px-4 py-2 rounded-md inner-shadow border-2 border-black mr-4">
                  Go Back
                </button>
              </Link>
              <button
                onClick={resetQuiz}
                className="bg-[#e54e4e] text-white px-4 py-2 rounded-md inner-shadow border-2 border-black hover:bg-[#d73d3d]"
              >
                Try Again
              </button>
            </div>
          </div>
        )}

        {showFeedback && !finished && (
          <button
            onClick={handleNextClick}
            className="absolute bottom-4 right-4 bg-transparent text-black rounded-full hover:scale-[1.05] focus:outline-none"
          >
            <IoArrowForwardCircleSharp size={40} />
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizCard;
