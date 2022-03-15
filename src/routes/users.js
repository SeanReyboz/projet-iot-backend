const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const User = mongoose.model("User");

// TODO A completer

router.get("/new", async (req, res) => {
  const { username, password } = req.query;

  console.log(username, password);

  // Vérifier que le nom d'utilisateur ou le mot de passe ne soient pas vide
  if (username === undefined) {
    res.send("No username provided");
    return;
  }

  if (password === undefined) {
    res.send("No password provided");
    return;
  }

  // Vérifier que le nom d'utilisateur n'existe pas déjà dans la BDD
  let user = await User.findOne({ username });

  if (userAccount !== null) {
    res.send("<h1>This account already exists!</h1>");
    return;
  }

  // Créer un nouvel utilisateur
  console.log(`Creating an account for: ${username}`);
  const newAccount = new Account({
    username,
    password,

    lastAuthentication: Date.now(),
  });

  // Appliquer les modifications sur la BDD, et afficher un message de confirmation
  await newUser
    .save()
    .then((response) => res.send(response))
    .catch((err) => res.send(err));

  return;
});

module.exports = router;
