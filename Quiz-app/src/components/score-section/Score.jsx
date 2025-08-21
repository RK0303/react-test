import React from 'react'
import ButtonRestart from '../button/ButtonRestart'
import QuestionsData from "../../questions.json";

const Score = ({score, setCurrentQuestion, setScore, setShowScore,setTimer}) => {
  return (
     <div className="score-section">
      <h2 className="capitalize my-3 text-xl font-medium mb-4">
        Your score : {score}/{QuestionsData.length}
      </h2>
      <ButtonRestart onClick={() =>{
        setCurrentQuestion(0)
        setScore(0);
        setShowScore(false);
        setTimer(15);
      }} 
       />

    </div>
  )
}

export default Score