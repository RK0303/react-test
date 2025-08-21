import React from 'react'

const Timer = (props) => {

  const {timer} =props;
  
  return (
    <div className="timer mt-5 text-2xl text-gray-600">
            <span >Time left: <span className=' font-extrabold'>{timer}</span></span>
          </div>
  )
}

export default Timer