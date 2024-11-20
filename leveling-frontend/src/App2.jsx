import {useState} from 'react'
import './App.css'

function RGPDPage() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>Mentions Légales & RGPD</h1>
            <div className="card">
                {/* Section des mentions légales */}
                <section id="mentions-legales">
                    <h2>Mentions Légales</h2>
                    <p>
                        <strong>Nom :</strong> Exemple SARL
                    </p>
                    <p>
                        <strong>Siège :</strong> 123 rue Exemple, 75001 Paris
                    </p>
                    <p>
                        <strong>Hébergeur :</strong> OVH, 2 rue Kellermann, 59100 Roubaix
                    </p>
                </section>

                {/* Section de la politique de confidentialité */}
                <section id="politique-confidentialite">
                    <h2>Politique de Confidentialité</h2>
                    <p>
                        Nous collectons les données suivantes : nom, adresse e-mail...
                    </p>
                    <p>
                        <strong>Finalité :</strong> assurer le suivi client, personnalisation de l'expérience
                        utilisateur...
                    </p>
                    <p>
                        <strong>Vos droits :</strong> vous pouvez demander l'accès, la suppression ou la modification de
                        vos données en contactant notre équipe via l'adresse e-mail ci-dessous.
                    </p>
                    <p>
                        <strong>Contact :</strong> privacy@example.com
                    </p>
                </section>
            </div>
            <p className="read-the-docs">
                Cliquez sur les logos pour en savoir plus sur les technologies utilisées
            </p>
        </>
    )
}

export default RGPDPage