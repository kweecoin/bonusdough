// ====== EDIT THIS ======
const OFFERS = [
  {
    brand: "Example Exchange",
    payout: "$150",
    country: "USA",
    effort: "Easy",
    timeLeft: "10 days left",
    requirement: "Sign up + Deposit",
    link: "https://example.com/ref/yourcode",
    steps: [
      "Sign up using the referral link.",
      "Complete any required verification.",
      "Make the minimum deposit to unlock the bonus."
    ],
    note: "Always confirm eligibility and fees before depositing."
  },
  {
    brand: "Example Bank",
    payout: "$250",
    country: "Canada",
    effort: "Medium",
    timeLeft: "21 days left",
    requirement: "Sign up + Direct deposit",
    link: "https://example.com/bank/ref",
    steps: [
      "Open the account through the referral link.",
      "Set up direct deposit to qualify.",
      "Bonus typically arrives within 7–30 days."
    ],
    note: "Direct deposit definitions vary by bank."
  }
];

// ====== UI RENDER ======
function $(sel){ return document.querySelector(sel); }
function esc(s){
  return String(s)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

function renderOffers(){
  const grid = $(".grid");
  if (!grid) return;

  // Replace the single demo card from index.html
  grid.innerHTML = OFFERS.map((o, i) => `
    <div class="card" data-i="${i}">
      <div class="shine"></div>
      <div class="cardInner">
        <div class="row">
          <div class="name">${esc(o.brand)}</div>
          <div class="pill">${esc(o.effort)}</div>
        </div>

        <div class="payout">${esc(o.payout)}</div>

        <div class="pills">
          <div class="pill">🌍 ${esc(o.country)}</div>
          <div class="pill">⏱️ ${esc(o.timeLeft)}</div>
          <div class="pill">🧾 ${esc(o.requirement)}</div>
        </div>

        <div class="actions">
          <button class="btn holo" data-view="${i}"><span>View</span></button>
          <button class="btn" data-copy="${i}">Copy link</button>
        </div>
      </div>
    </div>
  `).join("");

  // Hook up actions
  document.querySelectorAll("[data-copy]").forEach(btn => {
    btn.addEventListener("click", () => {
      const i = Number(btn.getAttribute("data-copy"));
      copyText(OFFERS[i].link);
    });
  });

  document.querySelectorAll("[data-view]").forEach(btn => {
    btn.addEventListener("click", () => {
      const i = Number(btn.getAttribute("data-view"));
      openModal(OFFERS[i]);
    });
  });
}

// ====== MODAL ======
function ensureModal(){
  if ($("#offerModal")) return;

  const modal = document.createElement("div");
  modal.id = "offerModal";
  modal.style.position = "fixed";
  modal.style.inset = "0";
  modal.style.display = "none";
  modal.style.alignItems = "center";
  modal.style.justifyContent = "center";
  modal.style.padding = "18px";
  modal.style.background = "rgba(0,0,0,.55)";
  modal.style.zIndex = "9999";

  modal.innerHTML = `
    <div class="card" style="width:min(560px, 96vw);">
      <div class="shine"></div>
      <div class="cardInner">
        <div class="row" style="gap:10px;">
          <div>
            <div class="name" id="mBrand">Offer</div>
            <div style="font-size:12px;color:rgba(255,255,255,.65);margin-top:2px" id="mMeta"></div>
          </div>
          <button class="btn" id="mClose" style="padding:8px 12px;">✕</button>
        </div>

        <div class="payout" id="mPayout" style="margin-top:12px;"></div>

        <div class="pills" id="mPills" style="margin-bottom:10px;"></div>

        <div style="font-weight:800;margin:10px 0 6px;">Steps</div>
        <ol id="mSteps" style="margin:0;padding-left:18px;color:rgba(255,255,255,.72)"></ol>

        <div style="font-weight:800;margin:12px 0 6px;">Link</div>
        <div style="display:flex;gap:10px;align-items:center;">
          <input id="mLink" readonly style="flex:1;min-width:0;" />
          <button class="btn holo" id="mCopy"><span>Copy</span></button>
        </div>

        <div id="mNote" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,.58)"></div>
      </div>
    </div>
  `;

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.body.appendChild(modal);

  $("#mClose").addEventListener("click", closeModal);
  $("#mCopy").addEventListener("click", () => copyText($("#mLink").value));
}

function openModal(offer){
  ensureModal();

  $("#mBrand").textContent = offer.brand;
  $("#mMeta").textContent = `${offer.country} • ${offer.effort} • ${offer.timeLeft}`;
  $("#mPayout").textContent = offer.payout;

  $("#mPills").innerHTML = `
    <div class="pill">🌍 ${esc(offer.country)}</div>
    <div class="pill">⏱️ ${esc(offer.timeLeft)}</div>
    <div class="pill">🧾 ${esc(offer.requirement)}</div>
  `;

  const steps = $("#mSteps");
  steps.innerHTML = "";
  (offer.steps || []).forEach(s => {
    const li = document.createElement("li");
    li.textContent = s;
    li.style.margin = "6px 0";
    steps.appendChild(li);
  });

  $("#mLink").value = offer.link || "";
  $("#mNote").textContent = offer.note || "";

  $("#offerModal").style.display = "flex";
}

function closeModal(){
  const m = $("#offerModal");
  if (m) m.style.display = "none";
}

// ====== COPY + TOAST ======
async function copyText(text){
  try{
    await navigator.clipboard.writeText(text);
    toast("Copied!");
  }catch{
    // fallback
    const t = document.createElement("textarea");
    t.value = text;
    document.body.appendChild(t);
    t.select();
    document.execCommand("copy");
    document.body.removeChild(t);
    toast("Copied!");
  }
}

let toastTimer;
function toast(msg){
  clearTimeout(toastTimer);
  let t = $("#toast");
  if (!t){
    t = document.createElement("div");
    t.id = "toast";
    t.style.position = "fixed";
    t.style.left = "50%";
    t.style.bottom = "18px";
    t.style.transform = "translateX(-50%)";
    t.style.padding = "10px 12px";
    t.style.borderRadius = "14px";
    t.style.border = "1px solid rgba(255,255,255,.14)";
    t.style.background = "rgba(7,7,16,.82)";
    t.style.backdropFilter = "blur(12px)";
    t.style.color = "rgba(255,255,255,.9)";
    t.style.fontWeight = "800";
    t.style.fontSize = "13px";
    t.style.zIndex = "10000";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.opacity = "1";
  toastTimer = setTimeout(() => { t.style.opacity = "0"; }, 1100);
}

// Boot
renderOffers();
