const capitalize = require('lodash.capitalize');

function asWord (word) {
  return '\\b' + word + '\\b';
}

/**
 *
 * @param {string} text input text
 * @param {string} word word that will be capitalized
 * @returns {string} Returns a new string with all the words that match 2nd have first letter capitalized.
 * Partially matches are ignore (e.g.:  capitalizeWords('github', 'git') will still return 'github')
 */
function capitalizeWords (text, word) {
  const matchWordRegex = new RegExp(asWord(word), 'ig');
  const matchWord = text.match(matchWordRegex);
  if (!matchWord) {
    return text;
  } else {
    const replaceWord = capitalize(matchWord[0]);
    return text.replace(new RegExp(matchWordRegex), replaceWord);
  }
}

module.exports = {
  capitalizeWords
};
