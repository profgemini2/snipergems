const { scanTokens } = require("./scanner");

async function main() {
  console.log("scanning for early gems...\n");

  const tokens = await scanTokens();

  tokens.forEach((t, i) => {
    console.log(`#${i + 1} ${t.name} | score: ${t.score}`);
  });
}

main();
