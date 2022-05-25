import React, { useState } from 'react';
import CoverSection from '../components/CoverSection';
import Footer from '../components/Footer';
import InfoSection from '../components/InfoSection';
import { nftObj, marketplaceObj, signupObj } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <CoverSection />
      <InfoSection {...nftObj} />
      <InfoSection {...marketplaceObj} />
      <InfoSection {...signupObj} />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
