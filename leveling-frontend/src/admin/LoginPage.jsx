import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Contact.css';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSubmitted(true);

        if (!email || !password) {
            setError('Veuillez remplir tous les champs');
            setSubmitted(false);
            return;
        }

        try {
            console.log('Données envoyées :', { email, password });

            // Appel au backend pour l'authentification
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                identifier: email,  // Changer email en identifier
                password
            });

            // TODO supprimer cette ligne
            console.log('Réponse du serveur :', response.data);

            // Stockage du token dans le localStorage
            localStorage.setItem('authToken', response.data.accessToken);

            // Si l'utilisateur a un rôle admin ou superadmin
            if (response.data.user.role === 'Admin' || response.data.user.role === 'SuperAdmin') {
                // Message de succès
                setTimeout(() => {
                    // Redirection vers la page d'administration
                    navigate('/admin');
                }, 2000);
            } else {
                setError('Vous n\'avez pas les droits d\'accès à cette page');
                setSubmitted(false);
            }
        } catch (err) {
            setSubmitted(false);
            if (err.response) {
                // Erreur renvoyée par le serveur
                console.error('Erreur du serveur :', err.response.data);
                setError(err.response.data.message || 'Identifiants incorrects');
            } else {
                // Erreur de connexion au serveur
                console.error('Erreur de connexion :', err.message);
                setError('Erreur de connexion au serveur');
            }
        }
    };

    return (
        <div className="contact-page">
            <div className="contact-container">
                <h1 className="contact-title">Connexion Admin</h1>
                <p className="contact-subtitle">Connectez-vous à votre compte admin</p>

                {submitted ? (
                    <div className="success-message">
                        <h2>Connexion réussie !</h2>
                        <p>Redirection en cours...</p>
                    </div>
                ) : (
                    <form className="contact-form" onSubmit={handleSubmit}>
                        {error && (
                            <div className="error-message">
                                <p>{error}</p>
                            </div>
                        )}
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Mot de passe"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="submit-button">
                            <span className="button-text">Se connecter</span>
                        </button>
                    </form>
                )}

                <div className="forgot-password">
                    <a href="#">Mot de passe oublié ?</a>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
