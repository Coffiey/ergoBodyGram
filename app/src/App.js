import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <img src="/ergonomic-desk-setup.png" alt="human figure sitting at desk with chair"></img>
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
