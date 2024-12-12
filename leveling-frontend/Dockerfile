# Utiliser une image Node comme base
FROM node:20.16.0 AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers du projet
COPY . .

# Construire l'application pour la production
RUN npm run build

# Exposer le port 8080 (aligné avec la commande de prévisualisation)
EXPOSE 8080

# Démarrer l'application en mode preview sur le port 8080
CMD ["npm", "run", "preview", "--", "--port", "8080", "--host", "0.0.0.0"]