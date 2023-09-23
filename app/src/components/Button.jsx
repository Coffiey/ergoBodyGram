import React from "react";
import "../styles/Button.css";

const Button = (props) => {
  const { className, text, onClick, title } = props;

  return (
    <>
      <button
        title = { title }
        className = { className }
        onClick = { onClick } > { text }
      </button>
    </>
  )
};

export default Button;