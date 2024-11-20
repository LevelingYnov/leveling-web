import './Header.css'

function Header() {
  return (
    <header>
      <div class="logo-container">
        <img src="assets/logo.webp" alt="Logo" class="logo"></img>
        <span class="site-name">LEVELLING</span>
      </div>
      <nav>
        <ul class="navbar">
          <li>Home</li>
          <li href="">RGPD</li>
          <li>cookie</li>
        </ul>
      </nav>
    </header>    
  )
}

export default Header
