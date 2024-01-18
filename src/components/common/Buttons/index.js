import React from 'react'
import './Button.css'

const Button = (props) => {
  const {btnType, btnText, btnOnClick, customeClass} = props;
  return (
    <div className={`${btnType === `PRIMARY` 
    ? `button primary-btn ${customeClass}`
    : `button secondary-btn ${customeClass}`}`} onClick={btnOnClick}>{btnText}</div>
  )
}

export default Button