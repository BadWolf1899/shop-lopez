import React from 'react'
import baner from './baner.avif';
import "./styles/Baner.css"

const Baner = (props) => {
  return (
    <>
    <div className="topper">
      <img className='baner' style={{width: '1500px'}} src={baner} alt='' />
      <h1 className="txt">ENVÍOS - MVD Y PICK UP: 3-5 DÍAS HÁBILES - INTERIOR: 7 DÍAS HÁBILES</h1>
      </div>
    </>
  )
}

export default Baner;