import React from 'react'

function ButtonRestart({onClick}) {
  return (
    <>
        <button className=' py-3 px-4 rounded-4xl inline bg-red-500 capitalize text-white cursor-pointer transition delay-50 hover:brightness-120' onClick={onClick}>Restart
        </button>
    </>
  )
}

export default ButtonRestart