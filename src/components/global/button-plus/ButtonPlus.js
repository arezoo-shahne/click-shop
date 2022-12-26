import React from "react";
import { BiTrash } from "react-icons/bi";
import { HiPlus } from "react-icons/hi";
import { HiMinus } from "react-icons/hi";
import './ButtonPlus.scss'

function ButtonPlus({ count,plus,minus,remove }) {
  return (
    <div className="button-plus-wrapper">
      <div><HiPlus onClick={plus} /></div>
      <span>{count}</span>
      <div><HiMinus onClick={minus}/></div>
      <div><BiTrash onClick={remove} /></div>
    </div>
  );
}

export default ButtonPlus;
