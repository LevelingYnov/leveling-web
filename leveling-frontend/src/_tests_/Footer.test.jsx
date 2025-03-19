import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, test, expect } from 'vitest';
import Footer from '../Footer';
import { vi } from 'vitest';

// Variable pour stocker la valeur du pathname pour les tests
let currentPathname = '/';

// Mock react-router-dom
vi.mock('react-router-dom', async (importOriginal) => {
    const actual = await importOriginal();
    return {
        ...actual,
        useLocation: () => ({ pathname: currentPathname })
    };
});

// Mock des assets
vi.mock('./assets/logo.svg', () => ({
    default: 'logo-mock'
}));
vi.mock('./assets/footer/discord.svg', () => ({
    default: 'discord-mock'
}));
vi.mock('./assets/footer/youtube.svg', () => ({
    default: 'youtube-mock'
}));
vi.mock('./assets/footer/x.svg', () => ({
    default: 'x-mock'
}));
vi.mock('./assets/footer/instagram.svg', () => ({
    default: 'instagram-mock'
}));

describe('Footer Component', () => {
    // Fonction pour rendre le composant
    const renderFooter = (pathname = '/') => {
        // Mise à jour du pathname pour le test
        currentPathname = pathname;

        return render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        );
    };

    test('affiche le logo et les icônes de réseaux sociaux', () => {
        renderFooter();

        // Vérification du logo
        expect(screen.getByAltText('Leveling')).toBeInTheDocument();

        // Vérification des icônes de réseaux sociaux
        expect(screen.getByAltText('Discord')).toBeInTheDocument();
        expect(screen.getByAltText('YouTube')).toBeInTheDocument();
        expect(screen.getByAltText('Twitter')).toBeInTheDocument();
        expect(screen.getByAltText('Instagram')).toBeInTheDocument();
    });

    test('affiche les liens de politique de confidentialité et conditions générales', () => {
        renderFooter();

        // Vérification des liens de bas de page
        expect(screen.getByText('Politique de confidentialité')).toBeInTheDocument();
        expect(screen.getByText('Conditions générales')).toBeInTheDocument();
    });

    test('affiche le copyright', () => {
        renderFooter();

        // Vérification du texte de copyright
        expect(screen.getByText(/LEVELING Inc\. © 2024\. All rights reserved/)).toBeInTheDocument();
    });

    test('applique la classe de fond correcte selon la route', () => {
        // Test pour la page d'accueil
        const { container, unmount } = renderFooter('/');
        expect(container.querySelector('footer')).toHaveClass('footer-background-home');
        unmount();

        // Test pour la page about
        const { container: aboutContainer, unmount: aboutUnmount } = renderFooter('/about');
        expect(aboutContainer.querySelector('footer')).toHaveClass('footer-background-about');
        aboutUnmount();

        // Test pour la page contact
        const { container: contactContainer, unmount: contactUnmount } = renderFooter('/contact');
        expect(contactContainer.querySelector('footer')).toHaveClass('footer-background-contact');
        contactUnmount();

        // Test pour la page mentions légales
        const { container: mentionsContainer } = renderFooter('/mentions-legales');
        expect(mentionsContainer.querySelector('footer')).toHaveClass('footer-background-mentions');
    });
});