import React,{useState, useEffect} from "react";
import QuestionsData from "./questions.json";

import "./index.css";
import Button from "./components/button/ButtonOption";
import Option from "./container/options/option";
import Timer from "./container/timer/Timer";
import Question from "./components/question-section/Question-section";
import Score from "./components/score-section/Score";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(15);

  useEffect(() => {
    let interval;
    if(timer > 0 && !showScore){
      interval = setInterval(()=>{
        setTimer((preTimer) => preTimer -1);
      }, 1000)
    }else{
      clearInterval(interval);
      setShowScore(true);
    }

    return () => clearInterval(interval)
  }, [timer, showScore]);
  

  return (
    <main className="flex justify-center items-center w-screen h-screen bg-blue-200">
      <div className="quiz-app rounded-2xl w-2xl bg-blue-50 p-4 text-center">
        {
          showScore ? <Score score={score} 
                      setCurrentQuestion={setCurrentQuestion}
                      setScore={setScore}
                      setShowScore={setShowScore}
                      setTimer={setTimer}
                      /> :
          <>
            <Question currentQuestion={currentQuestion} />
            <Option currentQuestion={currentQuestion} 
                    setCurrentQuestion={setCurrentQuestion} 
                    setScore={setScore} 
                    setTimer={setTimer} 
                    setShowScore={setShowScore}
                    />
            <Timer timer={timer} />
          </>
        }
        
        
      </div>
    </main>
  );
};

export default App;
