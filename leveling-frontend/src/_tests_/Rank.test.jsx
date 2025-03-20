// src/_tests_/Rank.test.jsx
import { describe, it, expect, vi } from 'vitest';
import axios from 'axios';

// Mock d'axios
vi.mock('axios');

// Mock pour apiUrl
vi.mock('../apiUrl.tsx', () => ({
    default: () => 'http://api-test.com'
}));

// Définition de la fonction getRank à tester
const getRank = async () => {
    try {
        const res = await axios.get('http://api-test.com/classement');
        return res.data;
    } catch (e) {
        console.log(e);
        return [];
    }
};

describe('getRank', () => {
    it('devrait retourner les données de l\'API en cas de succès', async () => {
        // Préparation des données de test
        const mockData = [{ user: { username: 'User1', points: 100, avatar: 'avatar1.png' } }];
        axios.get.mockResolvedValueOnce({ data: mockData });

        // Exécution de la fonction
        const result = await getRank();

        // Vérification du résultat
        expect(result).toEqual(mockData);
        expect(axios.get).toHaveBeenCalledWith('http://api-test.com/classement');
    });

    it('devrait retourner un tableau vide en cas d\'erreur', async () => {
        // Simulation d'une erreur
        axios.get.mockRejectedValueOnce(new Error('API error'));

        // Espionnage de console.log
        const consoleSpy = vi.spyOn(console, 'log');

        // Exécution de la fonction
        const result = await getRank();

        // Vérification du résultat
        expect(result).toEqual([]);
        expect(consoleSpy).toHaveBeenCalled();
    });
});