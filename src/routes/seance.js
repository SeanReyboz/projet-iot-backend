const express = require("express");
const router = express.Router();

// Import des différents modèles à utiliser
const User = require("../models/User");
const Seance = require("../models/Seance");

// Voir toutes les séances
router.get("/", async (req, res) => {
  try {
    const allSeances = await Seance.findOne();
    res.status(200).json(allSeances);
  } catch (error) {
    res.status(500).json({ error });
  }
});

// Récupérer une séance gràce à son id
router.get("/:id", async (req, res) => {
  try {
    const seance = await Seance.findOne(req.params.id);
    res.status(200).json(seance);
  } catch (error) {
    res.status(500).json({ error });
  }
});

// Ajouter une nouvelle séance
router.post("/", (req, res) => {
  console.log(req.body);

  // const { date, duration, bpm, pressions } = req.body;

  if (!req.body.duration) {
    res.status(400).json({
      message: "Missing required field!",
      details: "The 'duration' is required.",
    });
  }

  const providedData = req.body;

  const finalSeance = Object.assign(
    {
      bpm: {
        min: -1,
        max: -1,
        average: -1,
      },
      pressions: {
        total: -1,
      },
    },
    providedData
  );

  // créer un nouvelle séance à partir des données reçues
  const newSeance = new Seance(finalSeance);

  res.json(newSeance);

  // newSeance
  //   .save()
  //   .then((status) => res.status(200).json(status))
  //   .catch((err) => res.status(500).json(err));
});

module.exports = router;
