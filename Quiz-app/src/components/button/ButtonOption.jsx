import React from 'react'
import QuestionsData from "../../questions.json";

const Button  = ({text, onClick}) => {
  return (
   <div>
    <div className="option ">
        <button className=' py-3 px-4 rounded-4xl inline bg-blue-400 capitalize text-white cursor-pointer transition delay-50 hover:brightness-120' onClick={onClick}>{text}
        </button></div>
   </div>
  )
}

export default Button 