import React from 'react';
import Experience from './components/experience/Experience';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Offers from './components/offers/Offers';
import Footer from './components/footer/Footer';
import Destination from './components/destination/Destinations';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Destination />
      <Experience />
      <Offers />
      <Footer /> 
    </div>
  );
}

export default App;
