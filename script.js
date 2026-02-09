document.addEventListener("DOMContentLoaded", () => {

  const OFFERS = [
    {
      brand: "STAKE.US",
      payout: "$25",
      country: "USA",
      requirement: "Sign-up",
      link: "https://stake.us/?c=25dollars4free"
    },
    {
      brand: "Bitunix Pro - Crytpo Trading & Wallet",
      payout: "18% Of All Trades & Buys",
      country: "USA",
      requirement: "Sign up + referral.",
      link: "https://www.bitunix.com/register?inviteCode=bhjwaz"
    },
    {
      brand: "SpeedWallet - Crypto Wallet/Trade",
      payout: "10000 Satoshi & More Rewards",
      country: "USA",
      requirement: "Sign up + referral",
      link: "https://links.speed.app/referral?referral_code=V3UK5I"
    },
    {
      brand: "AttaPoll",
      payout: "OfferWall",
      country: "USA",
      requirement: "Sign-up + referral. Non-KYC offerwall & surveys.",
      link: "https://attapoll.app/join/axqlj"
    },
    {
      brand: "Spritz.Finance (Crypto)",
      payout: "$35",
      country: "USA",
      requirement: "Sign-up only and receive $35 in crypto.",
      link: "https://spritz.finance"
    },
    {
      brand: "Earnlab.com",
      payout: "Earn $ from offers",
      country: "USA",
      requirement: "Sign-up & Earn",
      link: "https://earnlab.com/r/787"
    },
    {
      brand: "Current Bank",
      payout: "$100",
      country: "USA",
      requirement: "Sign-up + $200 deposit (required).",
      link: "https://current.com/get-started/?creator_code=JACOBID311&impression_id=f40dd529-c101-4e46-9af2-ae095a91ab9f"
    },
    {
      brand: "Splash Sports - Sports betting app",
      payout: "$10",
      country: "USA",
      requirement: "Sign-up.",
      link: "https://link.splashsports.com/6OOI/c36h0gvs"
    },
    {
      brand: "Stash",
      payout: "$5",
      country: "USA",
      requirement: "Sign-up & Deposit $5 and get $5.",
      link: "https://publishers.revenueuniverse.com/click.php?affiliate=8189&campaign=42991&sid=SFB_1090___&app=1090&sid2=f27d3a5f-1271-4b31-9082-39a6b"
    },
    {
      brand: "CEX.IO",
      payout: "30% of any trade or buy",
      country: "USA",
      requirement: "Refferal",
      link: "https://cex.io/join?c=20&a=152050&o=3&s=sc&prid=referral-promo"
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
