const SeanceModel = require("../models/Seance");

class Seance {
  #bpm;
  #duration;
  #pressions;

  constructor(bpm, duration, pressions) {
    this.setBpm(bpm);
    this.setDuration(duration);
    this.setPressions(pressions);
  }

  /**
   *
   * @param {Number} duration
   */
  setDuration(duration) {
    this.#duration = duration;
    return this;
  }

  getDuration() {
    return this.#duration;
  }

  /**
   *
   * @param {Object} bpm - Objet pouvant contenir les clés suivantes: `min`,
   *  `max` et/ou `average`
   */
  setBpm(bpm) {
    const finalBpm = Object.assign(
      {
        min: -1,
        max: -1,
        average: -1,
      },
      bpm
    );

    this.#bpm = finalBpm;
    return this;
  }

  getBpm() {
    return this.#bpm;
  }

  /**
   *
   * @param {Number} pressions - Nombre de pressions
   */
  setPressions(pressions) {
    this.#pressions = pressions;
    return this;
  }

  getPressions() {
    return this.#pressions;
  }

  fieldsAreAllCompleted() {
    if (!this.getDuration()) {
      return false;
    }

    if (!this.getBpm()) {
      return false;
    }

    if (!this.getPressions()) {
      return false;
    }

    return true;
  }

  dump() {
    return {
      duration: this.getDuration(),
      bpm: this.getBpm(),
      pressions: this.getPressions(),
    };
  }

  /**
   * Sauvegarder la nouvelle séance dans la BDD (nouveau document)
   *
   */
  async save() {
    if (!this.fieldsAreAllCompleted()) {
      throw new Error("Un ou plusieurs champs n'ont pas été renseignés !");
    }

    const newSeance = new SeanceModel({
      duration: this.getDuration(),
      bpm: this.getBpm(),
      pressions: this.getPressions(),
    });

    return newSeance
      .save()
      .then((success) => success)
      .catch((err) => err);
  }
}

module.exports = Seance;
