import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-euclid">
      <Header />
      <main className="flex-1 flex flex-col justify-center xl:px-[15%] lg:px-[10%] md:px-[7%] px-[2%] overflow-scroll sm:overflow-auto pb-28 min-h-[80vh]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;