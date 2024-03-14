import React from 'react'
import ReactPDF from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import ChemS1 from './books/ChemS1';


function Books() {
  return (
   <>
   <PDFViewer className=' pt-40'>
    <ChemS1 />
  </PDFViewer>
  
   </>
  )
}
 
export default Books