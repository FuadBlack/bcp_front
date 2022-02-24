import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Portfolio from './Porfolio';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Footerinput from './FooterInput';
import RiconConstraction from './RiconConstruction';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/RiconConstraction" element={<RiconConstraction />} />
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
          <Portfolio />

          <Footer />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default App;
