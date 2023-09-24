import React, { useState } from "react";

const Image = () => {
  const [sitting, setSitting] = useState(true);
  const [standing, setStanding] = useState(false);

  return (
    <>
      
      <img src="/ergonomic-desk-setup.png" alt="human figure sitting at desk with chair"></img>
    </>
  )
}

export default Image;