import './App.css';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MentionLegalPage from './mentionLegales';
import androidLogo from './assets/play-store-logo.png';
import iosLogo from './assets/mac-os.png';
import back1 from './assets/background1.png';

function App() {
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
        
        <div className="background-image-container">
          <img src={back1} alt="background" />
        </div>

        <div className="content-wrapper">
          <div className="download-application-container">
            <h1 className="download-title">Titre H1</h1>
            <p className="download-description">
              Lorem ipsum dolor sit amet...
            </p>
            <div className="ios-android-container">
              <div className="ios">
                <img
                  className="picture"
                  id="ios-logo"
                  src={iosLogo}
                  alt="App Store logo"
                  width={logoWidth}
                  height={logoHeight}
                />
                App Store
              </div>
              <div className="android">
                <img
                  className="picture"
                  id="android-logo"
                  src={androidLogo}
                  alt="Play Store logo"
                  width={logoWidth}
                  height={logoHeight}
                />
                Google Play
              </div>
            </div>
            <div className="download-container">
              <div className="download">
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

          <div className="feedback-container">
            <div className="feedback-header">
              <h2 className="feedback-title">Titre H2</h2>
              <p>Lorem ipsum dolor sit amet...</p>
            </div>

            <div className="feedback-list">
              {feedback.map((feedback) => (
                <div key={feedback.id} className="feedback">
                  <p>{feedback.description}</p>
                  <p>{feedback.name}</p>
                  <p>{feedback.stars}</p>
                </div>
              ))}
            </div>
          </div>
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