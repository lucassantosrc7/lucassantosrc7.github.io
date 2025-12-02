import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import WhatsAppButton from '../molecule/WhatsAppButton.jsx'; 

const DefaultSite = ({ children }) => {
  return (
    <div className="min-h-screen w-screen flex flex-col bg-[var(--color-white)]">
      <Header />

      <main className="flex-grow pt-[122px] mb-30 sm:mb-24 lg:mb-24 xl:mb-20">
        {children}
      </main>

      <WhatsAppButton />

      <Footer />
    </div>
  );
};

export default DefaultSite;
