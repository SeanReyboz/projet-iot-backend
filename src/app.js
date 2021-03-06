const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv/config");

// Initialisation du serveur local
const app = express();

// Middleware pour parser le json contenu dans le body
app.use(bodyParser.json());
app.use(cors());

// Connexion à la base de données mongodb
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Import des différentes routes
const helloRoute = require("./routes/hello");
const accountsRoute = require("./routes/accounts");
const seanceRoute = require("./routes/seance");
const statsRoute = require("./routes/statistics");

// Initialisation des routes

app.use("/", helloRoute);
app.use("/accounts", accountsRoute);
app.use("/seances", seanceRoute);
app.use("/stats", statsRoute);

// Démarrer le serveur
app.listen(process.env.PORT, () => {
  console.log(`App running on: http://localhost:${process.env.PORT}`);
});
