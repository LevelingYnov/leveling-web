import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <p>
        <Link>A propos : A propos de l&apos;équipe</Link>
      </p>
      <p>
        <Link to="/mentions-legales">Mentions légales</Link>
      </p>
      <p>
        <Link to="">Politique de confidentialité</Link>
      </p>
    </footer>
  );
}

export default Footer;
