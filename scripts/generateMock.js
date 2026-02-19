import fs from "fs"

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

const directions = ["LONG", "SHORT"]
const statuses = ["OPEN", "CLOSED"]
const symbols = ["AAA", "MSFT", "TSLA", "NVDA", "META", "ALPHA", "BETA"]

function createLeg(id) {
  return {
    leg_id: `leg-${id}`,
    price: randomBetween(10, 500),
    quantity: randomBetween(1, 50),
    date: `2025-05-${randomBetween(1, 28)}`
  }
}

function createTrade(index) {
  const buyCount = randomBetween(0, 5)
  const sellCount = randomBetween(0, 5)

  return {
    trade_id: `trade-${index}`,
    symbol: randomItem(symbols),
    direction: randomItem(directions),
    status: randomItem(statuses),
    setup: null,
    opened_at: `2025-05-${randomBetween(1, 28)}`,
    buy: Array.from({ length: buyCount }, (_, i) =>
      createLeg(`${index}-b-${i}`)
    ),
    sell: Array.from({ length: sellCount }, (_, i) =>
      createLeg(`${index}-s-${i}`)
    ),
    notes: ""
  }
}

const journal = {
  journal_id: "journal-2025-05",
  trades: Array.from({ length: 100 }, (_, i) => createTrade(i + 1))
}

fs.writeFileSync(
  "./src/mock/journal.json",
  JSON.stringify(journal, null, 2)
)

console.log("Mock journal with 100 trades generated.")
