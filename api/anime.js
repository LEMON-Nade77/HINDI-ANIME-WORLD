// ============================================================
// /api/anime  — the "backend"
// ------------------------------------------------------------
// GET /api/anime              -> all anime (cards list)
// GET /api/anime?id=2         -> one anime with full episode list
// GET /api/anime?search=word  -> anime whose title matches "word"
//
// Runs as a Vercel Serverless Function (Node.js). No dependencies.
// ============================================================

const animeList = require("./data");

module.exports = (req, res) => {
  const { id, search } = req.query;

  // CORS-safe even if you later split front/back across domains
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (id) {
    const anime = animeList.find((a) => a.id === Number(id));
    if (!anime) {
      res.status(404).json({ error: "Anime not found" });
      return;
    }
    res.status(200).json(anime);
    return;
  }

  if (search) {
    const q = String(search).toLowerCase();
    const filtered = animeList.filter((a) =>
      a.title.toLowerCase().includes(q)
    );
    res.status(200).json(filtered);
    return;
  }

  // Default: return the list without the heavy episode payload
  const summary = animeList.map(({ id, title, cover, synopsis, tags, episodes }) => ({
    id: 1,
    title: "Dr. STONE Season 1 E01- 1080P",
    cover: "https://cdn.discordapp.com/attachments/1447917590663008329/1521084809349435504/images.jpg?ex=6a438c1e&is=6a423a9e&hm=b9c55ab992faf246ef93b85a4f4c84d36e142db82022ac142b336a97b7870fdc&",
    synopsis: "One or two sentences about the show.",
    tags: ["Action", "Fantasy"],
    episodes:
    {
      number: 1,
      title: "Episode 1",
      type: "iframe",                                 // or "mp4"
      src: "https://rumble.com/v7bzixm-dr.-stone-season-1-e01-1080p.html"        // the embed/video URL
    }

  }));

  res.status(200).json(summary);
};
