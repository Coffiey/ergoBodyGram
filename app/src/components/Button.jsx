import React from "react";
import "../styles/Button.css";

const Button = (props) => {
  const { className, text, onClick, title, type } = props;

  return (
    <>
    <div>
      <p>Not sure how tall your desk should be? Having trouble choosing a chair that matches your body shape? We got you. Scan your body to get the ideal measurements for your ergonomic work set-up!</p>
    </div>
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