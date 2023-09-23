import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
import Chart from './components/Chart';
import ThreeIndex from './components/three/ThreeIndex';
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import QRCode from "react-qr-code";
import { useState, useEffect } from 'react';

function App() {
  
  const [input, setInput] = useState(null);
  const [qr, setQr] = useState(false);
  const [userData, setUserData] = useState();

  useEffect(()=> {
    const func = async() => {
      // if (input) {
        try {
          // const URL = `api/get-measurements/${input}`
          const URL = `/api/get-measurements/myFirstScan`
          const userDataRequest = await axios.get(URL)
          setUserData(userDataRequest.data)
          console.log(userDataRequest.data)
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

  return (
    <div className="App">
      <Header />
      <div className="main">
        <img src="/ergonomic-desk-setup.png" alt="human figure sitting at desk with chair"></img>
        <div>
          {qr ? <div className="qr__code"><QRCode fgColor="#028579" value={qr}/></div> : <Button 
            type="submit"
            className="scan__button"
            title="Click to scan your body"
            text="Scan" 
            onClick={handleSubmit}
            />}
          <Chart />
          </div>
      </div>
      {/* <ThreeIndex /> */}
      <Footer />
      </div>
  );
}

export default App;
