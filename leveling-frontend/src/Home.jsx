import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import MentionLegalPage from './mentionLegales';

function HomePage() {
  const features = [
    {
        title: "Missions Sportives Quotidiennes",
        description: "Les utilisateurs reçoivent chaque jour entre 1 et 5 missions sportives (les utilisateurs paramètrent les horaires dans lesquels ils sont disponibles), avec des défis à compléter à des horaires aléatoires. Ces missions offrent un sentiment de variété et d'inattendu, incitant les utilisateurs à rester alertes et motivés."
      },
      {
        title: "Système de Niveaux et de Points",
        description: "En réussissant des missions, les utilisateurs accumulent des points, montent de niveau, et gagnent en statut. Cette progression leur permet de se fixer des objectifs clairs et de ressentir une satisfaction liée aux accomplissements."
      },
      {
        title: "Défis entre Utilisateurs",
        description: "Les utilisateurs peuvent s'affronter lors de défis d'exercices. Ce mode compétitif donne une dimension sociale, renforçant la motivation via la rivalité amicale."
      },
      {
        title: "Abonnement Premium",
        description: "L'abonnement débloque des avantages comme des exercices personnalisés qui permettent de progresser plus rapidement physiquement. Les abonnés bénéficient aussi d'objets de personnalisation et d'une immunité pour leur personnage, renforçant leur investissement dans le jeu."
      },
      {
        title: "Paliers et Difficulté Croissante",
        description: "Plus les utilisateurs réussissent des missions, plus la difficulté des exercices augmente. Cela maintient le défi intéressant et adapté au niveau de chaque utilisateur, assurant une progression constante."
      },
      {
        title: "Sanctions et Risques",
        description: "En cas d'échec aux missions, des pénalités sont infligées (points en moins et missions de pénalités). Si un utilisateur perd tous ses points, son personnage est détruit et son compte est supprimé, ce qui ajoute une pression et une incitation fortes à maintenir l'engagement."
      }
    ];
    return (
        <div>
          <Header />
          <div className="fonctionnalites-container">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <h2>{feature.title}</h2>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
          <Link to="/mentions-legales" className="mentions-legales-link">
            Mentions Légales
          </Link>
          <Footer />
        </div>
      );
    }
    