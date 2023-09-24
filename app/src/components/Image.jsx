import React, { useEffect, useState } from "react";
import "../styles/Image.css";

const Image = () => {
  const [sitting, setSitting] = useState(true);
  const [buttonText, setButtonText] = useState("");

  const handleImageDisplay = () => {
    if (sitting) {
      setSitting(false);
    } else {
      setSitting(true);
    }
  }

  const handleButtonText = () => {
    if (sitting) {
      setButtonText("Sitting");
    } else {
      setButtonText("Standing");
    }
  }

  useEffect(() => {
    handleButtonText();
  }, [sitting])

  return (
    <>
    <button onClick={handleImageDisplay}>{ buttonText }</button>
    { sitting 
      ? <img src="/sitting.png" alt="human figure sitting at desk with chair"></img>
      : <img src="/standing.png" alt="human figure sitting at desk with chair"></img>
    }
    </>
  )
}

export default Image;