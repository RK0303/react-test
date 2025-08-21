import React,{useState} from 'react'
import QuestionsData from "../../questions.json";


const Question = (props) => {

  const {currentQuestion} = props;

  return (
    <div className="question-section">
          <h2 className=' capitalize my-3 text-3xl font-semibold text-blue-400'>Question {currentQuestion + 1}</h2>
          <p className=' font-bold'>{QuestionsData[currentQuestion].question}</p>
          
    </div>
  )
}

export default Question