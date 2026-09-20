// Ye file data/games.json ko load kar ke homepage par game cards banati hai.
// Naya game add karna ho to sirf data/games.json mein entry add karein — is file ko chhedne ki zaroorat nahi.

async function loadGames() {
  const grid = document.getElementById("games-grid");
  const studioTagline = document.getElementById("studio-tagline");

  try {
    const res = await fetch("games.json", { cache: "no-store" });
    const data = await res.json();

    if (data.studio && data.studio.tagline && studioTagline) {
      studioTagline.textContent = data.studio.tagline;
    }
    if (data.studio && data.studio.email) {
      const emailLink = document.getElementById("contact-email");
      if (emailLink) {
        emailLink.href = "mailto:" + data.studio.email;
        emailLink.textContent = data.studio.email;
      }
    }

    const games = data.games || [];

    if (games.length === 0) {
      grid.innerHTML = '<div class="empty-state">More games coming soon. Stay tuned!</div>';
      return;
    }

    grid.innerHTML = games.map(renderCard).join("");
  } catch (err) {
    grid.innerHTML = '<div class="empty-state">Games list could not be loaded right now.</div>';
    console.error("Failed to load games.json", err);
  }
}

function renderCard(game) {
  const isLive = game.status === "live";
  const badge = isLive
    ? '<span class="badge live">● Live now</span>'
    : '<span class="badge coming-soon">Coming soon</span>';

  const cta = game.playstoreUrl
    ? `<a class="btn primary" href="${escapeAttr(game.playstoreUrl)}" target="_blank" rel="noopener">Get it on Google Play</a>`
    : `<span class="btn disabled">Not yet available</span>`;

  const icon = game.icon
    ? `<img class="icon" src="${escapeAttr(game.icon)}" alt="${escapeAttr(game.name)} icon" />`
    : "";

  return `
    <div class="game-card" style="--accent:${escapeAttr(game.accentColor || "#ff5e57")}">
      ${icon}
      <h3>${escapeHtml(game.name)}</h3>
      <p class="tagline">${escapeHtml(game.tagline || "")}</p>
      ${badge}
      <p class="desc">${escapeHtml(game.description || "")}</p>
      <div class="cta-row">${cta}</div>
    </div>
  `;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function escapeAttr(str) {
  return String(str).replace(/"/g, "&quot;");
}

document.addEventListener("DOMContentLoaded", loadGames);
