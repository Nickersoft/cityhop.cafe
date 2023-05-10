export type Tag = 'snow' | 'rain' | 'morning' | 'night' | 'day' | 'evening';

export interface Track {
	name: string;
	trackID: string;
	genre: Genre;
}

export interface Scene {
	name: string;
	type: 'walk' | 'drive';
	videoID: string;
	tags?: Tag[];
	suggestedTrack?: Track;
	offset?: number;
	country: Country;
}

export enum Country {
	korea = 'South Korea',
	us = 'United States',
	canada = 'Canada',
	china = 'China',
	france = 'France',
	uk = 'United Kingdom',
	taiwan = 'Taiwan',
	japan = 'Japan',
	peru = 'Peru',
	india = 'India',
	italy = 'Italy',
	mexico = 'Mexico'
}

export enum Genre {
	pop = 'Pop',
	jazz = 'Jazz',
	lofi = 'Lofi',
	rnb = 'R&B',
	classical = 'Classical',
	electronic = 'Electronic'
}
