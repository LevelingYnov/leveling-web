import './App.css';
import Header from './Header';
import Contact from './Contact';
import Footer from './Footer';

import About from './About';
import LoginPage from './admin/LoginPage';
import AdminPage from './admin/AdminPage';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import MentionLegalPage from './mentionLegales';
import HomePage from './HomePage.jsx';
import Confidentialite from './confidentialite.jsx';

// Layout avec Header et Footer pour les pages publiques
const MainLayout = () => {
    return (
        <>
            <Header />
            <div className="page-content">
                <Outlet /> {/* Ici le contenu des routes enfants sera injecté */}
            </div>
            <Footer />
        </>
    );
};

// Layout sans Header ni Footer pour les pages admin
const AdminLayout = () => {
    return (
        <div className="admin-content">
            <Outlet /> {/* Ici le contenu des routes enfants sera injecté */}
        </div>
    );
};

function App() {
    return (
        <Router>
            <div className="app-container">
                <Routes>
                    {/* Routes avec Header et Footer */}
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/mentions-legales" element={<MentionLegalPage />} />
                        <Route path="/politique-confidentialite" element={<Confidentialite />} />
                    </Route>

                    {/* Routes admin sans Header ni Footer */}
                    <Route element={<AdminLayout />}>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/admin/*" element={<AdminPage />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
