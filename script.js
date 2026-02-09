document.addEventListener("DOMContentLoaded", () => {

  const OFFERS = [
    {
      brand: "STAKE.US",
      payout: "$25",
      country: "USA",
      requirement: "Sign up",
      link: "https://stake.us/?c=25dollars4free"
    },
    {
      brand: "AttaPoll",
      payout: "$5–10",
      country: "USA",
      requirement: "Sign up + referral. Non-KYC offerwall & surveys.",
      link: "https://attapoll.app/join/iwoyl"
    },
    {
      brand: "Spritz.Finance (Crypto)",
      payout: "$35",
      country: "USA",
      requirement: "Sign up only and receive $35 in crypto.",
      link: "https://spritz.finance"
    },
    {
      brand: "SoFi Credit Monitoring",
      payout: "$10",
      country: "USA",
      requirement: "Sign up only.",
      link: "https://www.sofi.com/invite/relay?gcp=fe4784ce-b683-4bf4-bd7e-895d9d7c98bd&isAliasGcp=false"
    },
    {
      brand: "Current Bank",
      payout: "$100",
      country: "USA",
      requirement: "Sign up + $200 deposit (required).",
      link: "https://current.com/get-started/?creator_code=JACOBID311&impression_id=f40dd529-c101-4e46-9af2-ae095a91ab9f"
    },
    {
      brand: "Splash Sports - Sports betting app",
      payout: "$10",
      country: "USA",
      requirement: "Sign up.",
      link: "https://link.splashsports.com/6OOI/c36h0gvs"
    },
    {
      brand: "Stash",
      payout: "$5",
      country: "USA",
      requirement: "Sign up & Deposit $5 and get $5.",
      link: "https://publishers.revenueuniverse.com/click.php?affiliate=8189&campaign=42991&sid=SFB_1090___&app=1090&sid2=f27d3a5f-1271-4b31-9082-39a6b"
    },
  ];
  const grid = document.getElementById("grid"); if (!grid) {
    console.error("Grid element not found");
    return;
  }

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

});
