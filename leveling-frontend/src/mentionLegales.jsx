import {useState} from 'react'
import './App.css'

function MentionLegalPage() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>Mentions Légales</h1>
            <p>
                Dernière mise à jour : 20/11/2024
            </p>
            <div className="card">

                <h2>1. Informations légales</h2>
                <p>
                    Conformément aux dispositions des articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la
                    Confiance dans l'Économie Numérique (LCEN), nous informons les utilisateurs et visiteurs du site
                    "à remplir" des informations suivantes :
                </p>
                <h3>Propriétaire du site :</h3>
                <p>
                    Nom de la société :
                    Forme juridique : Entrepreneur individuel
                    Capital social :
                    Adresse du siège social :
                    Numéro d'immatriculation au Registre du Commerce et des Sociétés (RCS) :
                    Numéro de TVA intracommunautaire :
                </p>

                <h2>2. Hébergement du site</h2>
                <h3>Hébergeur du site :</h3>
                <p>
                    Nom de l'hébergeur :
                    Adresse de l'hébergeur :
                    Téléphone :
                    Site web :
                </p>

                <h2>3. Propriété intellectuelle</h2>
                <p>
                    L'ensemble du contenu présent sur le site "à remplir", incluant, de façon non limitative, les graphismes,
                    images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme, sont
                    la propriété exclusive de "à remplir", à l'exception des marques, logos ou contenus appartenant à
                    d'autres sociétés partenaires ou auteurs.

                    Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même
                    partielle, de ces différents éléments est strictement interdite sans l'accord exprès par écrit de
                    "à remplir".

                    Cette représentation ou reproduction, par quelque procédé que ce soit, constitue une contrefaçon
                    sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle. Le
                    non-respect de cette interdiction constitue une contrefaçon pouvant engager la responsabilité civile
                    et pénale du contrefacteur.
                </p>

                <h2>4. Responsabilité</h2>
                <p>
                    Le site "à remplir" s'efforce de fournir une information aussi précise que possible.

                    Toutefois, "à remplir" ne pourra être tenue responsable des omissions, des inexactitudes et des carences
                    dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui
                    fournissent ces informations.

                    L'utilisateur est seul responsable de l'utilisation qu'il fait du contenu du site "à remplir".

                    Tout contenu téléchargé se fait aux risques et périls de l'utilisateur et sous sa seule
                    responsabilité.

                    En conséquence, "à remplir" ne saurait être tenu responsable d'un quelconque dommage subi par
                    l'ordinateur de l'utilisateur ou d'une quelconque perte de données consécutives au téléchargement.
                </p>

                <h2>5. Données personnelles</h2>
                <p>
                    Les informations collectées sur ce site sont destinées à "à remplir".

                    Elles sont exploitées dans le cadre de la gestion des relations avec les clients, la connexion, et
                    la gestion des commandes, ainsi que pour des fins commerciales, de communication ou de statistiques.

                    Ces données sont conservées pour la durée nécessaire aux finalités pour lesquelles elles sont
                    collectées et traitées de manière sécurisée.

                    Les mots de passe sont hachés pour garantir la sécurité de vos informations sensibles.

                    Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée, vous bénéficiez d'un
                    droit d'accès, de rectification et d'opposition aux données vous concernant.

                    Pour exercer ce droit, il vous suffit d'envoyer un mail à l'adresse suivante : dpo@"à remplir".fr.

                    Nous vous informons que vos données ne sont pas partagées avec des tiers, sauf pour des raisons
                    légales ou pour la sous-traitance dans le cadre de l'exécution de nos services, et toujours sous
                    réserve de la protection de ces données.
                </p>

                <h2>6. Liens hypertextes</h2>
                <p>
                    Il est possible de créer un lien vers la page de présentation de ce site sans autorisation expresse
                    de "à remplir".

                    Aucune autorisation ou demande d'information préalable ne peut être exigée par le site à l'égard
                    d'un site qui souhaite établir un lien vers le site de "à remplir".

                    Enfin, pour plus de détails sur la manière dont nous traitons vos données personnelles, nous vous
                    invitons à consulter notre Politique de Confidentialité.
                </p>

                <h2>7. Droit applicable</h2>
                <p>
                    Les présentes conditions du site "à remplir" sont régies par les lois françaises et tout litige ou
                    différend qui pourrait naître de l'interprétation ou de l'exécution de celles-ci sera de la
                    compétence exclusive des tribunaux dont dépend le siège social de "à remplir".
                </p>

            </div>
        </>
    )
}

export default MentionLegalPage