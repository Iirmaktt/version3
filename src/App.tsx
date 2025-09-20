import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import Danismanlik from './pages/Danismanlik';
import KaynakHizmetleri from './pages/KaynakHizmetleri';
import SymbolAkademi from './pages/SymbolAkademi';
import News from './pages/News';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/danismanlik" element={<Danismanlik />} />
          <Route path="/kaynak-hizmetleri" element={<KaynakHizmetleri />} />
          <Route path="/symbol-akademi" element={<SymbolAkademi />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;