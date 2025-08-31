import React from 'react'
import { Link } from 'react-router-dom'

const LinkButton = (props) => {
    const {to, name, icon:Icon, className} = props
  return (
    <div>
        <Link to={to}
        className={`${className}`}
        >
          {name}{Icon}
        </Link>  
    </div>
  )
}

export default LinkButton