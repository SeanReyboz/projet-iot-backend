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
