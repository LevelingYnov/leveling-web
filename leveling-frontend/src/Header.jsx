import './Header.css'

function Header() {
  return (
    <header>
      <div className="logo-container">
        <img src="assets/logo.webp" alt="Logo" className="logo"></img>
        <span className="site-name">LEVELLING</span>
      </div>
      <nav>
        <ul className="navbar">
          <li>Home</li>
          <li href="">RGPD</li>
          <li>cookie</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;