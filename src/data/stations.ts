import { listify, objectify } from "radash";

import { Genre } from "$lib/types";
import { spookyTrackMap } from "./spooky";

const stations = {
  "Bollywood Lofi Radio": {
    name: "Hindi Lofi 🎵 | Chill n Relax | 24/7 Bollywood Radio",
    trackID: "RRb5XV993W0",
    genre: Genre.lofi,
    live: true,
  },
  "Korean Indie/R&B/Hip-Hop Radio": {
    trackID: "IUT1qAhMY4w",
    name: "24/7 Korean Underground Indie/R&B/Hip-hop Radio",
    genre: Genre.rnb,
    live: true,
  },
  "Lofi Girl Radio: Beats to Study/Relax To": {
    name: "lofi hip hop radio 📚 - beats to relax/study to",
    trackID: "jfKfPfyJRdk",
    genre: Genre.lofi,
    live: true,
  },
  "R&B/Hip-Hop Radio": {
    name: "r&b / hip-hop radio [ chill live stream - 24/7 rnb ]",
    trackID: "86XzuPmMriw",
    genre: Genre.rnb,
    live: true,
  },
  "Japanese City Pop Mix": {
    name: "warm nights in tokyo [ city pop シティ・ポップ ]",
    trackID: "uUGJpJuwCY4",
    genre: Genre.pop,
    live: false,
  },
  "Relaxing Jazz Radio": {
    name:
      "Warm Jazz Relaxing Music ☕ Cozy Cabin with Coffee Shop Ambience | Relax Jazz Music for Study, Work",
    trackID: "L5v9NRuWp8o",
    genre: Genre.jazz,
    live: true,
  },
  "Coffee Shop Radio": {
    name: "Coffee Shop Radio ☕ - 24/7 lofi & jazzy hip-hop beats",
    trackID: "lP26UCnoH9s",
    genre: Genre.lofi,
    live: true,
  },
  "Classical Chinese Radio": {
    name:
      "Relaxing With Chinese Bamboo Flute, Guzheng, Erhu, Pipa || 中國傳統音樂 笛子古箏名曲 放鬆音樂 - 古典音樂 安静純音樂 中國古典長笛音樂",
    trackID: "dB2KZBsEBwM",
    genre: Genre.classical,
    live: true,
  },
  "ChillHop Radio": {
    name: "Chillhop Radio - jazzy & lofi hip hop beats 🐾",
    trackID: "5yx6BWlEVcY",
    genre: Genre.lofi,
    live: true,
  },
  "Coffee Jazz Music Radio": {
    name:
      "Coffee Jazz Music - Chill Out Lounge Jazz Music Radio - 24/7 Live Stream - Slow Jazz",
    trackID: "fEvM-OUbaKs",
    genre: Genre.jazz,
    live: true,
  },
  "Work & Jazz Piano Radio": {
    name:
      "Relaxing Jazz Piano Radio - Slow Jazz Music - 24/7 Live Stream - Music For Work & Study",
    trackID: "Dx5qFachd3A",
    genre: Genre.jazz,
    live: true,
  },
  "VaporFunk Station: Vaporwave Radio": {
    name: "VaporFunk Station 📼 | 24/7 Vaporwave Radio",
    trackID: "cVibfBy77Yg",
    genre: Genre.electronic,
    live: true,
  },
  "ChillSynth FM": {
    name: "ChillSynth FM - lofi synthwave radio for retro dreaming",
    trackID: "UedTcufyrHc",
    genre: Genre.electronic,
    live: true,
  },
  "Abao in Tokyo: Jazz/Lo-fi Hip Hop Radio": {
    name: "jazz/lofi hip hop radio🌱chill beats to relax/study to",
    trackID: "HAZoLuME-PU",
    genre: Genre.lofi,
    live: true,
  },
  "Synthwave Radio": {
    name: "synthwave radio 🌌 - beats to chill/game to",
    trackID: "4xDzrJKXOOY",
    genre: Genre.electronic,
    live: true,
  },
  "Tropical House Radio": {
    name: "The Good Life Radio • 24/7 Live Radio",
    trackID: "36YnV9STBqc",
    genre: Genre.electronic,
    live: true,
  },
  "Top Hits Radio": {
    name: "Hits Radio 1 Live Pop Radio' Top Hits 2023",
    trackID: "HQtFR3mhzOY",
    genre: Genre.pop,
    live: true,
  },
  "Baroque Classical Radio": {
    name:
      "♫ Baroque Live Music 24/7 - Classical Music from the Baroque Period ♫ クラシック ライブ",
    trackID: "2gO1v2GPMFk",
    genre: Genre.classical,
    live: true,
  },
  "Chinese Pop Radio": {
    name: "網路流行音樂電台 | Chinese POP Music 24/7",
    trackID: "IfNMuFqKBWs",
    genre: Genre.pop,
    live: true,
  },
  "Paris Cafe Radio: Positive Bossa Nova Jazz Music": {
    name:
      "Positive Bossa Nova Jazz Music for Relax, Good Mood - Paris Cafe Ambience",
    trackID: "g6bn6XrhYdc",
    genre: Genre.jazz,
    live: true,
  },
  "Spanish Hits Radio": {
    name: "Lo Mas Nuevo 2023",
    trackID: "D5bt0BRYrfQ",
    genre: Genre.pop,
    live: true,
  },
};

const stationList = listify(stations, (displayName, station) => ({
  ...station,
  displayName,
}));

const lofiStations = stationList.filter(
  (s) => s.genre === Genre.lofi && s.displayName !== "Bollywood Lofi Radio",
);

const stationMap = {
  ...objectify(stationList, (station) => station.trackID),
  ...spookyTrackMap,
};

export { lofiStations, stationList, stationMap, stations };
