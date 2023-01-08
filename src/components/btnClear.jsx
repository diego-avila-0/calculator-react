import React from 'react';
import '../css-custom/btnClear.css';

const BtnClear = (props) => {
  return (
    <div
    onClick={ () => props.manageClear() }
    className='btn_clear'>
        {props.children}
    </div>
  )
}

export default BtnClear;