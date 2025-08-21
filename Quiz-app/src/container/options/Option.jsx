import React from "react";
import Button from "../../components/button/ButtonOption";
import QuestionsData from "../../questions.json";

const Option = ({currentQuestion, setCurrentQuestion ,setScore, setTimer, setShowScore }) => {
   
  const handleClick =(selectOption) =>{

    if(selectOption === QuestionsData[currentQuestion].correctOption){
      setScore((preScore) => preScore + 1);
    }

    if(currentQuestion < QuestionsData.length -1){
      setCurrentQuestion((preQuestion) => preQuestion +1);
      setTimer(15);
    }else{
      setShowScore(true);
    }
  }


  return (
    <div className="option flex justify-center items-center gap-2 mt-4">
      {QuestionsData[currentQuestion].options.map((option, index) => (
        <Button key={index} onClick={()=>handleClick(option)} text={option} />
      ))}
    </div>
  );
};

export default Option;
