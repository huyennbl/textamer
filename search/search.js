/**
 *
 * @param {String} input text
 * @param {Object} options Params for searching mode
 * @param {Boolean} options.ignoreCase
 * @returns {(string[] | null)} returns an array contains groups of adjecent duplications found, or return null if no duplication
 */
function adjacentDuplications (text, options = {}) {
  const regex = new RegExp(
    '\\b([\\w]+)\\s+\\1\\b',
    options.ignoreCase ? 'gi' : 'g'
  );
  return text.match(regex);
}

module.exports = { adjacentDuplications };
