import './App.css';
import Header from './Header';
import Contact from './Contact';
import Footer from './Footer';

import About from './About';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import MentionLegalPage from './mentionLegales';
import androidLogo from './assets/play-store-logo.png';
import iosLogo from './assets/mac-os.png';
import iphoneImg from './assets/iphoneDl.png';
import { useEffect, useRef, useState } from 'react';

// Votre composant FeedbackList
// eslint-disable-next-line react/prop-types
const FeedbackList = ({ feedback }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const interval = setInterval(() => {
        // eslint-disable-next-line react/prop-types
        const totalItems = feedback.length;
        if (totalItems === 0) return;

        const newIndex = (currentIndex + 1) % totalItems;
        setCurrentIndex(newIndex);

        // Récupère la largeur ou hauteur totale selon l'orientation
        const isHorizontal =
          containerRef.current.scrollWidth > containerRef.current.clientHeight;
        const scrollPosition = isHorizontal
          ? containerRef.current.children[newIndex].offsetLeft
          : containerRef.current.children[newIndex].offsetTop;

        // Anime le scroll de manière fluide
        let start =
          containerRef.current.scrollTop || containerRef.current.scrollLeft;
        let end = scrollPosition;
        const duration = 1000; // Durée de l'animation (1000ms = 1s)
        let startTime = performance.now();

        function animate() {
          let elapsed = performance.now() - startTime;
          let fraction = elapsed / duration;

          if (fraction > 1) {
            fraction = 1;
          }

          if (isHorizontal) {
            containerRef.current.scrollLeft = start + (end - start) * fraction;
          } else {
            containerRef.current.scrollTop = start + (end - start) * fraction;
          }

          if (elapsed < duration) {
            requestAnimationFrame(animate);
          }
        }

        requestAnimationFrame(animate);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [currentIndex, feedback]);

  return (
    <div ref={containerRef} className="feedback-list">
      {/* eslint-disable-next-line react/prop-types */}
      {feedback.map((item) => (
        <div key={item.id} className="feedback feature-card">
          <p>{item.description}</p>
          <p>{item.name}</p>
          <p>{item.stars}</p>
        </div>
      ))}
    </div>
  );
};



function HomePage() {
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

  const dataRank = [
    { rank: 1, name: 'Frédéric', score: 156, avatar: 'avatar1.jpg' },
    { rank: 2, name: 'Benoit Saint Denis', score: 148, avatar: 'avatar2.jpg' },
    { rank: 3, name: 'Twilight', score: 147, avatar: 'avatar3.jpg' },
    { rank: 4, name: 'Grandingo', score: 139, avatar: 'avatar4.jpg' },
    { rank: 5, name: 'Chef', score: 137, avatar: 'avatar5.jpg' },
    { rank: 6, name: 'Brass', score: 0, avatar: 'avatar6.jpg' },
  ];

  const faq = [
    {
      question: 'Comment percer sur youtube ?',
      reponse: 'Fais plus de vidéos',
    },
    {
      question: 'Comment percer sur youtube ?',
      reponse: 'Fais plus de vidéos',
    },
    {
      question: 'Comment percer sur youtube ?',
      reponse: 'Fais plus de vidéos',
    },
    {
      question: 'Comment percer sur youtube ?',
      reponse: 'Fais plus de vidéos',
    },
  ];

  return (
  
      <div>
        <Header />
        <div id="backgroundInsert1">
          <div className="download-application-container ">
            <h1 className={'download-title'}>Titre H1</h1>
            <p className={'download-descriptions'}>
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
              Suspendisse sit amet semper justo.
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
        </div>

        <div id="backgroundInsert2">
          <div className={'feedback-container'}>
            <div className={'feedback-header'}>
              <h2 className={'feedback-title'}>Titre H2</h2>
              <div className={'feedback-text'}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  sodales maximus risus, quis congue libero convallis vel. Sed
                  ut lorem quis nisl finibus pharetra. Donec dictum lorem vel
                  odio efficitur blandit. Maecenas hendrerit ante non lobortis
                  condimentum. Vivamus sodales tellus id tincidunt lacinia.
                  Quisque nec tellus nec massa ultrices consectetur id vel ante.
                  Duis nec nisi mollis, efficitur lorem pharetra, sagittis
                  sapien. Integer eu tellus eget purus ullamcorper efficitur.
                  Sed ac lacus placerat, cursus libero ac, elementum nunc. Proin
                  at lectus id metus suscipit dictum sit amet a urna. Duis
                  bibendum mauris eu turpis viverra egestas. Pellentesque semper
                  arcu eu rhoncus mattis. Nunc sit amet urna augue. Nulla nunc
                  quam, tempor id turpis eu, vehicula sodales ante. Maecenas
                  ultricies ullamcorper luctus. Suspendisse sit amet semper
                  justo.*
                </p>
              </div>
            </div>
            <FeedbackList feedback={feedback} />
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
          <div className={'iphone-container'}>
            <img src={iphoneImg} alt="Iphone" id="iphoneIntegration" />
            <div id="text">
              <h2>titre h2</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                sodales maximus risus, quis congue libero convallis vel. Sed ut
                lorem quis nisl finibus pharetra. Donec dictum lorem vel odio
                efficitur blandit. Maecenas hendrerit ante non lobortis
                condimentum. Vivamus sodales tellus id tincidunt lacinia.
                Quisque nec tellus nec massa ultrices consectetur id vel ante.
                Duis nec nisi mollis, efficitur lorem pharetra, sagittis sapien.
                Integer eu tellus eget purus ullamcorper efficitur. Sed ac lacus
                placerat, cursus libero ac, elementum nunc. Proin at lectus id
                metus suscipit dictum sit amet a urna. Duis bibendum mauris eu
                turpis viverra egestas. Pellentesque semper arcu eu rhoncus
                mattis. Nunc sit amet urna augue. Nulla nunc quam, tempor id
                turpis eu, vehicula sodales ante. Maecenas ultricies ullamcorper
                luctus. Suspendisse sit amet semper justo.*
              </p>
              <div>bouton</div>
            </div>
          </div>
          <div className={'rank-container'}>
            <div className={'text'}>
              <h2 className={'feedback-title'}>Titre h2</h2>
              <div className={'feedback-text'}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  sodales maximus risus, quis congue libero convallis vel. Sed
                  ut lorem quis nisl finibus pharetra. Donec dictum lorem vel
                  odio efficitur blandit. Maecenas hendrerit ante non lobortis
                  condimentum. Vivamus sodales tellus id tincidunt lacinia.
                  Quisque nec tellus nec massa ultrices consectetur id vel ante.
                  Duis nec nisi mollis, efficitur lorem pharetra, sagittis
                  sapien. Integer eu tellus eget purus ullamcorper efficitur.
                  Sed ac lacus placerat, cursus libero ac, elementum nunc. Proin
                  at lectus id metus suscipit dictum sit amet a urna. Duis
                  bibendum mauris eu turpis viverra egestas. Pellentesque semper
                  arcu eu rhoncus mattis. Nunc sit amet urna augue. Nulla nunc
                  quam, tempor id turpis eu, vehicula sodales ante. Maecenas
                  ultricies ullamcorper luctus. Suspendisse sit amet semper
                  justo.*
                </p>
              </div>
            </div>

            <div className="leaderboard-container">
              <div className="leaderboard">
                {dataRank.map((entry, index) => (
                  <div className="leaderboard-item" key={index}>
                    <div className="rank">#{entry.rank}</div>
                    <img
                      src={iosLogo}
                      width="50"
                      alt={entry.name}
                      className="avatar"
                    />
                    <div className="name">{entry.name}</div>
                    <div className="score">{entry.score}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/*<div className={'faq-container'}>
            <div>
              <h2 className={'faq-title'}>FAQ</h2>
              <div className={'faq-text'}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  sodales maximus risus, quis congue libero convallis vel. Sed
                  ut lorem quis nisl finibus pharetra. Donec dictum lorem vel
                  odio efficitur blandit. Maecenas hendrerit ante non lobortis
                  condimentum. Vivamus sodales tellus id tincidunt lacinia.
                </p>
              </div>
              <div className={'faq-content'}>
                <div className={'faq-item'}>
                  <h3>Question 1</h3>
                  <p>Réponse à la question 1 avec du contenu détaillé.</p>
                </div>
                <div className={'faq-item'}>
                  <h3>Question 2</h3>
                  <p>
                    Réponse à la question 2 avec des détails supplémentaires.
                  </p>
                </div>
                <div className={'faq-item'}>
                  <h3>Question 3</h3>
                  <p>Réponse à la question 3 avec encore plus de détails.</p>
                </div>
              </div>
            </div>
          </div>*/}
          <div className={'faq-container'}>
            <div>
              <h2 className={'faq-title'}>FAQ</h2>
              <div className={'faq-text'}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  sodales maximus risus, quis congue libero convallis vel. Sed
                  ut lorem quis nisl finibus pharetra. Donec dictum lorem vel
                  odio efficitur blandit. Maecenas hendrerit ante non lobortis
                  condimentum. Vivamus sodales tellus id tincidunt lacinia.
                </p>
              </div>
            </div>
            <div className={'faq-list'}>
              {faq.map((entry, index) => (
                <div className="faq-item" key={index}>
                  <div className="faq-question">
                    {entry.question}
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <rect
                          x="5.99991"
                          y="2.00024"
                          width="4"
                          height="12"
                          fill="#F0F5FC"
                        />
                        <rect
                          x="14"
                          y="6"
                          width="4"
                          height="12"
                          transform="rotate(90 14 6)"
                          fill="#F0F5FC"
                        />
                      </svg>

    
                    </div>
                  </div>
                  <div className="faq-reponse">{entry.reponse}</div>
                </div>

              ))}
            </div>
          </div>
          <script></script>
        </div>

        <Footer />

      
      </div>
  );
                <div className="footer-spacer"></div>

            </div>

        </>
    );
}

function App() {
    return (
        <Router>
            <div className="app-container">
                <Header/>

                <div className="page-content">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/contact" element={<Contact/>} />
                        <Route path="/about" element={<About/>} />
                        <Route path="/mentions-legales" element={<MentionLegalPage />} />
                    </Routes>
                </div>

                <Footer/>
            </div>
        </Router>
    );
}

export default App;
