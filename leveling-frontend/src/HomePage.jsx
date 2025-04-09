// Votre composant FeedbackList
import iosLogo from './assets/mac-os.png';
import qrLogo from './assets/qr-code.svg';
import ctaButton from './assets/button cta.svg';
import ctaButton2 from './assets/button cta2.svg';
import iphoneImg from './assets/iphoneDl.png';
import { useEffect, useRef, useState } from 'react';
import Header from './Header.jsx';
import './Homepage.css';
import axios from 'axios';
import apiUrl from './apiUrl.tsx';
import PropTypes from 'prop-types';
import { Link as ScrollLink } from 'react-scroll';

// eslint-disable-next-line react/prop-types
const FeedbackList = ({ feedback, orientation }) => {
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

        // Détermine le sens de défilement selon l'orientation
        const isHorizontal = orientation === 'droite';

        // Récupère la position dcroll appropriée
        let scrollPosition;
        if (isHorizontal) {
          scrollPosition = containerRef.current.children[newIndex].offsetLeft;
        } else {
          scrollPosition = containerRef.current.children[newIndex].offsetTop;
        }

        // Anime le scroll de manière fluide
        let start = isHorizontal
          ? containerRef.current.scrollLeft
          : containerRef.current.scrollTop;

        const end = scrollPosition;
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
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [currentIndex, feedback, orientation]);

  return (
    <div ref={containerRef} className="feedback-list">
      {/* eslint-disable-next-line react/prop-types */}
      {feedback.map((item) => (
        <div key={item.id} className="feedback feature-card">
          <p>{item.description}</p>
          <p>{item.name}</p>
          <p>{item.stars} / 5</p>
        </div>
      ))}
    </div>
  );
};

