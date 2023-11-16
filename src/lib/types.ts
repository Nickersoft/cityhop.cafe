export type Tag =
  | "snow"
  | "fog"
  | "rain"
  | "morning"
  | "night"
  | "day"
  | "evening";

export interface Track {
  name: string;
  trackID: string;
  genre: Genre;
  live: boolean;
}

export interface Offset {
  start?: number;
  end?: number;
}

export interface Scene {
  name: string;
  type: "walk" | "drive";
  videoID: string;
  tags?: Tag[];
  suggestedTrack?: Track;
  offset?: Offset;
  country: Country;
  // Used to better determine a good starting point
  // Not required
  length?: number;
}

export enum Country {
  korea = "South Korea",
  us = "United States",
  canada = "Canada",
  turkey = "Turkey",
  vietnam = "Vietnam",
  china = "China",
  monaco = "Monaco",
  jordan = "Jordan",
  france = "France",
  mauritius = "Mauritius",
  czechRepublic = "Czech Republic",
  uk = "England",
  germany = "Germany",
  austria = "Austria",
  australia = "Australia",
  ghana = "Ghana",
  russia = "Russia",
  romania = "Romania",
  ukraine = "Ukraine",
  netherlands = "Netherlands",
  spain = "Spain",
  taiwan = "Taiwan",
  lebanon = "Lebanon",
  japan = "Japan",
  singapore = "Singapore",
  peru = "Peru",
  southAfrica = "South Africa",
  india = "India",
  uae = "United Arab Emirates",
  italy = "Italy",
  serbia = "Serbia",
  mexico = "Mexico",
  thailand = "Thailand",
  egypt = "Egypt",
  scotland = "Scotland",
  switzerland = "Switzerland",
  hungary = "Hungary",
  redacted = "█████",
}

export enum Genre {
  pop = "Pop",
  jazz = "Jazz",
  lofi = "Lofi",
  rnb = "R&B",
  classical = "Classical",
  electronic = "Electronic",
}
