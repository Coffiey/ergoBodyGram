import React, { useEffect, useState } from "react";
import "../styles/Image.css";

const Image = (props) => {
  const {sitting, setSitting} = props;
  const [buttonText, setButtonText] = useState("Sitting");

  const handleImageDisplay = () => {
    if (sitting) {
      setSitting(false);
    } else {
      setSitting(true);
    }
  }

  const handleButtonText = () => {
    if (sitting) {
      setButtonText("Standing Dimensions");
    } else {
      setButtonText("Sitting Dimensions");
    }
  }

  useEffect(() => {
    handleButtonText();
  }, [sitting])

  return (
    <div className="image">
      <button className="image__toggle" onClick={handleImageDisplay}>{ buttonText }</button>
      { sitting 
        ? <img src="/sitting.png" alt="human figure sitting at desk with chair"></img>
        : <img src="/standing.png" alt="human figure sitting at desk with chair"></img>
      }
    </div>
  )
}

export default Image;