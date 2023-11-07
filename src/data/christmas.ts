import { objectify } from "radash";
import { Country, Genre, type Scene, type Track } from "../lib/types";

export const xmasScenes: Scene[] = [
  {
    name: "Dresden",
    videoID: "-FIJHCY8j-0",
    type: "walk",
    offset: { start: 100 },
    country: Country.germany,
  },
  {
    name: "Göttingen",
    videoID: "KL9VyAXPQmg",
    type: "walk",
    offset: { start: 120 },
    country: Country.germany,
  },
  {
    name: "London",
    videoID: "A36DcBstvNk",
    type: "walk",
    offset: { start: 120 },
    country: Country.uk,
  },
  {
    name: "Basel",
    videoID: "DeXnO5W3-M0",
    type: "walk",
    offset: { start: 120 },
    country: Country.switzerland,
  },
  {
    name: "Budapest",
    videoID: "vKmeQj-d1kE",
    type: "walk",
    offset: { start: 120 },
    country: Country.hungary,
  },
  {
    name: "Prague",
    videoID: "IL6quNkBOJU",
    type: "walk",
    offset: { start: 120 },
    country: Country.czechRepublic,
  },
  {
    name: "Moscow",
    videoID: "vDAmd0hTnbs",
    type: "walk",
    offset: { start: 120 },
    country: Country.russia,
  },
];

export const xmasTracks: Track[] = [
  {
    name: "Lofi Christmas Radio",
    trackID: "ask1B-m26aU",
    genre: Genre.electronic,
    live: true,
  },
  {
    name: "Christmas Cozy Home",
    trackID: "Eg47HeqEYIQ",
    genre: Genre.classical,
    live: false,
  },
  {
    name: "Relaxing Christmas Jazz",
    trackID: "lJlEQim-yMo",
    genre: Genre.jazz,
    live: false,
  },
  {
    name: "Instrumental Christmas Jazz",
    trackID: "4KYZO6eEugY",
    genre: Genre.jazz,
    live: false,
  },
];

export const xmasSceneMap = objectify(xmasScenes, (scene) => scene.videoID);

export const xmasTrackMap = objectify(xmasTracks, (track) => track.trackID);
