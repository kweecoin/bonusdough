const OFFERS = [
  { brand: "Example Exchange", payout: "$150", country: "USA", requirement: "Sign up + Deposit" },
  { brand: "Example Bank", payout: "$250", country: "Canada", requirement: "Sign up + Direct deposit" }
];

const grid = document.getElementById("grid");

grid.innerHTML = OFFERS.map(o => `
  <div class="card">
    <div class="cardInner">
      <div class="name">${o.brand}</div>
      <div class="payout">${o.payout}</div>
      <div class="pills">
        <div class="pill">🌍 ${o.country}</div>
        <div class="pill">🧾 ${o.requirement}</div>
      </div>
    </div>
  </div>
`).join("");
