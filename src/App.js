import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Portfolio from './Portfolio';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import RiconConstraction from './RiconConstraction';
import './App.sass';
import { Home } from './Component/Home';
import { Header } from './Component/Header';
import AboutUs from './aboutUs';
import OurServices from './OurServices';
import OurServicesInner from './OurServices_inner';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="Portfolio" element={<Portfolio />} />
            <Route
              path="Portfolio/RiconConstruction"
              element={<RiconConstraction />}
            />
            <Route path="aboutUs" element={<AboutUs />} />
            <Route path="OurServices" element={<OurServices />} />
            <Route
              path="OurServices/OurServices_inner"
              element={<OurServicesInner />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Layout() {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default App;
