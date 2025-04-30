import './AdminPage.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Composant principal de la page d'administration
const AdminPage = () => {
    // État pour suivre l'onglet actif
    const [activeTab, setActiveTab] = useState('users');

    // État pour les erreurs
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // État pour stocker les données de chaque table
    const [users, setUsers] = useState([]);
    // const [missions, setMissions] = useState([]);
    const [difficultes, setDifficultes] = useState([]);
    const [palliers, setPalliers] = useState([]);
    const [classes, setClasses] = useState([]);

    // État pour le formulaire d'édition/création
    const [formData, setFormData] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [showForm, setShowForm] = useState(false);

    // État pour gérer le téléchargement de fichiers (pour l'avatar)
    const [selectedFile, setSelectedFile] = useState(null);

    // État pour le contrôle de la sidebar sur mobile
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const navigate = useNavigate();

    // Base URL de l'API
    const API_BASE_URL = 'http://localhost:5000/api';

    // Mappage des onglets vers les chemins d'API corrects
    const getApiPath = (tab) => {
        const apiPaths = {
            'users': 'account/users',
            //'missions': 'mission',
            'difficultes': 'difficulty',
            'palliers': 'palliers',
            'classes': 'class'
        };
        return apiPaths[tab] || tab;
    };

    useEffect(() => {
        // Vérifier si l'utilisateur est authentifié
        const token = localStorage.getItem('authToken');
        if (!token) {
            // Rediriger vers la page de connexion si pas de token
            navigate('/login');
            return;
        }

        // Réinitialiser l'erreur et mettre loading à true
        setError(null);
        setLoading(true);

        fetchData();
    }, [activeTab, navigate]);

    const fetchData = async () => {
        try {
            // Récupérer le token depuis le localStorage
            const token = localStorage.getItem('authToken');
            if (!token) {
                throw new Error('Token d\'authentification non trouvé');
            }

            // Configurer les en-têtes avec le token
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                withCredentials: true
            };

            const apiPath = getApiPath(activeTab);
            let url = `${API_BASE_URL}/${apiPath}`;

            if (activeTab === 'classes') {
                url += '/readAll';
            }

            console.log(`Tentative de récupération des données depuis ${url}`);
            const res = await axios.get(url, config);
            console.log(`Données récupérées avec succès:`, res.data);

            switch (activeTab) {
                case 'users':
                    setUsers(res.data);
                    break;
                //  case 'missions':
                //    setMissions(res.data);
                //      break;
                case 'difficultes':
                    setDifficultes(res.data);
                    break;
                case 'palliers':
                    setPalliers(res.data);
                    break;
                case 'classes':
                    setClasses(res.data);
                    break;
                default:
                    break;
            }
            setLoading(false);
        } catch (err) {
            console.error(`Erreur chargement ${activeTab}:`, err);
            setLoading(false);

            // Afficher l'erreur
            if (err.response) {
                // Le serveur a répondu avec un code d'erreur
                if (err.response.status === 404) {
                    setError(`La ressource ${activeTab} est introuvable sur le serveur (404)`);
                } else if (err.response.status === 401 || err.response.status === 403) {
                    setError(`Non autorisé. Veuillez vous reconnecter (${err.response.status})`);

                    // Attendre 3 secondes avant de rediriger
                    setTimeout(() => {
                        localStorage.removeItem('authToken');
                        navigate('/login');
                    }, 3000);
                } else {
                    setError(`Une erreur est survenue: ${err.response.data.message || err.response.statusText}`);
                }
            } else if (err.request) {
                // La requête a été faite mais pas de réponse
                setError("Le serveur ne répond pas. Vérifiez que votre backend est en cours d'exécution.");
            } else {
                // Erreur lors de la création de la requête
                setError(`Erreur: ${err.message}`);
            }
        }
    };

    // Gérer le changement d'onglet
    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setShowForm(false);
        setIsEditing(false);
        setError(null);
    };

    // Gérer les changements dans le formulaire
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Gérer le changement de fichier (pour l'avatar)
    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    // Fonction pour gérer l'édition d'un élément
    const handleEdit = (item) => {
        setFormData(item);
        setIsEditing(true);
        setShowForm(true);
        setSelectedFile(null); // Réinitialiser le fichier sélectionné
    };

    // Fonction pour gérer la création d'un nouvel élément
    const handleCreate = () => {
        setFormData({});
        setIsEditing(false);
        setShowForm(true);
        setSelectedFile(null); // Réinitialiser le fichier sélectionné
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            // Récupérer le token depuis le localStorage
            const token = localStorage.getItem('authToken');
            if (!token) {
                throw new Error('Token d\'authentification non trouvé');
            }

            // Configurer les en-têtes avec le token
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            };

            let result;

            if (activeTab === 'users') {
                // Traitement spécial pour les utilisateurs selon le backend
                if (isEditing) {
                    // Pour la mise à jour d'un utilisateur par l'admin
                    const userData = { ...formData };

                    if (selectedFile) {
                        // Si un fichier est sélectionné, utiliser FormData
                        const formDataObj = new FormData();
                        formDataObj.append('datas', JSON.stringify(userData));
                        formDataObj.append('avatar', selectedFile);

                        config.headers['Content-Type'] = 'multipart/form-data';
                        result = await axios.put(`${API_BASE_URL}/admin/users/${formData.id}`, formDataObj, config);
                    } else {
                        // Si pas de fichier, envoyer directement le JSON
                        result = await axios.put(`${API_BASE_URL}/admin/users/${formData.id}`, { datas: JSON.stringify(userData) }, config);
                    }
                } else {
                    // Pour la création d'un utilisateur par l'admin
                    const userData = { ...formData };

                    if (selectedFile) {
                        // Si un fichier est sélectionné, utiliser FormData
                        const formDataObj = new FormData();
                        formDataObj.append('datas', JSON.stringify(userData));
                        formDataObj.append('avatar', selectedFile);

                        config.headers['Content-Type'] = 'multipart/form-data';
                        result = await axios.post(`${API_BASE_URL}/admin/users`, formDataObj, config);
                    } else {
                        // Si pas de fichier, envoyer directement le JSON
                        result = await axios.post(`${API_BASE_URL}/admin/users`, { datas: JSON.stringify(userData) }, config);
                    }
                }
            } else {
                // Pour les autres types de données, utiliser le code existant
                const apiPath = getApiPath(activeTab);

                if (isEditing) {
                    result = await axios.put(`${API_BASE_URL}/${apiPath}/${formData.id}`, formData, config);
                } else {
                    result = await axios.post(`${API_BASE_URL}/${apiPath}`, formData, config);
                }
            }

            console.log('Réponse du serveur:', result.data);
            fetchData(); // Recharge les données
            setShowForm(false);
        } catch (err) {
            console.error("Erreur lors de la soumission :", err);

            // Afficher l'erreur
            if (err.response) {
                if (err.response.status === 401 || err.response.status === 403) {
                    setError(`Non autorisé. Veuillez vous reconnecter (${err.response.status})`);

                    // Attendre 3 secondes avant de rediriger
                    setTimeout(() => {
                        localStorage.removeItem('authToken');
                        navigate('/login');
                    }, 3000);
                } else {
                    setError(`Erreur: ${err.response.data.message || err.response.statusText}`);
                }
            } else if (err.request) {
                setError("Le serveur ne répond pas. Vérifiez que votre backend est en cours d'exécution.");
            } else {
                setError(`Erreur: ${err.message}`);
            }
        }
    };

    const handleDelete = async (id) => {
        if (!confirm(`Êtes-vous sûr de vouloir supprimer cet élément ?`)) {
            return;
        }

        setError(null);

        try {
            // Récupérer le token depuis le localStorage
            const token = localStorage.getItem('authToken');
            if (!token) {
                throw new Error('Token d\'authentification non trouvé');
            }

            // Configurer les en-têtes avec le token
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };

            let result;

            if (activeTab === 'users') {
                // Utiliser la route spécifique pour supprimer un utilisateur en tant qu'admin
                result = await axios.delete(`${API_BASE_URL}/admin/users/${id}`, config);
            } else {
                const apiPath = getApiPath(activeTab);
                result = await axios.delete(`${API_BASE_URL}/${apiPath}/${id}`, config);
            }

            console.log('Suppression réussie:', result.data);
            fetchData();
        } catch (err) {
            console.error("Erreur suppression :", err);

            // Afficher l'erreur
            if (err.response) {
                if (err.response.status === 401 || err.response.status === 403) {
                    setError(`Non autorisé. Veuillez vous reconnecter (${err.response.status})`);

                    // Attendre 3 secondes avant de rediriger
                    setTimeout(() => {
                        localStorage.removeItem('authToken');
                        navigate('/login');
                    }, 3000);
                } else {
                    setError(`Erreur: ${err.response.data.message || err.response.statusText}`);
                }
            } else if (err.request) {
                setError("Le serveur ne répond pas. Vérifiez que votre backend est en cours d'exécution.");
            } else {
                setError(`Erreur: ${err.message}`);
            }
        }
    };

    // Fonction pour se déconnecter
    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/login');
    };

    // Basculer l'affichage du sidebar sur mobile
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Rendu des champs du formulaire selon l'onglet actif
    const renderFormFields = () => {
        switch (activeTab) {
            case 'users':
                return (
                    <>
                        <div className="form-group">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email || ''}
                                onChange={handleFormChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Nom d'utilisateur</label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username || ''}
                                onChange={handleFormChange}
                                className="form-control"
                                required
                            />
                            <small className="form-text">
                                3 à 15 caractères, au moins une lettre, peut contenir chiffres et tirets
                            </small>
                        </div>
                        {!isEditing && (
                            <div className="form-group">
                                <label className="form-label">Mot de passe</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password || ''}
                                    onChange={handleFormChange}
                                    className="form-control"
                                    required={!isEditing}
                                />
                                <small className="form-text">
                                    12 caractères min, majuscules, minuscules, chiffres et caractères spéciaux
                                </small>
                            </div>
                        )}
                        {isEditing && (
                            <div className="form-group">
                                <label className="form-label">Mot de passe (laisser vide pour ne pas modifier)</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password || ''}
                                    onChange={handleFormChange}
                                    className="form-control"
                                />
                                <small className="form-text">
                                    12 caractères min, majuscules, minuscules, chiffres et caractères spéciaux
                                </small>
                            </div>
                        )}
                        <div className="form-group">
                            <label className="form-label">Avatar</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="form-control"
                            />
                            {formData.avatar && (
                                <div className="avatar-preview">
                                    <img
                                        src={formData.avatar}
                                        alt="Avatar actuel"
                                        style={{width: '100px', height: '100px', objectFit: 'cover', marginTop: '10px'}}
                                    />
                                </div>
                            )}
                        </div>
                        <div className="form-group">
                            <label className="form-label">Rôle</label>
                            <select
                                name="role"
                                value={formData.role || 'User'}
                                onChange={handleFormChange}
                                className="form-control"
                            >
                                <option value="USER">Utilisateur</option>
                                <option value="Admin">Administrateur</option>
                                <option value="SuperAdmin">Super Administrateur</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Abonnement</label>
                            <select
                                name="abonnement"
                                value={formData.abonnement || 'FREE'}
                                onChange={handleFormChange}
                                className="form-control"
                            >
                                <option value="FREE">Gratuit</option>
                                <option value="PREMIUM">Premium</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Expérience</label>
                            <select
                                name="experience"
                                value={formData.experience || ''}
                                onChange={handleFormChange}
                                className="form-control"
                            >
                                <option value="">Sélectionner un niveau</option>
                                <option value="BEGINNER">Débutant</option>
                                <option value="INTERMEDIATE">Intermédiaire</option>
                                <option value="EXPERT">Expert</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Points</label>
                            <input
                                type="number"
                                name="points"
                                value={formData.points || 100}
                                onChange={handleFormChange}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Poids (kg)</label>
                            <input
                                type="number"
                                name="poids"
                                value={formData.poids || ''}
                                onChange={handleFormChange}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Taille (cm)</label>
                            <input
                                type="number"
                                name="taille"
                                value={formData.taille || ''}
                                onChange={handleFormChange}
                                className="form-control"
                            />
                        </div>
                    </>
                );
            /*
        case 'missions':
            // Conserver le code existant
            return (
                <>
                    <div className="form-group">
                        <label className="form-label">Nom</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name || ''}
                            onChange={handleFormChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Description</label>
                        <textarea
                            name="description"
                            value={formData.description || ''}
                            onChange={handleFormChange}
                            className="form-control"
                            rows="3"
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Statut</label>
                        <select
                            name="status"
                            value={formData.status || ''}
                            onChange={handleFormChange}
                            className="form-control"
                        >
                            <option value="">Sélectionner un statut</option>
                            <option value="quest">Quête</option>
                            <option value="penality">Pénalité</option>
                            <option value="exo">Exercice</option>
                            <option value="defi">Défi</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Points</label>
                        <input
                            type="number"
                            name="points"
                            value={formData.points || ''}
                            onChange={handleFormChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Temps limite (minutes)</label>
                        <input
                            type="number"
                            name="limit_time"
                            value={formData.limit_time || ''}
                            onChange={handleFormChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Temps minimum (minutes)</label>
                        <input
                            type="number"
                            name="minimum_time"
                            value={formData.minimum_time || ''}
                            onChange={handleFormChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Difficulté</label>
                        <select
                            name="difficultyId"
                            value={formData.difficultyId || ''}
                            onChange={handleFormChange}
                            className="form-control"
                        >
                            <option value="">Sélectionner une difficulté</option>
                            {difficultes.map(difficulte => (
                                <option key={difficulte.id} value={difficulte.id}>
                                    {difficulte.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </>
            );

             */
            // Le code pour les autres onglets reste inchangé
            case 'difficultes':
                return (
                    <>
                        <div className="form-group">
                            <label className="form-label">Nom</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name || ''}
                                onChange={handleFormChange}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Multiplicateur</label>
                            <input
                                type="number"
                                name="multiplicator"
                                value={formData.multiplicator || ''}
                                onChange={handleFormChange}
                                className="form-control"
                            />
                        </div>
                    </>
                );
            case 'palliers':
                return (
                    <>
                        <div className="form-group">
                            <label className="form-label">Nom</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name || ''}
                                onChange={handleFormChange}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Points requis</label>
                            <input
                                type="number"
                                name="point_pallier"
                                value={formData.point_pallier || ''}
                                onChange={handleFormChange}
                                className="form-control"
                            />
                        </div>
                    </>
                );
            case 'classes':
                return (
                    <>
                        <div className="form-group">
                            <label className="form-label">Nom</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name || ''}
                                onChange={handleFormChange}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Description</label>
                            <textarea
                                name="description"
                                value={formData.description || ''}
                                onChange={handleFormChange}
                                className="form-control"
                                rows="3"
                            ></textarea>
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    // Le code pour renderDataTable reste similaire avec quelques ajustements pour les utilisateurs
    const renderDataTable = () => {
        switch (activeTab) {
            case 'users':
                return (
                    <div className="table-container">
                        {users.length > 0 ? (
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Avatar</th>
                                    <th>Nom d'utilisateur</th>
                                    <th>Email</th>
                                    <th>Rôle</th>
                                    <th>Abonnement</th>
                                    <th>Points</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                {users.map(user => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>
                                            {user.avatar && (
                                                <img
                                                    src={user.avatar}
                                                    alt="Avatar"
                                                    style={{width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover'}}
                                                />
                                            )}
                                        </td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role}</td>
                                        <td>{user.abonnement}</td>
                                        <td>{user.points}</td>
                                        <td className="table-actions">
                                            <button onClick={() => handleEdit(user)} className="action-btn action-btn-edit">
                                                Éditer
                                            </button>
                                            <button onClick={() => handleDelete(user.id)} className="action-btn action-btn-delete">
                                                Supprimer
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        ) : loading ? (
                            <p>Chargement des données...</p>
                        ) : (
                            <p>Aucun utilisateur trouvé.</p>
                        )}
                    </div>
                );
            // Le reste du code pour les autres onglets reste inchangé
            /*
        case 'missions':
            return (
                <div className="table-container">
                    {missions.length > 0 ? (
                        <table className="table">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nom</th>
                                <th>Description</th>
                                <th>Statut</th>
                                <th>Points</th>
                                <th>Temps limite</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {missions.map(mission => (
                                <tr key={mission.id}>
                                    <td>{mission.id}</td>
                                    <td>{mission.name}</td>
                                    <td>{mission.description}</td>
                                    <td>{mission.status}</td>
                                    <td>{mission.points}</td>
                                    <td>{mission.limit_time} min</td>
                                    <td className="table-actions">
                                        <button onClick={() => handleEdit(mission)} className="action-btn action-btn-edit">
                                            Éditer
                                        </button>
                                        <button onClick={() => handleDelete(mission.id)} className="action-btn action-btn-delete">
                                            Supprimer
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    ) : loading ? (
                        <p>Chargement des données...</p>
                    ) : (
                        <p>Aucune mission trouvée.</p>
                    )}
                </div>
            );

             */
            case 'difficultes':
                return (
                    <div className="table-container">
                        {difficultes.length > 0 ? (
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nom</th>
                                    <th>Multiplicateur</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                {difficultes.map(difficulte => (
                                    <tr key={difficulte.id}>
                                        <td>{difficulte.id}</td>
                                        <td>{difficulte.name}</td>
                                        <td>{difficulte.multiplicator}</td>
                                        <td className="table-actions">
                                            <button onClick={() => handleEdit(difficulte)} className="action-btn action-btn-edit">
                                                Éditer
                                            </button>
                                            <button onClick={() => handleDelete(difficulte.id)} className="action-btn action-btn-delete">
                                                Supprimer
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        ) : loading ? (
                            <p>Chargement des données...</p>
                        ) : (
                            <p>Aucune difficulté trouvée.</p>
                        )}
                    </div>
                );
            case 'palliers':
                return (
                    <div className="table-container">
                        {palliers.length > 0 ? (
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nom</th>
                                    <th>Points requis</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                {palliers.map(pallier => (
                                    <tr key={pallier.id}>
                                        <td>{pallier.id}</td>
                                        <td>{pallier.name}</td>
                                        <td>{pallier.point_pallier}</td>
                                        <td className="table-actions">
                                            <button onClick={() => handleEdit(pallier)} className="action-btn action-btn-edit">
                                                Éditer
                                            </button>
                                            <button onClick={() => handleDelete(pallier.id)} className="action-btn action-btn-delete">
                                                Supprimer
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        ) : loading ? (
                            <p>Chargement des données...</p>
                        ) : (
                            <p>Aucun palier trouvé.</p>
                        )}
                    </div>
                );
            case 'classes':
                return (
                    <div className="table-container">
                        {classes.length > 0 ? (
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nom</th>
                                    <th>Description</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                {classes.map(classe => (
                                    <tr key={classe.id}>
                                        <td>{classe.id}</td>
                                        <td>{classe.name}</td>
                                        <td>{classe.description}</td>
                                        <td className="table-actions">
                                            <button onClick={() => handleEdit(classe)} className="action-btn action-btn-edit">
                                                Éditer
                                            </button>
                                            <button onClick={() => handleDelete(classe.id)} className="action-btn action-btn-delete">
                                                Supprimer
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        ) : loading ? (
                            <p>Chargement des données...</p>
                        ) : (
                            <p>Aucune classe trouvée.</p>
                        )}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="admin-container">
            {/* Bouton pour afficher/masquer la sidebar sur mobile */}
            <button
                className={`menu-toggle ${isSidebarOpen ? 'hidden' : ''}`}
                onClick={toggleSidebar}
            >
                ☰
            </button>

            {/* Sidebar */}
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <h1 className="sidebar-title">Tableau de bord</h1>
                </div>
                <nav className="sidebar-nav">
                    <ul>
                        <li className="nav-item">
                            <a
                                onClick={() => handleTabChange('users')}
                                className={`nav-link ${activeTab === 'users' ? 'active' : ''}`}
                            >
                                Utilisateurs
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                onClick={() => handleTabChange('difficultes')}
                                className={`nav-link ${activeTab === 'difficultes' ? 'active' : ''}`}
                            >
                                Difficultés
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                onClick={() => handleTabChange('palliers')}
                                className={`nav-link ${activeTab === 'palliers' ? 'active' : ''}`}
                            >
                                Paliers
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                onClick={() => handleTabChange('classes')}
                                className={`nav-link ${activeTab === 'classes' ? 'active' : ''}`}
                            >
                                Classes
                            </a>
                        </li>
                        <li className="nav-item logout-item">
                            <a
                                onClick={handleLogout}
                                className="nav-link"
                            >
                                Déconnexion
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Contenu principal */}
            <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                <header className="header">
                    <h2 className="header-title">
                        Gestion des {activeTab === 'users' ? 'utilisateurs' :
                        activeTab === 'missions' ? 'missions' :
                            activeTab === 'difficultes' ? 'difficultés' :
                                activeTab === 'palliers' ? 'paliers' : 'classes'}
                    </h2>
                </header>

                <main className="content">
                    {/* Affichage des erreurs */}
                    {error && (
                        <div className="error-message">
                            <p>{error}</p>
                        </div>
                    )}

                    <div className="card">
                        {/* En-tête avec bouton d'ajout */}
                        <div className="card-header">
                            <h3 className="card-title">
                                Liste des {activeTab === 'users' ? 'utilisateurs' :
                                activeTab === 'missions' ? 'missions' :
                                    activeTab === 'difficultes' ? 'difficultés' :
                                        activeTab === 'palliers' ? 'paliers' : 'classes'}
                            </h3>
                            <button
                                onClick={handleCreate}
                                className="btn btn-primary"
                            >
                                Ajouter
                            </button>
                        </div>

                        <div className="card-body">
                            {/* Formulaire d'édition/création */}
                            {showForm && (
                                <div className="form-card">
                                    <h4 className="card-title">
                                        {isEditing ? 'Modifier' : 'Ajouter'} un {activeTab === 'users' ? 'utilisateur' :
                                        activeTab === 'missions' ? 'une mission' :
                                            activeTab === 'difficultes' ? 'une difficulté' :
                                                activeTab === 'palliers' ? 'un palier' : 'une classe'}
                                    </h4>
                                    <form onSubmit={handleSubmit}>
                                        {renderFormFields()}
                                        <div className="form-actions">
                                            <button
                                                type="button"
                                                onClick={() => setShowForm(false)}
                                                className="btn btn-secondary"
                                            >
                                                Annuler
                                            </button>
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                            >
                                                {isEditing ? 'Mettre à jour' : 'Créer'}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            )}

                            {/* Tableau des données */}
                            {renderDataTable()}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminPage;