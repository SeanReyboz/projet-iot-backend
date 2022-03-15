const express = require("express");
const router = express.Router();

// Import des différents modèles à utiliser
const SeanceModel = require("../models/Seance");
const Seance = require("../controllers/seance");

// Voir toutes les séances
router.get("/", async (req, res) => {
  try {
    const allSeances = await SeanceModel.find({});
    console.log(allSeances);
    res.status(200).json(allSeances);
  } catch (error) {
    res.status(500).json({ error });
  }
});

// Récupérer une séance gràce à son id
router.get("/:id", async (req, res) => {
  try {
    const seance = await SeanceModel.findOne(req.params.id);
    res.status(200).json(seance);
  } catch (error) {
    res.status(500).json({ error });
  }
});

// Ajouter une nouvelle séance
router.post("/", (req, res) => {
  console.log(req.body);

  if (!req.body.duration) {
    res.status(400).json({
      message: "Missing required field!",
      details: "The 'duration' field is required.",
    });
  }

  if (!req.body.pressions) {
    res.status(400).json({
      message: "Missing required field!",
      details: "The 'pressions' field is required.",
    });
  }

  const { duration, bpm, pressions } = req.body;

  // Créer un nouvelle séance à partir des données reçues
  const nouvelleSeance = new Seance(bpm, duration, pressions);

  nouvelleSeance
    .save()
    .then(() =>
      res.status(200).json({
        message: "Nouvelle séance sauvegardée",
        data: nouvelleSeance.dump(),
      })
    )
    .catch((err) =>
      res.json({
        message:
          "Une erreur est survenue lors de l'enregistrement de la séance",
        errorMessage: err,
      })
    );
});

module.exports = router;
