import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navigation from './navigation/Navigation';
import AboutChairperson from './components/Who-we-are/AboutChairperson';
import HomeBanner from './components/homepage/HomeBanner';
// import AboutWork from './/components/homepage/AboutWork';
import Footer from './/components/homepage/Footer';
import { Routes, Route } from 'react-router-dom';
import Careers from './components/Who-we-are/Careers';
import ContactUs from './components/Who-we-are/ContactUs';
import RuralTransform from './components/What-we-do/RuralTransform';
import MayaFoundation from './components/homepage/MayaFoundation';
import Health from './components/What-we-do/Health';
import Education from './components/What-we-do/Education';
import SpotsDev from './components/What-we-do/SpotsDev';
import WomenEmp from './components/What-we-do/WomenEmp';
import Gallery from './components/gallery/Gallery';
import AllIcon from './components/homepage/AllIcon';
import Donation from './navigation/Donation';

function App() {
  return (
    <>
      <Navigation />
      <AllIcon />
      <Routes>

        <Route path='/' element={<HomeBanner />} />
        <Route path='/about-chairperson' element={<AboutChairperson />} />
        <Route path='/maya-foundation' element={<MayaFoundation />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/rural-transform' element={<RuralTransform />} />
        <Route path='/health' element={<Health />} />
        <Route path='/education' element={<Education />} />
        <Route path='/sports-development' element={<SpotsDev />} />
        <Route path='/women-empowerment' element={<WomenEmp />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/donate-now' element={<Donation />} />

      </Routes>



      <Footer />




      {/* <Careers /> */}
      {/* <ContactUs /> */}
      {/* <RuralTransform /> */}
    </>
  );
}

export default App;
