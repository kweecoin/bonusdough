const OFFERS = [
  {
    brand: "STAKE.US",
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
  <a
    href="${o.link}"
    class="card"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Open ${o.brand} referral link"
  >
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
