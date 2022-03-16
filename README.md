# Projet IoT - Backend

Backend de projet IoT du S4 info.

## ⬇️ Installation du projet

Cloner le repo

```bash
git clone https://github.com/SeanReyboz/projet-iot-backend.git
```

Installer les dépendances

```bash
cd projet-iot-backend
yarn install
```

## 🌳 Structure du projet

```bash
.
└── src
    ├── controllers
    ├── models
    ├── routes
    └── utils
```

## 🔑 Secrets

Créer le fichier `.env` utilisé pour stocker les secrets de l'application, dont l'URL de connection à mongoDB.

```bash
cp .env.example .env
```

Puis modifier les champs `<DB user>` et `<password>` de la variable MONGO_URI.

```bash
MONGO_URI=mongodb+srv://<DB user>:<password>@cluster0.bkjvh.mongodb.net/projetIOTDatabase?retryWrites=true&w=majority
```

## 🚧 Développement

Pour lancer le serveur de développement

```bash
yarn dev
```

# 🚗 Routes

Le serveur écoute par défaut sur l'adresse <a href="http://localhost:8888" target="_blank">http://localhost:8888</a>.

### Séances

Disponible à l'adress: <a href="http://localhost:8888/seances" target="_blank">http://localhost:8888/seances</a>

| nom    | description                                                   | route                                                                                                   | Méthode |
| ------ | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| -      | Retourne un tableau contenant toutes les séances enregistrées | <a href="http://localhost:8888/seances" target="_blank">http://localhost:8888/seances</a>               | GET     |
| latest | Retourne la dernière séance enregistrée                       | <a href="http://localhost:8888/seances/latest" target="_blank">http://localhost:8888/seances/latest</a> | GET     |

### Statistiques

Les statistiques d'utilisation de l'objet sont disponibles à l'adresse <a href="http://localhost:8888/stats" target="_blank">http://localhost:8888/stats</a>.

Voici la liste des statistiques disponibles:

| nom       | description                                        | route                                                                                                     |
| --------- | -------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| bpm       | Statistiques sur le rythme cardiaque               | <a href="http://localhost:8888/stats/bpm" target="_blank">http://localhost:8888/stats/bpm</a>             |
| pressions | Statistiques sur le nombre de pressions effectuées | <a href="http://localhost:8888/stats/pressions" target="_blank">http://localhost:8888/stats/pressions</a> |
| duration  | Statistiques sur la durée d'utilisation de l'objet | <a href="http://localhost:8888/stats/duration" target="_blank">http://localhost:8888/stats/duration</a>   |
