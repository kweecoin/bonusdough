const OFFERS = [
  {
    brand: "Example Exchange",
    payout: "$25",
    country: "USA",
    requirement: "Sign up",
    link: "https://stake.us/?c=25dollars4free"
  },
  {
    brand: "Example Bank",
    payout: "$250",
    country: "Canada",
    requirement: "Sign up + Direct deposit",
    link: "https://example.com/referral-link"
  }
];

const grid = document.getElementById("grid");

grid.innerHTML = OFFERS.map(o => `
  <a class="card" href="${o.link}" target="_blank" rel="noopener noreferrer">
    <div class="cardInner">
      <div class="name">${o.brand}</div>
      <div class="payout">${o.payout}</div>
      <div class="pills">
        <div class="pill">🌍 ${o.country}</div>
        <div class="pill">🧾 ${o.requirement}</div>
      </div>
    </div>
  </a>
`).join("");
