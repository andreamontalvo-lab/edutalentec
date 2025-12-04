import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import FutureTalent from './pages/FutureTalent';
import SmartTalent from './pages/SmartTalent';
import CorporateTalent from './pages/CorporateTalent';
import Blog from './pages/Blog';
import CareerSearch from './pages/CareerSearch';
import Events from './pages/Events';
import AiAssistant from './components/AiAssistant';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-slate-900 text-slate-100 selection:bg-orange-500 selection:text-white">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/future-talent" element={<FutureTalent />} />
            <Route path="/smart-talent" element={<SmartTalent />} />
            <Route path="/corporate-talent" element={<CorporateTalent />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/career-search" element={<CareerSearch />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </main>
        <AiAssistant />
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;