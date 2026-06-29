// ============================================================
// Anime Archive — front-end logic
// Talks only to /api/anime (the backend). No video URLs live here.
// ============================================================

const grid = document.getElementById("grid");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");

const overlay = document.getElementById("overlay");
const drawer = document.getElementById("drawer");
const closeDrawer = document.getElementById("closeDrawer");
const playerMount = document.getElementById("playerMount");
const drawerTitle = document.getElementById("drawerTitle");
const drawerSynopsis = document.getElementById("drawerSynopsis");
const drawerTags = document.getElementById("drawerTags");
const episodeList = document.getElementById("episodeList");

let debounceTimer = null;

// ---------- helpers ----------
function escapeHtml(str = "") {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function pad(n) {
  return String(n).padStart(2, "0");
}

// ---------- fetch + render catalog ----------
async function loadCatalog(query = "") {
  const url = query
    ? `/api/anime?search=${encodeURIComponent(query)}`
    : "/api/anime";

  try {
    const res = await fetch(url);
    const data = await res.json();
    renderGrid(data);
  } catch (err) {
    grid.innerHTML = "";
    resultCount.textContent = "ERROR";
    emptyState.textContent = "Could not reach the backend. Is /api/anime deployed?";
    emptyState.classList.remove("hidden");
    console.error(err);
  }
}

function renderGrid(list) {
  grid.innerHTML = "";
  resultCount.textContent = `${pad(list.length)} TITLE${list.length === 1 ? "" : "S"}`;

  if (list.length === 0) {
    emptyState.classList.remove("hidden");
    return;
  }
  emptyState.classList.add("hidden");

  list.forEach((anime, i) => {
    const card = document.createElement("button");
    card.className = "card";
    card.style.animationDelay = `${Math.min(i * 0.04, 0.4)}s`;
    card.innerHTML = `
      <img class="card-cover" src="${escapeHtml(anime.cover)}" alt="${escapeHtml(anime.title)} cover art" loading="lazy" />
      <span class="card-stamp">EP ${pad(anime.episodeCount)}</span>
      <div class="card-body">
        <div class="card-title">${escapeHtml(anime.title)}</div>
        <div class="card-tags">${(anime.tags || []).map(t => `<span>${escapeHtml(t)}</span>`).join("")}</div>
      </div>
    `;
    card.addEventListener("click", () => openAnime(anime.id));
    grid.appendChild(card);
  });
}

// ---------- drawer: episode list + player ----------
async function openAnime(id) {
  try {
    const res = await fetch(`/api/anime?id=${id}`);
    if (!res.ok) throw new Error("Anime not found");
    const anime = await res.json();
    renderDrawer(anime);
    showDrawer();
  } catch (err) {
    console.error(err);
  }
}

function renderDrawer(anime) {
  drawerTitle.textContent = anime.title;
  drawerSynopsis.textContent = anime.synopsis;
  drawerTags.innerHTML = (anime.tags || []).map(t => `<span>${escapeHtml(t)}</span>`).join("");

  playerMount.innerHTML = `<p class="player-placeholder mono">SELECT AN EPISODE →</p>`;

  episodeList.innerHTML = "";
  anime.episodes.forEach((ep) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.className = "episode-item";
    btn.innerHTML = `
      <span class="episode-number mono">${pad(ep.number)}</span>
      <span class="episode-title">${escapeHtml(ep.title)}</span>
    `;
    btn.addEventListener("click", () => {
      document.querySelectorAll(".episode-item.active").forEach(el => el.classList.remove("active"));
      btn.classList.add("active");
      loadPlayer(ep);
    });
    li.appendChild(btn);
    episodeList.appendChild(li);
  });

  // auto-load first episode
  if (anime.episodes.length) {
    const firstBtn = episodeList.querySelector(".episode-item");
    firstBtn.classList.add("active");
    loadPlayer(anime.episodes[0]);
  }
}

function loadPlayer(episode) {
  playerMount.innerHTML = "";

  if (episode.type === "iframe") {
    const iframe = document.createElement("iframe");
    iframe.src = episode.src;
    iframe.allow = "autoplay; fullscreen; encrypted-media; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = "no-referrer-when-downgrade";
    playerMount.appendChild(iframe);
  } else {
    const video = document.createElement("video");
    video.src = episode.src;
    video.controls = true;
    video.playsInline = true;
    video.autoplay = true;
    playerMount.appendChild(video);
  }
}

function showDrawer() {
  overlay.classList.remove("hidden");
  drawer.classList.remove("hidden");
  requestAnimationFrame(() => {
    overlay.classList.add("visible");
    drawer.classList.add("visible");
  });
  drawer.setAttribute("aria-hidden", "false");
}

function hideDrawer() {
  overlay.classList.remove("visible");
  drawer.classList.remove("visible");
  drawer.setAttribute("aria-hidden", "true");
  setTimeout(() => {
    overlay.classList.add("hidden");
    drawer.classList.add("hidden");
    playerMount.innerHTML = `<p class="player-placeholder mono">SELECT AN EPISODE →</p>`;
  }, 250);
}

closeDrawer.addEventListener("click", hideDrawer);
overlay.addEventListener("click", hideDrawer);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") hideDrawer();
});

// ---------- search ----------
searchInput.addEventListener("input", (e) => {
  clearTimeout(debounceTimer);
  const value = e.target.value.trim();
  debounceTimer = setTimeout(() => loadCatalog(value), 250);
});

// ---------- init ----------
loadCatalog();
