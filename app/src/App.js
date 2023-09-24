import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Chart from './components/Chart';
import ThreeIndex from './components/three/ThreeIndex';
import QrCreate from './components/QrCreate';
import Image from './components/Image';
import PdfView from './components/pdf/PdfView';
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";

import { useState, useEffect } from 'react';

function App() {
  const currentUrl = window.location.pathname;
  
  const [input, setInput] = useState(null);
  const [qr, setQr] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(()=> {
    const func = async() => {
      // if (input) {
        try {
          // const URL = `api/get-measurements/${input}`
          //test 
          const URL = `/api/get-measurements/myFirstScan`
          const userDataRequest = await axios.get(URL)
          console.log(userDataRequest.data)
          setUserData(userDataRequest.data)
        } catch (err) {
          console.log("THERE WAS AN ERROR")
        }
      // }
    }
func();
  }, [])
  
  const handleSubmit = async () => {
    try {
      const savedData = localStorage.getItem('ergoBodyGram');
      if (savedData) {
        setInput(savedData)
        console.log("from local storage")
        }else {
        const userId = uuidv4();
        localStorage.setItem('ergoBodyGram', userId)
        setInput(userId)
        console.log("new")
      }
      const URL = `api/getToken?token=${input}`;
      const QRURL = await axios.get(URL);
      console.log(QRURL.data);
      setQr(QRURL.data);
    } catch (error) {
      console.error(error);
    }
  }

  const handlePDF = () => {
    window.location.href = window.open('/your-target-url', '_blank');
  }

  if (currentUrl === "/pdf") {
    return (
        <PdfView />
    ) 
  }

  return (
    <div className="App">
      <Header />
      <div className="main">
        <Image />
        {/* <img src="/ergonomic-desk-setup.png" alt="human figure sitting at desk with chair"></img> */}
        <div>
          <QrCreate qr={qr} handleSubmit={handleSubmit}/>
          {/* <Chart userData={userData}/> */}
          </div>
      </div>
      {/* <ThreeIndex /> */}
      <button onClick={handlePDF}>Generate PDF</button>
      <Footer />
      </div>
  );
}

export default App;
