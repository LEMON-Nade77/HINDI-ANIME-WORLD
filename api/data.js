// ============================================================
// ANIME DATA STORE
// ------------------------------------------------------------
// This is the "database" for the simple backend. Edit this file
// to add your real anime + episodes. No build step needed —
// just commit and push, Vercel redeploys automatically.
//
// ------------------ ANIME ENTRY METADATA --------------------
// banner            -> OPTIONAL. A direct high-resolution link to a 16:9
//                       widescreen image (.jpg, .png, .webp). This is used
//                       specifically for the homepage sliding spotlight banner.
//                       **Note:** The banner automatically spotlights only the 
//                       LATEST 5 uploaded anime items (based on their position 
//                       at the very end of this array). If you omit the `banner` 
//                       property, the system will fall back to using your `cover` art.
// cover             -> REQUIRED. A direct link to vertical poster art (approx 5:7 
//                       aspect ratio) used for the search lists and catalog grids.
//
// -------------------- EPISODE MANAGEMENT --------------------
// Each episode needs a `type` + `src`, and SHOULD have `duration`:
//   type: "iframe"  -> src is an embeddable player URL
//                       e.g. a Rumble embed: https://rumble.com/embed/XXXXXXX/
//   type: "mp4"     -> src is a direct link to a raw video file host
//                       e.g. https://yoursite.com/video.mp4 / .m3u8 streams
// ============================================================

