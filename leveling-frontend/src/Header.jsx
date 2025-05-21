import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Header.css';
import logo from './assets/logo.svg';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Reset mobile menu when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial state

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Handle body scroll lock and force close menu on resize
  useEffect(() => {
    if (mobileMenuOpen) {
      // Empêche le défilement et cache tout ce qui n'est pas le menu
      document.body.style.overflow = 'hidden';

      // Ferme automatiquement le menu si l'écran est agrandi
      const handleResize = () => {
        if (window.innerWidth >= 769) {
          setMobileMenuOpen(false);
        }
      };

      window.addEventListener('resize', handleResize);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('resize', handleResize);
      };
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className={scrolled ? 'scrolled' : ''}>
        <div className="logo-container">
          <Link to="/">
            <img src={String(logo)} alt="Leveling" className="logo" />
          </Link>
        </div>

        {/* Burger Menu Button */}
        <button
          className={`burger-menu ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Menu principal"
          aria-expanded={mobileMenuOpen}
        >
          <div className="burger-bar"></div>
          <div className="burger-bar"></div>
          <div className="burger-bar"></div>
        </button>

        {/* Desktop Navigation */}
        <nav>
          <ul className="navbar">
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <ScrollLink
              to="download-section"
              smooth={true}
              duration={1000} // Durée en millisecondes
              className="download-button-header"
            >
              <span className="download-button-text-header">
                Télécharger l'application
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="256"
                height="38"
                viewBox="0 0 256 38"
                fill="none"
              >
                <path d="M20.5 0H255.5L235 38H0L20.5 0Z" fill="#F0F5FC" />
              </svg>
            </ScrollLink>
          </ul>
        </nav>
      </header>

      {/* Mobile Menu Overlay - Separate from header */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'active' : ''}`}>
        {/* Close button (X) */}
        <button
          className="close-button"
          onClick={closeMobileMenu}
          aria-label="Fermer le menu"
        ></button>

        <ul className="navbar">
          <li>
            <Link
              to="/"
              className="nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </li>

          <ScrollLink
            to="download-section"
            smooth={true}
            duration={1000} // Durée en millisecondes
            className="download-button-header"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="download-button-text-header">
              Télécharger l'application
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="256"
              height="38"
              viewBox="0 0 256 38"
              fill="none"
            >
              <path d="M20.5 0H255.5L235 38H0L20.5 0Z" fill="#F0F5FC" />
            </svg>
          </ScrollLink>
        </ul>
      </div>
    </>
  );
}

export default Header;
