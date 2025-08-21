import React from "react";
import QuestionsData from "../../questions.json";
import Button from "../../components/button/ButtonOption";

const Score = (props) => {

  const {
  score,
  setCurrentQuestion,
  setScore,
  setShowScore,
  setTimer,
  text
  } = props;

  return (
    <div className="score-section">
      <h2 className="capitalize my-3 text-xl font-medium mb-4">
        Your score : {score}/{QuestionsData.length}
      </h2>
      <Button  onClick={() => {
          setCurrentQuestion(0);
          setScore(0);
          setShowScore(false);
          setTimer(15);
        }} text={"Restart"} colorClass="bg-red-500"/>
        
    </div>
  );
};

export default Score;
