import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
import Image from './components/Image';

function App() {
  return (
    <div className="App">
      <Header />
      <div classname="main">
        <Image />
        <Button 
          className="scan__button"
          title="Click to scan your body!"
          text="Scan!" />
      </div>
      <Footer />
      </div>
  );
}

export default App;
