import { useState, useEffect } from 'react';
import './Header.css';
import logo from './assets/logo.svg';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appliquer l'effet après un léger défilement
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="logo-container">
        <img src={logo} alt="Leveling" className="logo" />
      </div>
      <nav>
        <ul className="navbar">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <a href="#" className="download-button">
            <span className="download-button-text">Télécharger l'application</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="256" height="38" viewBox="0 0 256 38" fill="none">
              <path d="M20.5 0H255.5L235 38H0L20.5 0Z" fill="#F0F5FC"/>
            </svg>
          </a>
        </ul>
      </nav>
    </header>
  );
}

export default Header;