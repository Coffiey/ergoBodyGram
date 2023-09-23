import React from "react";
import "../styles/Button.css";

const Button = (props) => {
  const { className, text, onClick, title, type } = props;

  return (
    <>
      <button
        type = { type }
        title = { title }   
        className = { className }
        onClick = { onClick } > { text }
      </button>
    </>
  )
};

export default Button;