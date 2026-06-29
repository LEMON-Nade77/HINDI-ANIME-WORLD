// ============================================================
// ANIME DATA STORE
// ------------------------------------------------------------
// This is the "database" for the simple backend. Edit this file
// to add your real anime + episodes. No build step needed —
// just commit and push, Vercel redeploys automatically.
//
// Each episode needs a `type` + `src`:
//   type: "iframe"  -> src is an embeddable player URL
//                       e.g. a Rumble embed: https://rumble.com/embed/XXXXXXX/
//   type: "mp4"     -> src is a direct link to a .mp4 / .m3u8 file
// ============================================================

module.exports = [
  {
    id: 1,
    title: "Sample Series One",
    cover: "https://placehold.co/400x560/1a1a1d/e63946?text=Series+One",
    synopsis: "Placeholder synopsis. Replace with your own series description.",
    tags: ["Action", "Adventure"],
    episodes: [
      {
        number: 1,
        title: "Episode 1",
        type: "iframe",
        src: "https://rumble.com/embed/REPLACE_WITH_VIDEO_ID/"
      },
      {
        number: 2,
        title: "Episode 2",
        type: "iframe",
        src: "https://rumble.com/embed/REPLACE_WITH_VIDEO_ID/"
      }
    ]
  },
  {
    id: 2,
    title: "Sample Series Two",
    cover: "https://placehold.co/400x560/1a1a1d/e63946?text=Series+Two",
    synopsis: "Placeholder synopsis. Replace with your own series description.",
    tags: ["Drama", "Fantasy"],
    episodes: [
      {
        number: 1,
        title: "Episode 1",
        type: "mp4",
        src: "https://www.w3schools.com/html/mov_bbb.mp4"
      }
    ]
  },
  {
    id: 3,
    title: "Sample Series Three",
    cover: "https://placehold.co/400x560/1a1a1d/e63946?text=Series+Three",
    synopsis: "Placeholder synopsis. Replace with your own series description.",
    tags: ["Comedy", "Slice of Life"],
    episodes: [
      {
        number: 1,
        title: "Episode 1",
        type: "iframe",
        src: "https://rumble.com/embed/REPLACE_WITH_VIDEO_ID/"
      }
    ]
  },
  {
    id: 4,
    title: "Dr. STONE",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF-K4_0tIgDWOWLHxekBuVIFNK0iCDV8HgLraqe7huHA&s",
    synopsis: "Add your own synopsis here.",
    tags: ["Season 1"],
    episodes: [
      {
        number: 1,
        title: "Episode 1",
        type: "iframe",
        // Derived from the watch-page slug https://rumble.com/v7bzixm-...html
        // If this doesn't play, go to the video on rumble.com -> Share -> Embed
        // and paste the exact URL from that embed code here instead.
        src: "https://rumble.com/embed/v79suxe/?pub=4pw4c8"
      },
      {
        number: 2,
        title: "Episode 2",
        type: "iframe",
        src: "https://desidubanime.p2pplay.pro/#kl5eju"
      }
    ]
  }
];
