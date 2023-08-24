import React from 'react'
import "./prevbutton.css";
import { useLocation, useNavigate } from 'react-router-dom';
import previous from "../../images/previous.png"
import { useGlobalContext } from '../../context/global';

const PrevButton = () => {

  const location = useLocation();

  const {
    setSearch,
    state  } = useGlobalContext()

  let navigate = useNavigate()

  function goBack() {

    navigate(-1);

    if(location.pathname === "/searchresults"){
      state.isSearch = false;
      setSearch('')
    }
  }

  return (
    <button type='button' className='go-back' onClick={goBack}><img src={previous} alt="Go-back" /></button>
  )
}

export default PrevButton