import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SBALoans from './pages/SBALoans';
import SBALoansEstablished from './pages/SBALoansEstablished';
import SBALoansStartup from './pages/SBALoansStartup';
import SBAMicroLoanGuide from './pages/SBAMicroLoanGuide';
import SBACashFlowGuide from './pages/SBACashFlowGuide';
import SBABusinessPurchase from './pages/SBABusinessPurchase';
import SBAStockPurchase from './pages/SBAStockPurchase';
import RealEstate from './pages/RealEstate';
import ConstructionLoansGuide from './pages/ConstructionLoansGuide';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prestamos-sba" element={<SBALoans />} />
            <Route path="/prestamos-sba/negocios-establecidos" element={<SBALoansEstablished />} />
            <Route path="/prestamos-sba/nuevos-negocios" element={<SBALoansStartup />} />
            <Route path="/prestamos-sba/guia-microloan" element={<SBAMicroLoanGuide />} />
            <Route path="/prestamos-sba/guia-cashflow" element={<SBACashFlowGuide />} />
            <Route path="/prestamos-sba/compra-negocios" element={<SBABusinessPurchase />} />
            <Route path="/prestamos-sba/compra-acciones" element={<SBAStockPurchase />} />
            <Route path="/bienes-raices" element={<RealEstate />} />
            <Route path="/bienes-raices/prestamos-construccion" element={<ConstructionLoansGuide />} />
            <Route path="/contactenos" element={<Contact />} />
            <Route path="/cita" element={<Appointment />} />
            <Route path="/acerca" element={<About />} />
            <Route path="/privacidad" element={<PrivacyPolicy />} />
            <Route path="/terminos" element={<TermsConditions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;