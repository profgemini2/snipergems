const { generateSignals } = require("./signals");

async function scanTokens() {
  const signals = generateSignals();

  return signals.map((s) => ({
    name: s.name,
    score: s.volume + s.activity
  }));
}

module.exports = { scanTokens };
