function isValidOctet(octet) {
  const intOctet = parseInt(octet);
  return intOctet >= 0 && intOctet <= 255;
}
/**
 *
 * @param {String} str string to test if it is an IPv4
 * @returns {boolean} true if str is in valid IPv4 format
 */
function isIPv4(str) {
  const ip = str.match(/^\s*\d{1,3}(\.\d{1,3}){3}\s*$/);
  if (!ip) return false;
  return ip[0].split('.').every(isValidOctet);
}

module.exports = isIPv4;
