const capitalize = require('lodash.capitalize');

/**
 *
 * @param {string} text
 * @returns {string} text with all first letter capitalized
 */

module.exports = function capitalizeAllFirstLetters (text, options = {}) {
  if (options.keepUppercase) {
    return text.replace(/\w\S*/g, (word) => {
      const firstLetter = capitalize(word)[0];

      return firstLetter + word.slice(1);
    });
  }

  return text.replace(/\w\S*/g, (t) => capitalize(t));
};
