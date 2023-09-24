import React from "react"
import { PDFViewer } from '@react-pdf/renderer';
import PdfCreate from './PdfCreate'

function PdfView() {
  return (
    <PDFViewer style={{width: "100%", height:"96.5vh"}}>
      <PdfCreate />
    </PDFViewer>
  )
}

export default PdfView