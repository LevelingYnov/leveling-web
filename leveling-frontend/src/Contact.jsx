import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setState] = useState({
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pourriez ajouter la logique d'envoi réel du formulaire
    console.log('Formulaire soumis:', formData);
    // Simuler une soumission réussie
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setState({ email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1 className="contact-title">Nous contacter</h1>
        <p className="contact-subtitle">Une question ou une suggestion ? Contactez-nous</p>

        {submitted ? (
          <div style={{ textAlign: 'center', color: 'white', padding: '20px' }}>
            <h2>Merci pour votre message !</h2>
            <p>Nous vous répondrons dans les plus brefs délais.</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                name="message"
                placeholder="Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              <span className="button-text">Envoyer</span>
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
            </button>
          </form>
        )}
      </div>

    </div>
  );
}

export default Contact;