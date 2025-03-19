import './About.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1 className="about-title">À propos de nous</h1>
        <p className="about-subtitle">Découvrez notre histoire et notre mission</p>

        <div className="about-content">
          <div className="about-section">
            <h2>Notre Histoire</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales
              maximus risus, quis congue libero convallis vel. Sed ut lorem quis nisl
              finibus pharetra. Donec dictum lorem vel odio efficitur blandit.
            </p>
          </div>

          <div className="about-section">
            <h2>Notre Mission</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales
              maximus risus, quis congue libero convallis vel. Sed ut lorem quis nisl
              finibus pharetra. Donec dictum lorem vel odio efficitur blandit.
            </p>
          </div>

          <div className="about-section">
            <h2>Notre Équipe</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales
              maximus risus, quis congue libero convallis vel. Sed ut lorem quis nisl
              finibus pharetra. Donec dictum lorem vel odio efficitur blandit.
            </p>
          </div>
        </div>

        <a href="/" className="about-button">
          <span className="button-text">Retour à l'accueil</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 38" fill="none">
            <path d="M20.5 0H255.5L235 38H0L20.5 0Z" fill="url(#paint0_angular_179_4)" />
            <defs>
              <radialGradient
                id="paint0_angular_179_4"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(127.75 19) scale(127.75 19)"
              >
                <stop offset="0.869" stopColor="#363BFC" />
                <stop offset="1" stopColor="#242CA9" />
              </radialGradient>
            </defs>
          </svg>
        </a>
      </div>

    </div>

  );
}

export default About;