function HomePage() {
  const logoWidth = 150;
  const scanMeWidht = 250;

  const getRank = async () => {
    try {
      const res = await axios.get(apiUrl() + '/classement');
      return res.data;
    } catch (e) {
      console.log(e);
    }
  };

  // Déclaration de realDataRank comme state pour pouvoir mettre à jour l'UI
  const [realDataRank, setRealDataRank] = useState([]);

  const feedback = [
    {
      id: 1,
      description:
        "Cette appli a complètement transformé ma routine sportive ! Les missions surprises me poussent à me bouger même quand je n'en ai pas envie. J'adore la pression du compte à rebours, ça me motive vraiment !",
      name: 'Sophie',
      stars: 5,
    },
    {
      id: 2,
      description:
        "Le concept est génial et addictif. J'ai perdu 5kg en 2 mois sans m'en rendre compte. Seul bémol : parfois les missions arrivent à des moments vraiment pas pratiques malgré mes réglages.",
      name: 'Thomas',
      stars: 4,
    },
    {
      id: 3,
      description:
        "L'idée est bonne mais le risque de suppression de compte est un peu stressant. Ça me met trop la pression quand je suis déjà fatigué après le boulot.",
      name: 'Julie',
      stars: 3,
    },
    {
      id: 4,
      description:
        "Version premium vraiment worth it ! Les exercices personnalisés sont super efficaces et j'adore pouvoir customiser mon avatar avec les objets exclusifs.",
      name: 'Maxime',
      stars: 5,
    },
    {
      id: 5,
      description:
        'La compétition avec mes amis me donne une motivation supplémentaire ! Par contre, le système de niveaux pourrait être plus équilibré, on stagne vite après le niveau 15.',
      name: 'Camille',
      stars: 4,
    },
    {
      id: 6,
      description:
        "J'ai découvert que l'option premium résout tous les problèmes de flexibilité ! Maintenant je peux adapter mes missions à mon emploi du temps et l'appli reste fun sans le stress.",
      name: 'Nicolas',
      stars: 4,
    },
    {
      id: 7,
      description:
        "INCROYABLE !!! J'ai jamais réussi à tenir une routine sport avant cette appli. Le fait que mon perso puisse mourir me fait bouger mon corps même quand j'ai la flemme. Meilleure invention ever !",
      name: 'Léa',
      stars: 5,
    },
    {
      id: 8,
      description:
        'Application géniale et vraiment addictive dans le bon sens ! Je me surprends à faire des exercices à des moments inattendus et mes amis ont remarqué ma transformation physique. Recommandé à 100% !',
      name: 'Alexandre',
      stars: 5,
    },
    {
      id: 9,
      description:
        "La progression de la difficulté est bien pensée. Je ne m'ennuie jamais et je vois de vrais résultats physiques. Les défis entre amis sont hyper motivants !",
      name: 'Emma',
      stars: 5,
    },
    {
      id: 10,
      description:
        'Concept brillant et la dernière mise à jour a résolu tous les bugs ! La validation des missions est maintenant fluide et les nouvelles fonctionnalités de suivi de progression sont top.',
      name: 'Hugo',
      stars: 4,
    },
    {
      id: 11,
      description:
        "L'option 'pause maladie' du compte premium m'a sauvé quand j'étais cloué au lit! Merci pour cette fonctionnalité qui respecte nos contraintes tout en gardant la motivation intacte.",
      name: 'Marie',
      stars: 4,
    },
    {
      id: 12,
      description:
        "Le meilleur coach sportif que j'ai jamais eu ! L'effet surprise des missions et la peur de perdre mon perso me font bouger comme jamais. J'ai même converti toute ma famille !",
      name: 'David',
      stars: 5,
    },
    {
      id: 13,
      description:
        "Excellente application qui m'a permis de me remettre sérieusement au sport. Le système de récompenses est addictif et j'adore collectionner les badges de progression !",
      name: 'Laura',
      stars: 4,
    },
    {
      id: 14,
      description:
        "Les missions sont bien équilibrées et la progression est parfaite. Le système de pénalité est juste ce qu'il faut pour me motiver sans me décourager. Meilleure appli fitness que j'ai essayée !",
      name: 'Antoine',
      stars: 5,
    },
    {
      id: 15,
      description:
        "6 mois d'utilisation et je suis devenu accro au sport grâce à cette appli ! La peur de perdre mon perso me fait lever même les jours où je n'ai pas envie. Les défis entre amis sont hilarants !",
      name: 'Sarah',
      stars: 5,
    },
  ];

  /*  const dataRank = [
    { rank: 1, name: 'Frédéric', score: 156, avatar: 'avatar1.jpg' },
    { rank: 2, name: 'Benoit Saint Denis', score: 148, avatar: 'avatar2.jpg' },
    { rank: 3, name: 'Twilight', score: 147, avatar: 'avatar3.jpg' },
    { rank: 4, name: 'Grandingo', score: 139, avatar: 'avatar4.jpg' },
    { rank: 5, name: 'Chef', score: 137, avatar: 'avatar5.jpg' },
    { rank: 6, name: 'Brass', score: 0, avatar: 'avatar6.jpg' },
  ];*/

  const faq = [
    {
      question: 'Comment fonctionnent les missions sportives quotidiennes ?',
      reponse:
        'Chaque jour, vous recevez entre 1 et 5 missions sportives à réaliser à des horaires aléatoires. Ces missions apparaissent uniquement pendant les plages horaires que vous avez définies comme disponibles dans vos paramètres.',
    },
    {
      question: 'Puis-je modifier mes plages horaires de disponibilité ?',
      reponse:
        "Oui, dans la section 'Paramètres' > 'Disponibilités', vous pouvez ajuster vos plages horaires jour par jour. Vos missions n'apparaîtront que pendant ces périodes.",
    },
    {
      question: 'Que se passe-t-il si je rate une mission ?',
      reponse:
        'Si vous ratez une mission, vous perdez des points et recevez une mission de pénalité à accomplir. Attention : si vous perdez tous vos points, votre personnage sera détruit et votre compte supprimé.',
    },
    {
      question: 'Comment fonctionne le système de niveaux ?',
      reponse:
        'En accomplissant des missions, vous gagnez des points qui vous permettent de monter de niveau. Chaque niveau débloque de nouvelles fonctionnalités, des objets de personnalisation et augmente votre statut dans la communauté.',
    },
    {
      question: 'La difficulté des exercices est-elle la même pour tous ?',
      reponse:
        'Non, la difficulté augmente progressivement en fonction de votre niveau et de vos performances. Plus vous réussissez, plus les exercices deviennent challengeants pour garantir une progression constante.',
    },
    {
      question: 'Comment lancer un défi contre un autre utilisateur ?',
      reponse:
        "Dans l'onglet 'Défis', cliquez sur 'Nouveau défi', puis recherchez l'utilisateur que vous souhaitez défier. Sélectionnez le type d'exercice et la durée du défi, puis envoyez votre invitation.",
    },
    {
      question: "Quels sont les avantages de l'abonnement Premium ?",
      reponse:
        "L'abonnement Premium vous donne accès à des exercices personnalisés pour progresser plus rapidement, des objets exclusifs de personnalisation pour votre avatar, et une immunité partielle qui protège votre personnage en cas d'échecs répétés.",
    },
    {
      question: "Comment fonctionne l'immunité du compte Premium ?",
      reponse:
        "L'immunité Premium vous protège contre la suppression de compte en cas de perte totale de points. Elle vous offre une seconde chance et un délai supplémentaire pour récupérer votre niveau, mais cette protection n'est pas illimitée.",
    },
    {
      question: 'Puis-je annuler une mission si je ne suis pas disponible ?',
      reponse:
        'Non, les missions apparaissent uniquement pendant vos plages de disponibilité déclarées. Si vous ne pouvez exceptionnellement pas accomplir une mission, vous subirez les pénalités standard.',
    },
    {
      question: 'Comment savoir quand une nouvelle mission est disponible ?',
      reponse:
        "Vous recevez une notification sur votre téléphone lorsqu'une mission apparaît. Vous pouvez personnaliser ces alertes dans 'Paramètres' > 'Notifications'.",
    },
    {
      question: 'Est-ce que les missions expirent ?',
      reponse:
        "Oui, chaque mission a une durée limitée pendant laquelle vous devez la compléter. Cette durée est clairement indiquée sur l'écran de mission et varie selon le type d'exercice demandé.",
    },
    {
      question: 'Comment récupérer des points après un échec ?',
      reponse:
        'Pour récupérer des points après un échec, vous devez accomplir avec succès les missions de pénalité ainsi que vos missions quotidiennes. Les missions de pénalité sont plus exigeantes mais rapportent plus de points.',
    },
  ];

  useEffect(() => {
    getRank().then((r) => {
      const rankData = [];
      r.forEach((item) => {
        rankData.push({
          name: item.user.username,
          score: item.user.points,
          avatar: item.user.avatar,
        });
      });

      // Tri du tableau par score en ordre décroissant
      rankData.sort((a, b) => b.score - a.score);

      // Ajout du rang à chaque élément
      const rankedData = rankData.map((item, index) => ({
        rank: index + 1, // Pour commencer à 1 au lieu de 0
        name: item.name,
        score: item.score,
        avatar: item.avatar,
      }));

      // Mise à jour du state
      setRealDataRank(rankedData);
    });
  }, []); // E

  return (
    <div>
      <Header />
      <div id="backgroundInsert1">
        <div className="download-application-container ">
          <h1 className={'download-title'}>
            LEVELING : L'AVENTURE FITNESS QUI DÉFIE VOS LIMITES
          </h1>
          <p id="download-section" className={'download-descriptions'}>
            Transformez votre routine sportive en aventure quotidienne !
            Leveling révolutionne votre façon de faire du sport en intégrant des
            défis surprises dans votre journée. Ne vous contentez plus
            d'exercices monotones - relevez des missions à des moments
            inattendus, progressez dans un univers ludique et risquez tout pour
            rester motivé. Êtes-vous prêt à mettre votre discipline à l'épreuve
            ?
          </p>
          <div className={'ios-android-container'}>
            <div className={'qr-code'}>
              <img
                className={'picture'}
                id={'qr-code'}
                src={qrLogo}
                width={logoWidth}
                alt={'QR Code'}
              />
            </div>
            {/*<div className={'ios'}>
              <img
                className={'picture'}
                id={'ios-logo'}
                src={iosLogo}
                alt="Play-store-logo"
                width={logoWidth}
                height={logoHeight}
              />


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


              Google Play
            </div>*/}

            <div className={'download'}>
              <ScrollTarget id="download-section" className="download">
                <div className="scanMe">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="256"
                    height="38"
                    viewBox="0 0 256 38"
                    fill="black"
                  >
                    <path d="M20.5 0H255.5L235 38H0L20.5 0Z" fill="#2E33C8" />
                    <text
                      x="128"
                      y="24"
                      textAnchor="middle"
                      fill="white"
                      fontFamily="Arial"
                      fontSize="14"
                      fontWeight="bold"
                    >
                      Scannez-moi !
                    </text>
                  </svg>
                </div>
              </ScrollTarget>
            </div>
          </div>
        </div>
      </div>

      <div id="backgroundInsert2">
        <div className={'feedback-container'}>
          <div className={'feedback-header'}>
            <h2 className={'feedback-title'}>Nos avis</h2>
            <div className={'feedback-text'}>
              <p>
                Découvrez ce que nos guerriers du fitness ont à dire ! Des
                utilisateurs comme vous partagent comment Leveling a transformé
                leur rapport au sport et leur a permis de dépasser leurs
                limites, un défi à la fois.
              </p>
            </div>
          </div>
          <FeedbackList feedback={feedback} orientation={'droite'} />
        </div>
        <div className={'iphone-container'}>
          <img src={iphoneImg} alt="Iphone" id="iphoneIntegration" />
          <div id="text">
            <h2 className={'feedback-title'}>Découvrez-nous</h2>
            <p>
              Votre entraîneur personnel vous attend... mais pas quand vous
              l'attendez ! Téléchargez Leveling maintenant et plongez dans un
              monde où chaque exercice compte et chaque échec a des
              conséquences.
            </p>
            <div className={'download-button-iphone'}>
              <ScrollLink
                to="download-section"
                smooth={true}
                duration={1000} // Durée en millisecondes
                className="download-button"
              >
                <text className="download-button-text" fill="white">
                  Télécharger l'application
                </text>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="256"
                  height="38"
                  viewBox="0 0 256 38"
                  fill="none"
                >
                  <path
                    d="M20.5 0H255.5L235 38H0L20.5 0Z"
                    fill="transparent"
                    stroke="#FFFFFF" // Bordure blanche
                    strokeWidth="2" // Épaisseur de la bordure
                  />
                </svg>
              </ScrollLink>
            </div>
          </div>
        </div>
        <div className={'rank-container'}>
          <div className={'text'}>
            <h2 className={'feedback-title'}>Classement</h2>
            <div className={'feedback-text'}>
              <p>
                Qui sera le dernier survivant ? Grimpez dans notre classement
                des guerriers les plus disciplinés et montrez à tous que votre
                détermination est inébranlable. La gloire attend ceux qui ne
                renoncent jamais.
              </p>
            </div>
          </div>

          <div className="leaderboard-container">
            <div className="leaderboard">
              {realDataRank.map((entry, index) => (
                <div className="leaderboard-item" key={index}>
                  <div className="rank">#{entry.rank}</div>
                  <img
                    src={iosLogo}
                    width="50"
                    alt={entry.name}
                    className="avatar"
                  />
                  <div className="name">{entry.name}</div>

                  <div className="score-container">
                    <div className="diamond-score">
                      <svg
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                      >
                        <polygon
                          points="50,10 90,50 50,90 10,50"
                          fill="#363BFC"
                          strokeWidth="1"
                        />
                        <text
                          className={'score-text'}
                          x="50"
                          y="55"
                          fontSize="24"
                          fill="white"
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fontStyle="normal"
                          fontWeight="900"
                        >
                          {entry.score}
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={'faq-container'}>
          <div>
            <h2 className={'faq-title'}>FAQ</h2>
            <div className={'faq-text'}>
              <p>
                Questions de survie : tout ce que vous devez savoir pour
                prospérer dans l'univers impitoyable de Leveling, où chaque
                mission réussie vous rapproche de la gloire et chaque échec vous
                pousse vers l'abîme.
              </p>
            </div>
          </div>
          <FAQSection faqItems={faq} />
        </div>
        <script></script>
      </div>
    </div>
  );
}

// Définissez ce composant FAQ séparément
function FAQSection({ faqItems }) {
  // Utilisez un état pour suivre quelle question est ouverte
  // L'état initial est un tableau de false (toutes les questions fermées)
  const [openStates, setOpenStates] = useState(
    Array(faqItems.length).fill(false)
  );

  // Fonction pour basculer l'état d'une question spécifique
  const toggleQuestion = (index) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };

  return (
    <div className={'faq-list'}>
      {faqItems.map((entry, index) => (
        <div className="faq-item" key={index}>
          <div
            className={`faq-question ${openStates[index] ? 'active' : ''}`}
            onClick={() => toggleQuestion(index)}
          >
            {entry.question}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className={openStates[index] ? 'rotate' : ''}
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
          <div
            className="faq-reponse"
            style={{ display: openStates[index] ? 'block' : 'none' }}
          >
            {entry.reponse}
          </div>
        </div>
      ))}
    </div>
  );
}
FAQSection.propTypes = {
  faqItems: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      reponse: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export const ScrollTarget = ({ id, className, children }) => {
  return (
    <div id={id} className={className}>
      {children}
    </div>
  );
};
// Définir les PropTypes
ScrollTarget.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default HomePage;
