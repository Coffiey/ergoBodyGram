import React, { useState } from "react";
import "../styles/Header.css";
import Button from "./Button"
import QRCode from "react-qr-code";

const QrCreate = (props) => {
    const {qr, handleSubmit} = props
    const [qrCode, setQrCode] = useState(false);

  return (
    <>
      {qr ? 
      <div className="qr__code">
        <h3>Scan Me</h3>
        <QRCode fgColor="#028579" value={qr}/>
        <p>I've already made a scan</p>
      </div> 
      :
       <Button 
          type="submit"
          className="scan__button"
          title="Click to scan your body"
          text="Scan" 
          onClick={handleSubmit}
          />}
    </>
  )
}

export default QrCreate;