module.exports = [
   {
    id: 1,
    title: "David",
    cover: "https://image.tmdb.org/t/p/original/bESlrLOrsQ9gKzaGQGHXKOyIUtX.jpg",
    banner: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT9voxPeFire-ZL891AvdaQsr6Mp6Oq3gB97zPxdzq3Nr9tE_Yu",
    synopsis: " From the songs of his mother’s heart to the whispers of a faithful God, David’s story begins in quiet devotion. When the giant Goliath rises to terrorize a nation, a young shepherd armed with only a sling, a few stones, and unshakable faith steps forward. Pursued by power and driven by purpose, his journey tests the limits of loyalty, love, and courage—culminating in a battle not just for a crown, but for the soul of a kingdom.  ",
    tags: ["Anime Movie", "Animation","Drama", "Family", "History",],
    episodes: [
      {
        number: 1,
        title: " Movie",
        type: "iframe",
        src: "https://gdmirrorbot.nl/embed/hhz2udb"
      }
    ]
  },
  {
    id: 2,
    title: "Indias Got Latent Season 2  ",
    cover: "https://image.tmdb.org/t/p/w500/eml0QA3zUMizBvrlfQKhWI0swVh.jpg",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ph3mdIF2vDiuTw_u60mzyEiS9yHHk5putAZ2-7E_AQ&s=10",
    synopsis: "Comedy  Reality. Replace with your own series description.",
    tags: ["Hindi"],
    episodes: [
      {
        number: 1,
        title: "Episode 1",
        type: "iframe",
        src: "https://rumble.com/embed/v79ewfy/?pub=4pw4c8"
      }
    ]
  },
  {
    id: 3,
    title: "Farming Life in Another World",
    cover: "https://cdn.myanimelist.net/images/anime/1983/132329l.jpg",
    banner: "https://i.pinimg.com/1200x/55/2c/77/552c7795a79cb12d7d9f5876ac0e3884.jpg",
    synopsis: " During the final years of his life, Hiraku Machio remained confined to a hospital bed with a terminal illness until he finally passed away.Taking pity on the unfair life he lived, a god decides to reincarnate Hiraku in another world where he can live as he pleases. Wanting to try farming in this new life, he is bestowed with an all-in-one “Almighty Farming Tool” that can transform into any useful implement he wishes.Hiraku is then transported to a forest seemingly far from civilization. Here, he plans to build and farm everything from scratch—gradually developing the lifeless area into a thriving new society. .",
    tags: ["Fantasy", "Slice of Life", "Isekai"],
    episodes: [
      {
        number: 1,
        title: "Episode 1",
        type: "iframe",
        src: "https://gdmirrorbot.nl/embed/en2l9r6"
      },
      {
        number: 2,
        title: "Episode 2",
        type: "iframe",
        src: "https://gdmirrorbot.nl/embed/taup63d"
      },
      {
        number: 3,
        title: "Episode 3",
        type: "iframe",
        src: "https://gdmirrorbot.nl/embed/jonuq1e"
      },
      {
        number: 4,
        title: "Episode 4",
        type: "iframe",
        src: "https://gdmirrorbot.nl/embed/vru4xh8"
      },
      {
        number: 5,
        title: "Episode 5",
        type: "iframe",
        src: "https://gdmirrorbot.nl/embed/vi3jlvm"
      },
      {
        number: 6,
        title: "Episode 6",
        type: "iframe",
        src: "https://gdmirrorbot.nl/embed/zag1uao"
      }
    ]
  },
  {
    id: 4,
    title: "Dr STONE",
    cover: "https://i.postimg.cc/T10gjyVx/upscalemedia-transformed-(10).png",
    banner: "https://i.pinimg.com/736x/ad/b6/fb/adb6fb0027aa429bff47cbca65265baa.jpg",
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
  },
  {
    id: 5,
    title: "Chainsaw Man – The Movie: Reze Arc",
    cover: "https://image.tmdb.org/t/p/w500/pHyxb2RV5wLlboAwm9ZJ9qTVEDw.jpg",
    banner: "https://i.pinimg.com/736x/fc/30/0c/fc300c9d8978039c7208b3de2d39beaf.jpg",
    synopsis: "In a brutal war between devils, hunters, and secret enemies, a mysterious girl named Reze has stepped into Denji’s world, and he faces his deadliest battle yet, fueled by love in a world where survival knows no rules..",
    tags: ["Animation","Action","Romance ","Fantasy ","Anime Movie"],
    episodes: [
      {
        number: 1,
        title: "Movie",
        type: "iframe",
        // Derived from the watch-page slug https://rumble.com/v7bzixm-...html
        // If this doesn't play, go to the video on rumble.com -> Share -> Embed
        // and paste the exact URL from that embed code here instead.
        src: "https://rumble.com/embed/v7a58uo/?pub=4pw4c8"
      }
    ]
  },
  {
    id: 6,
    title: "Your Name",
    cover: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
    banner: "https://i.pinimg.com/1200x/9f/a5/74/9fa574f9013017a4568880cfa0106fa6.jpg",
    synopsis: "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
    tags: ["Animation","Romance ","Fantasy","Anime Movie","Drama"],
    episodes: [
      {
        number: 1,
        title: "Movie",
        type: "iframe",
        src: "https://rumble.com/embed/v7a5feq/?pub=4pw4c8"
      }
    ]
  },
    {
    id: 7,
    title: "Weathering with You",
    cover: "https://i.postimg.cc/kXppfS5s/qgrk7r1f-V4Ijuoei-GS5HOh-XNd-LJ.webp",
    banner: "https://i.postimg.cc/vmdXNtwh/ad7897ecffd637efb49a4472d8f33a9cc108bafb5f0ad89178d0b3a39d6e41c7-SX1080-FMjpg.jpg",
    synopsis: "The summer of his high school freshman year, Hodaka runs away from his remote island home to Tokyo, and quickly finds himself pushed to his financial and personal limits. The weather is unusually gloomy and rainy every day, as if taking its cue from his life. After many days of solitude, he finally finds work as a freelance writer for a mysterious occult magazine. Then, one day, Hodaka meets Hina on a busy street corner. This bright and strong-willed girl possesses a strange and wonderful ability: the power to stop the rain and clear the sky.",
    tags: ["Animation","Romance ","Fantasy","Anime Movie","Drama"],
    episodes: [
      {
        number: 1,
        title: "Movie",
        type: "iframe",
        src: "https://rumble.com/embed/v7a7bfm/?pub=4pw4c8"
      }
    ]
  },
  {
    id: 8,
    title: "Black Clover Sword Of The Wizard King 2023 1080p.x264.[HIN-ENG-JAP] ",
    cover: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
    banner: "https://i.pinimg.com/1200x/9f/a5/74/9fa574f9013017a4568880cfa0106fa6.jpg",
    synopsis: "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
    tags: ["Animation","Romance ","Fantasy","Anime Movie","Drama"],
    episodes: [
      {
        number: 1,
        title: "Movie",
        type: "iframe",
        src: "https://rumble.com/embed/v7a5feq/?pub=4pw4c8"
      }
    ]
  },  
  {
    id: 9,
    title: "Haikyu!! The Dumpster Battle (2024) 1080p HD [HIN-ENG-JAP]",
    cover: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
    banner: "https://i.pinimg.com/1200x/9f/a5/74/9fa574f9013017a4568880cfa0106fa6.jpg",
    synopsis: "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
    tags: ["Animation","Romance ","Fantasy","Anime Movie","Drama"],
    episodes: [
      {
        number: 1,
        title: "Movie",
        type: "iframe",
        src: "https://rumble.com/embed/v7a5feq/?pub=4pw4c8"
      }
    ]
  }, 
  {
    id: 10,
    title: "Hindi - Demon Slayer Kimetsu no Yaiba Infinity Castle (2025) 1080p [HIN-ENG-JAP] ",
    cover: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
    banner: "https://i.pinimg.com/1200x/9f/a5/74/9fa574f9013017a4568880cfa0106fa6.jpg",
    synopsis: "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
    tags: ["Animation","Romance ","Fantasy","Anime Movie","Drama"],
    episodes: [
      {
        number: 1,
        title: "Movie",
        type: "iframe",
        src: "https://rumble.com/embed/v7a5feq/?pub=4pw4c8"
      }
    ]
  },    
  {
    id: 12,
    title: "Jujutsu Kaisen 0 (2021) 1080p HD [HIN-ENG-JAP]",
    cover: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
    banner: "https://i.pinimg.com/1200x/9f/a5/74/9fa574f9013017a4568880cfa0106fa6.jpg",
    synopsis: "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
    tags: ["Animation","Romance ","Fantasy","Anime Movie","Drama"],
    episodes: [
      {
        number: 1,
        title: "Movie",
        type: "iframe",
        src: "https://rumble.com/embed/v7a5feq/?pub=4pw4c8"
      }
    ]
  },  
  {
    id: 13,
    title: "Lost in Starlight (2025) 720p HD [HIN-ENG-JAP]",
    cover: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
    banner: "https://i.pinimg.com/1200x/9f/a5/74/9fa574f9013017a4568880cfa0106fa6.jpg",
    synopsis: "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
    tags: ["Animation","Romance ","Fantasy","Anime Movie","Drama"],
    episodes: [
      {
        number: 1,
        title: "Movie",
        type: "iframe",
        src: "https://rumble.com/embed/v7a5feq/?pub=4pw4c8"
      }
    ]
  },  
  {
    id: 14,
    title: "My Hero Academia You're Next-1080p-HEVC-{BD}-[HIN-ENG-JAP]",
    cover: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
    banner: "https://i.pinimg.com/1200x/9f/a5/74/9fa574f9013017a4568880cfa0106fa6.jpg",
    synopsis: "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
    tags: ["Animation","Romance ","Fantasy","Anime Movie","Drama"],
    episodes: [
      {
        number: 1,
        title: "Movie",
        type: "iframe",
        src: "https://rumble.com/embed/v7a5feq/?pub=4pw4c8"
      }
    ]
  },  
  {
    id: 15,
    title: "My.Hero.Academia.Two.Heroes.2018.1080p10bit.[HIN-ENG-JAP]",
    cover: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
    banner: "https://i.pinimg.com/1200x/9f/a5/74/9fa574f9013017a4568880cfa0106fa6.jpg",
    synopsis: "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
    tags: ["Animation","Romance ","Fantasy","Anime Movie","Drama"],
    episodes: [
      {
        number: 1,
        title: "Movie",
        type: "iframe",
        src: "https://rumble.com/embed/v7a5feq/?pub=4pw4c8"
      }
    ]
  },  
  {
    id: 16,
    title: "My_Hero_Academia_Movie03-_World_Heroes_Mission-1080p-[HIN-ENG-JAP]",
    cover: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
    banner: "https://i.pinimg.com/1200x/9f/a5/74/9fa574f9013017a4568880cfa0106fa6.jpg",
    synopsis: "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
    tags: ["Animation","Romance ","Fantasy","Anime Movie","Drama"],
    episodes: [
      {
        number: 1,
        title: "Movie",
        type: "iframe",
        src: "https://rumble.com/embed/v7a5feq/?pub=4pw4c8"
      }
    ]
  },  
  {
    id: 17,
    title: "My_Hero_Academia-Movie-02-Heroes_Rising-1080p-[HIN-ENG-JAP]",
    cover: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
    banner: "https://i.pinimg.com/1200x/9f/a5/74/9fa574f9013017a4568880cfa0106fa6.jpg",
    synopsis: "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
    tags: ["Animation","Romance ","Fantasy","Anime Movie","Drama"],
    episodes: [
      {
        number: 1,
        title: "Movie",
        type: "iframe",
        src: "https://rumble.com/embed/v7a5feq/?pub=4pw4c8"
      }
    ]
  },  
  {
    id: 18,
    title: "One Piece Clockwork Island Adventure (2001) 1080p HD [HIN-ENG-JAP]",
    cover: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
    banner: "https://i.pinimg.com/1200x/9f/a5/74/9fa574f9013017a4568880cfa0106fa6.jpg",
    synopsis: "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
    tags: ["Animation","Romance ","Fantasy","Anime Movie","Drama"],
    episodes: [
      {
        number: 1,
        title: "Movie",
        type: "iframe",
        src: "https://rumble.com/embed/v7a5feq/?pub=4pw4c8"
      }
    ]
  },  
  {
    id: 19,
    title: "One Piece Movie 01 - One Piece the Movie in Hindi [HIN-ENG-JAP]",
    cover: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
    banner: "https://i.pinimg.com/1200x/9f/a5/74/9fa574f9013017a4568880cfa0106fa6.jpg",
    synopsis: "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
    tags: ["Animation","Romance ","Fantasy","Anime Movie","Drama"],
    episodes: [
      {
        number: 1,
        title: "Movie",
        type: "iframe",
        src: "https://rumble.com/embed/v7a5feq/?pub=4pw4c8"
      }
    ]
  },  
  {
    id: 20,
    title: "Re ZERO Starting Life in Another World Memory Snow (2018) [HIN-ENG-JAP] ",
    cover: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
    banner: "https://i.pinimg.com/1200x/9f/a5/74/9fa574f9013017a4568880cfa0106fa6.jpg",
    synopsis: "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
    tags: ["Animation","Romance ","Fantasy","Anime Movie","Drama"],
    episodes: [
      {
        number: 1,
        title: "Movie",
        type: "iframe",
        src: "https://rumble.com/embed/v7a5feq/?pub=4pw4c8"
      }
    ]
  },  
  {
    id: 21,
    title: "Re ZERO Starting Life in Another World The Frozen Bond (2019)[HIN-ENG-JAP]",
    cover: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
    banner: "https://i.pinimg.com/1200x/9f/a5/74/9fa574f9013017a4568880cfa0106fa6.jpg",
    synopsis: "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
    tags: ["Animation","Romance ","Fantasy","Anime Movie","Drama"],
    episodes: [
      {
        number: 1,
        title: "Movie",
        type: "iframe",
        src: "https://rumble.com/embed/v7a5feq/?pub=4pw4c8"
      }
    ]
  },  
  {
    id: 22,
    title: "Scarlet (2025) ",
    cover: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
    banner: "https://i.pinimg.com/1200x/9f/a5/74/9fa574f9013017a4568880cfa0106fa6.jpg",
    synopsis: "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
    tags: ["Animation","Romance ","Fantasy","Anime Movie","Drama"],
    episodes: [
      {
        number: 1,
        title: "Movie",
        type: "iframe",
        src: "https://rumble.com/embed/v7a5feq/?pub=4pw4c8"
      }
    ]
  },  
  {
    id: 23,
    title: "Spy x Family Code White 2023 1080p [HIN-ENG-JAP]",
    cover: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
    banner: "https://i.pinimg.com/1200x/9f/a5/74/9fa574f9013017a4568880cfa0106fa6.jpg",
    synopsis: "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
    tags: ["Animation","Romance ","Fantasy","Anime Movie","Drama"],
    episodes: [
      {
        number: 1,
        title: "Movie",
        type: "iframe",
        src: "https://rumble.com/embed/v7a5feq/?pub=4pw4c8"
      }
    ]
  },
    {
    id: 24,
    title: "Suzume (2022) 1080p HD [HIN-ENG-JAP]",
    cover: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
    banner: "https://i.pinimg.com/1200x/9f/a5/74/9fa574f9013017a4568880cfa0106fa6.jpg",
    synopsis: "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
    tags: ["Animation","Romance ","Fantasy","Anime Movie","Drama"],
    episodes: [
      {
        number: 1,
        title: "Movie",
        type: "iframe",
        src: "https://rumble.com/embed/v7a5feq/?pub=4pw4c8"
      }
    ]
  },
    {
    id: 25,
    title: "A Condition Called Love",
    cover: "https://image.tmdb.org/t/p/w500/aaYPPivWuebwIKQvFYuWkp9m0q5.jpg",
    banner: "https://butwhytho.net/wp-content/uploads/2024/06/A-Condition-Called-Love-Season-1-But-Why-Tho-4.jpg",
    synopsis: "High school freshman Hotaru Hinase has a vibrant life full of family and friendship, but not much luck in romance. That all changes when she makes a warm gesture to her handsome and heartbroken classmate, Hananoi, leading to him asking her out and her becoming flustered. Witness a girl who grapples with the enigma of love and a boy who is heavy handed with it.",
    tags: ["Animation","Comedy ","1 Seasons","Drama"],
    episodes: [
      {
        number: 1,
        title: "Episode 1",
        type: "iframe",
        src: "https://rumble.com/embed/v7a7a8u/?pub=4pw4c8"
      },
            {
        number: 2,
        title: "Episode 2",
        type: "iframe",
        src: "https://rumble.com/embed/v7a7a92/?pub=4pw4c8"
      },
            {
        number: 3,
        title: "Episode 3",
        type: "iframe",
        src: "https://rumble.com/embed/v7a7a9i/?pub=4pw4c8"
      },
            {
        number: 4,
        title: "Episode 4",
        type: "iframe",
        src: "https://rumble.com/embed/v7a7a9m/?pub=4pw4c8"
      },
            {
        number: 5,
        title: "Episode 5",
        type: "iframe",
        src: "https://rumble.com/embed/v7a7a9w/?pub=4pw4c8"
      },
            {
        number: 6,
        title: "Episode 6",
        type: "iframe",
        src: "https://rumble.com/embed/v7a7aa0/?pub=4pw4c8"
      },
            {
        number: 7,
        title: "Episode 7",
        type: "iframe",
        src: "https://rumble.com/embed/v7a7aam/?pub=4pw4c8"
      },
            {
        number: 8,
        title: "Episode 8",
        type: "iframe",
        src: "https://rumble.com/embed/v7a7aau/?pub=4pw4c8"
      },
            {
        number: 9,
        title: "Episode 9",
        type: "iframe",
        src: "https://rumble.com/embed/v7a7ab4/?pub=4pw4c8"
      },
            {
        number: 10,
        title: "Episode 10",
        type: "iframe",
        src: "https://rumble.com/embed/v7a7aba/?pub=4pw4c8"
      },
            {
        number: 11,
        title: "Episode 11",
        type: "iframe",
        src: "https://rumble.com/embed/v7a7abg/?pub=4pw4c8"
      },
            {
        number: 12,
        title: "Episode 12",
        type: "iframe",
        src: "https://rumble.com/embed/v7a7abm/?pub=4pw4c8"
      },
    ]
  },
];