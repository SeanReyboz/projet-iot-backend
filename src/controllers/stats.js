class Stats {
  /**
   *
   * @param {Array} seances Un tableau de seance respectant le modele SeanceModel défini dans `/src/models/Seance.js`
   * @returns {{totalDuration: Number, totalSeance: Number}}
   */
  static calculateTotalDuration(seances) {
    let totalSeance = 0;
    const totalDuration = seances.reduce((previousValue, currentValue) => {
      const { duration } = currentValue;

      if (duration > 0) {
        previousValue += duration;
        totalSeance++;
      }

      return previousValue;
    }, 0);

    return { totalDuration, totalSeance };
  }

  /**
   *
   * @param {Array} seances Un tableau de seance respectant le modele SeanceModel défini dans `/src/models/Seance.js`
   * @returns {{totalPressions: Number, totalSeance: Number}}
   */
  static calculateTotalPressions(seances) {
    let totalSeance = 0;
    const totalPressions = seances.reduce((previousValue, currentValue) => {
      const {
        pressions: { total },
      } = currentValue;

      if (total > 0) {
        previousValue += total;
        totalSeance++;
      }

      return previousValue;
    }, 0);

    return { totalPressions, totalSeance };
  }

  /**
   *
   * @param {Array} seances Un tableau de seance respectant le modele SeanceModel défini dans `/src/models/Seance.js`
   * @returns {{totalBpms: Number, totalSeance: Number}}
   */
  static calculateTotalBpms(seances) {
    let totalSeance = 0;
    const totalBpms = seances.reduce((previousValue, currentValue) => {
      const {
        bpm: { average },
      } = currentValue;

      if (average > 0) {
        previousValue += average;
        totalSeance++;
      }

      return previousValue;
    }, 0);

    return { totalBpms, totalSeance };
  }

  /**
   *
   * @param {Array} seances Un tableau de seance respectant le modele SeanceModel défini dans `/src/models/Seance.js`
   * @returns {Number} La valeur du rythme cardiaque minimale
   */
  static getMinBpm(seances) {
    const minValue = seances.reduce((previousValue, currentValue) => {
      const {
        bpm: { min },
      } = currentValue;

      if (min < 0) return;
      if (min < previousValue) {
        previousValue = min;
      }

      return previousValue;
    }, 200);

    return minValue;
  }

  /**
   *
   * @param {Array} seances Un tableau de seance respectant le modele SeanceModel défini dans `/src/model/Seance.js`
   * @returns {Number} La valeur du rythme cardiaque maximale
   */
  static getMaxBpm(seances) {
    const maxValue = seances.reduce((maxVal, currentValue) => {
      const {
        bpm: { max },
      } = currentValue;

      if (max < 0) return;
      if (max > maxVal) {
        maxVal = max;
      }

      return maxVal;
    }, 0);

    return maxValue;
  }
}

module.exports = Stats;
