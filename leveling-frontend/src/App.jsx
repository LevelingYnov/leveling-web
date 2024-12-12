import './App.css';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MentionLegalPage from './mentionLegales';
import androidLogo from './assets/play-store-logo.png';
import iosLogo from './assets/mac-os.png';

function App() {
  const features = [
    {
      id: 1,
      title: 'Missions Sportives Quotidiennes',
      description:
        "Les utilisateurs reçoivent chaque jour entre 1 et 5 missions sportives (les utilisateurs paramètrent les horaires dans lesquels ils sont disponibles), avec des défis à compléter à des horaires aléatoires. Ces missions offrent un sentiment de variété et d'inattendu, incitant les utilisateurs à rester alertes et motivés.",
    },
    {
      id: 2,
      title: 'Système de Niveaux et de Points',
      description:
        'En réussissant des missions, les utilisateurs accumulent des points, montent de niveau, et gagnent en statut. Cette progression leur permet de se fixer des objectifs clairs et de ressentir une satisfaction liée aux accomplissements.',
    },
    {
      id: 3,
      title: 'Défis entre Utilisateurs',
      description:
        "Les utilisateurs peuvent s'affronter lors de défis d'exercices. Ce mode compétitif donne une dimension sociale, renforçant la motivation via la rivalité amicale.",
    },
    {
      id: 4,
      title: 'Abonnement Premium',
      description:
        "L'abonnement débloque des avantages comme des exercices personnalisés qui permettent de progresser plus rapidement physiquement. Les abonnés bénéficient aussi d'objets de personnalisation et d'une immunité pour leur personnage, renforçant leur investissement dans le jeu.",
    },
    {
      id: 5,
      title: 'Paliers et Difficulté Croissante',
      description:
        'Plus les utilisateurs réussissent des missions, plus la difficulté des exercices augmente. Cela maintient le défi intéressant et adapté au niveau de chaque utilisateur, assurant une progression constante.',
    },
    {
      id: 6,
      title: 'Sanctions et Risques',
      description:
        "En cas d'échec aux missions, des pénalités sont infligées (points en moins et missions de pénalités). Si un utilisateur perd tous ses points, son personnage est détruit et son compte est supprimé, ce qui ajoute une pression et une incitation fortes à maintenir l'engagement.",
    },
  ];

  const logoWidth = 50;
  const logoHeight = 50;

  const feedback = [
    {
      id: 1,
      description: 'Trop bien',
      name: 'Younes',
      stars: 5,
    },
    {
      id: 2,
      description: 'bien',
      name: 'Elias',
      stars: 4,
    },
    {
      id: 3,
      description: 'assez bien',
      name: 'Nabil',
      stars: 3,
    },
    {
      id: 3,
      description: 'assez bien',
      name: 'Nabil',
      stars: 3,
    },
    {
      id: 3,
      description: 'assez bien',
      name: 'Nabil',
      stars: 3,
    },
    {
      id: 3,
      description: 'assez bien',
      name: 'Nabil',
      stars: 3,
    },
    {
      id: 3,
      description: 'assez bien',
      name: 'Nabil',
      stars: 3,
    },
    {
      id: 3,
      description: 'assez bien',
      name: 'Nabil',
      stars: 3,
    },
    {
      id: 3,
      description: 'assez bien',
      name: 'Nabil',
      stars: 3,
    },
    {
      id: 3,
      description: 'assez bien',
      name: 'Nabil',
      stars: 3,
    },
    {
      id: 3,
      description: 'assez bien',
      name: 'Nabil',
      stars: 3,
    },
    {
      id: 3,
      description: 'assez bien',
      name: 'Nabil',
      stars: 3,
    },
    {
      id: 3,
      description: 'assez bien',
      name: 'Nabil',
      stars: 3,
    },
    {
      id: 3,
      description: 'assez bien',
      name: 'Nabil',
      stars: 3,
    },
  ];

  return (
    <Router>
      <div>
        <Header />
        <div className="download-application-container feature-card">
          <h1 className={'download-title'}>Titre H1</h1>
          <p className={'download-descriptions'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            sodales maximus risus, quis congue libero convallis vel. Sed ut
            lorem quis nisl finibus pharetra. Donec dictum lorem vel odio
            efficitur blandit. Maecenas hendrerit ante non lobortis condimentum.
            Vivamus sodales tellus id tincidunt lacinia. Quisque nec tellus nec
            massa ultrices consectetur id vel ante. Duis nec nisi mollis,
            efficitur lorem pharetra, sagittis sapien. Integer eu tellus eget
            purus ullamcorper efficitur. Sed ac lacus placerat, cursus libero
            ac, elementum nunc. Proin at lectus id metus suscipit dictum sit
            amet a urna. Duis bibendum mauris eu turpis viverra egestas.
            Pellentesque semper arcu eu rhoncus mattis. Nunc sit amet urna
            augue. Nulla nunc quam, tempor id turpis eu, vehicula sodales ante.
            Maecenas ultricies ullamcorper luctus. Suspendisse sit amet semper
            justo.
          </p>
          <div className={'ios-android-container'}>
            <div className={'ios'}>
              <img
                className={'picture'}
                id={'ios-logo'}
                src={iosLogo}
                alt="Play-store-logo"
                width={logoWidth}
                height={logoHeight}
              />
              {/*
               */}
              App Store
            </div>
            <div className={'android'}>
              <img
                className={'picture'}
                id={'android-logo'}
                src={androidLogo}
                alt="Play-store-logo"
                width={logoWidth}
                height={logoHeight}
              />
              {/*
               */}
              Google Play
            </div>
          </div>
          <div className={'download-container'}>
            <div className={'download'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="256"
                height="38"
                viewBox="0 0 256 38"
                fill="none"
              >
                <path
                  d="M20.5 0H255.5L235 38H0L20.5 0Z"
                  fill="url(#paint0_angular_179_4)"
                />
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
              download
            </div>
          </div>
        </div>

        <div className={'feedback-container'}>
          <div className={'feedback-header'}>
            <h2 className={'feedback-title'}>Titre H2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              sodales maximus risus, quis congue libero convallis vel. Sed ut
              lorem quis nisl finibus pharetra. Donec dictum lorem vel odio
              efficitur blandit. Maecenas hendrerit ante non lobortis
              condimentum. Vivamus sodales tellus id tincidunt lacinia. Quisque
              nec tellus nec massa ultrices consectetur id vel ante. Duis nec
              nisi mollis, efficitur lorem pharetra, sagittis sapien. Integer eu
              tellus eget purus ullamcorper efficitur. Sed ac lacus placerat,
              cursus libero ac, elementum nunc. Proin at lectus id metus
              suscipit dictum sit amet a urna. Duis bibendum mauris eu turpis
              viverra egestas. Pellentesque semper arcu eu rhoncus mattis. Nunc
              sit amet urna augue. Nulla nunc quam, tempor id turpis eu,
              vehicula sodales ante. Maecenas ultricies ullamcorper luctus.
              Suspendisse sit amet semper justo.*
            </p>
          </div>

          <div className={'feedback-list'}>
            {feedback.map((feedback) => (
              <div key={feedback.id} className="feedback feature-card">
                <p>{feedback.description}</p>
                <p>{feedback.name}</p>
                <p>{feedback.stars}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="fonctionnalites-container">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        <Footer />

        <Routes>
          <Route path="/mentions-legales" element={<MentionLegalPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
