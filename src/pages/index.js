import React, { useState } from 'react';
import CoverSection from '../components/CoverSection';
import Footer from '../components/Footer';
import InfoSection from '../components/InfoSection';
import { utilityObj, marketplaceObj, communityObj } from '../components/InfoSection/Data';
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
      <InfoSection {...utilityObj} />
      <InfoSection {...marketplaceObj} />
      <InfoSection {...communityObj} />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
