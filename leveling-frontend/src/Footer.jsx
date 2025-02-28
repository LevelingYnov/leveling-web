import { Link, useLocation } from 'react-router-dom';
import logo from './assets/logo.svg';
import discordLogo from './assets/footer/discord.svg';
import youtubeLogo from './assets/footer/youtube.svg';
import xLogo from './assets/footer/x.svg';
import tiktokLogo from './assets/footer/tiktok.svg';
import instagramLogo from './assets/footer/instagram.svg';

import './Footer.css';

function Footer() {
  const location = useLocation();

  // Détermine la classe de fond en fonction du chemin actuel
  const getBackgroundClass = () => {
    const path = location.pathname;

    if (path === '/') return 'footer-background-home';
    if (path === '/about') return 'footer-background-about';
    if (path === '/contact') return 'footer-background-contact';
    if (path === '/mentions-legales') return 'footer-background-mentions';

    // Par défaut
    return '';
  };

  return (
    <footer className={getBackgroundClass()}>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="logo-section">
            <div className="logo-container">
              <img src={logo} alt="Leveling" className="logo" />
            </div>
          </div>
          <div className="social-icons">
            <Link to="https://discord.com">
              <img src={discordLogo} alt="Discord"/>
            </Link>
            <Link to="https://youtube.com">
              <img src={youtubeLogo} alt="YouTube" />
            </Link>
            <Link to="https://twitter.com">
              <img src={xLogo} alt="Twitter" />
            </Link>
            <Link to="https://instagram.com">
              <img src={instagramLogo} alt="Instagram" />
            </Link>
          </div>

          <div className="link-line">
            <Link to="/politique-confidentialite">Politique de confidentialité</Link>
            <Link to="/mentions-legales">Conditions générales</Link>
          </div>
        </div>

        <div className="copyright">
          LEVELING Inc. © 2024. All rights reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;