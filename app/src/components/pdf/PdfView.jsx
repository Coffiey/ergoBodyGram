import React from "react"
import { PDFViewer } from '@react-pdf/renderer';
import PdfCreate from './PdfCreate'

function PdfView(props) {
    const {userData} = props

    return (
    <PDFViewer style={{width: "100%", height:"96.5vh"}}>
      {userData && <PdfCreate userData={userData}/>}
    </PDFViewer>
  )
}

export default PdfView