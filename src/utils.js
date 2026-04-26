function normalize(value) {
  return Math.min(Math.max(value, 0), 100);
}

module.exports = { normalize };
