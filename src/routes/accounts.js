const express = require("express");
const router = express.Router();

// Import du modèle à utiliser
const Account = require("../models/Account");

async function findAll(model) {
  const documents = await model.find({});
  return documents;
}

router.get("/", async (req, res) => {
  const result = await findAll(Account);
  res.status(200).json({ title: "Accounts", result });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params.id;
  const result = await Account.findOne({ id });
  res.status(200).json({ title: "Single Account ", result });
});

module.exports = router;
