import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SittingChart from './components/SittingChart';
import ThreeIndex from './components/three/ThreeIndex';
import QrCreate from './components/QrCreate';
import Image from './components/Image';
import PdfView from './components/pdf/PdfView';
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";

import { useState, useEffect } from 'react';
import StandingChart from './components/StandingChart';

function App() {
  const currentUrl = window.location.pathname;
  
  const [input, setInput] = useState(null);
  const [qr, setQr] = useState(false);
  const [userData, setUserData] = useState(null);
  const [sitting, setSitting] = useState(true);
  const [toggle, setToggle] = useState(true)
  
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
  }, [toggle])
  
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
    if (userData) {
      window.location.href = window.open('/pdf', '_blank');
    }
  }

  if (currentUrl === "/pdf") {
      return (
        <PdfView userData={userData}/>
    )
  }

  const handleDelete = async() => {
    const URL = `api/delete/${userData.scan_id}`;
    const QRURL = await axios.delete(URL);
    setUserData(null)
    console.log(QRURL)
    localStorage.removeItem('ergoBodyGram');
  }

  return (
    <div className="App">
      <Header />
      <div className="main">
        <Image sitting={sitting} setSitting={setSitting}/>
        <div className="scan">
          {!userData && <QrCreate setToggle={setToggle} qr={qr} handleSubmit={handleSubmit}/>}
        </div>
        <div className="chart">
          {userData && <>
          { sitting
            ? <SittingChart onClick={handleDelete} userData={userData}/>
            : <StandingChart onClick={handleDelete} userData={userData}/>
          }
          </>
          }
        </div>
      </div>
      {/* <ThreeIndex /> */}
      {userData && <button onClick={handlePDF}>Generate PDF</button>}
      <Footer />
      </div>
  );
}

export default App;
