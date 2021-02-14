function isValidOctet (octet) {
  const intOctet = parseInt(octet);
  return intOctet >= 0 && intOctet <= 255;
}

function isIPv4 (str) {
  const ip = str.match(/^\s*\d{1,3}(\.\d{1,3}){3}\s*$/);
  if (!ip) return false;
  return ip[0].split('.').every(isValidOctet);
}

module.exports = isIPv4;
