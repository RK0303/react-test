import React, { useState, useEffect } from "react";
import QuestionsData from "../../questions.json";

import "../../index.css";
import Button from "../../components/button/ButtonOption";
import Option from "../../components/options/option";
import Timer from "../../components/timer/Timer";
import Question from "../question-section/Question-section";
import Score from "../score-section/Score";
import TimerUseEffect from "../../components/timer/TimerUseEffect";

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(15);

  return (
    <main className="flex justify-center items-center w-screen h-screen bg-blue-200">
      <div className="quiz-app rounded-2xl w-2xl bg-blue-50 p-4 text-center">
        <TimerUseEffect timer={timer} 
                setTimer={setTimer}
                showScore={showScore}
                setShowScore={setShowScore}
                 />

        {showScore ? (
          <Score
            score={score}
            setCurrentQuestion={setCurrentQuestion}
            setScore={setScore}
            setShowScore={setShowScore}
            setTimer={setTimer}
          />
        ) : (
          <>
            <Question currentQuestion={currentQuestion} />
            <Option
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
              setScore={setScore}
              setTimer={setTimer}
              setShowScore={setShowScore}
            />
            <Timer timer={timer} />
          </>
        )}
      </div>
    </main>
  );
};

export default QuizApp;
