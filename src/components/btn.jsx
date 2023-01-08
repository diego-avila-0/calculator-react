import React from "react";
import '../css-custom/btn.css'

export function Button(props) {

  const ifNumOperator = value => {
    return isNaN(value) && value !== '.' && value !== '='
  }

  return(
    <div 
    className={`btn_container ${ ifNumOperator(props.children) ? 'operator' : '' }`.trim()}
    >
      {props.children}
    </div>

  )


}