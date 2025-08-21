import React from 'react'
import QuestionsData from "../../questions.json";

const Button  = (props) => {
  const {text, onClick, colorClass}= props;
  return (
    <div className="option ">
        <button className={`py-3 px-4 rounded-4xl inline capitalize text-white cursor-pointer transition delay-50 hover:brightness-120 ${colorClass}`} backgroundColor:bgcolor onClick={onClick}>
          {text}
        </button>
    </div>
  )
}

export default Button 