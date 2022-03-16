const express = require("express");
const router = express.Router();

const moment = require("moment");

const Stats = require("../controllers/stats");

// Import des différents modèles à utiliser
const SeanceModel = require("../models/Seance");

// Voir la moyenne all time de bpm
router.get("/bpm", async (req, res) => {
  try {
    // Récupérer toutes les séances par ordre chronologique et n'afficher que les champs "bpm"
    const seances = await SeanceModel.aggregate([
      { $sort: { date: -1 } },
      { $project: { bpm: 1 } },
    ]);

    // Récupération des données
    const { totalBpms, totalSeance } = Stats.calculateTotalBpms(seances);
    const allTimeBpmAverage = Math.round(totalBpms / totalSeance);

    const min = Stats.getMinBpm(seances);
    const max = Stats.getMaxBpm(seances);

    res.status(200).json({
      average: allTimeBpmAverage,
      min,
      max,
      totalSeance,
      seances,
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occured in the stats route trying to GET /bpm",
      error,
    });
  }
});

router.get("/pressions", async (req, res) => {
  try {
    // Récupérer toutes les séances par ordre chronologique et n'afficher que les champs "pressions"
    const seances = await SeanceModel.aggregate([
      { $sort: { date: -1 } },
      { $project: { pressions: 1 } },
    ]);

    const { totalPressions, totalSeance } =
      Stats.calculateTotalPressions(seances);

    const averagePerSession = totalPressions / totalSeance;

    res.status(200).json({
      total: totalPressions,
      averagePerSession,
      totalSeance,
      seances,
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occured in the stats route trying to GET /pressions",
      error,
    });
  }
});

router.get("/duration", async (req, res) => {
  try {
    // Récupérer toutes les séances par ordre chronologique et n'afficher que les champs "duration"
    const seances = await SeanceModel.aggregate([
      { $sort: { date: -1 } },
      { $project: { duration: 1 } },
    ]);

    const { totalDuration, totalSeance } =
      Stats.calculateTotalDuration(seances);

    const averagePerSession = totalDuration / totalSeance;

    res.status(200).json({
      total: totalDuration,
      averagePerSession,
      totalSeance,
      seances,
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occured in the stats route trying to GET /pressions",
      error,
    });
  }
});

module.exports = router;
