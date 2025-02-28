import './App.css';
import Header from './Header';
import Contact from './Contact';
import Footer from './Footer';

import About from './About';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MentionLegalPage from './mentionLegales';
import HomePage from './HomePage.jsx';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />

        <div className="page-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/mentions-legales" element={<MentionLegalPage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
