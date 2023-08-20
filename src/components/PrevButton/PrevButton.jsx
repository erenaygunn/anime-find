import React from 'react'
import "./prevbutton.css";
import { useNavigate } from 'react-router-dom';
import previous from "../../images/previous.png"

const PrevButton = () => {

  let navigate = useNavigate()

  function goBack() {
    navigate(-1);
  }

  return (
    <button type='button' className='go-back' onClick={goBack}><img src={previous} alt="Go-back" /></button>
  )
}

export default PrevButton