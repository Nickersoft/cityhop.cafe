export type Tag = 'snow' | 'rain' | 'night' | 'day' | 'evening';

export interface Track {
	name: string;
	trackID: string;
}

export interface Background {
	name: string;
	type: 'walk' | 'drive';
	videoID: string;
	tags?: Tag[];
	suggestedTrack?: Track;
	offset?: number;
}

export interface BackgroundWithCountry extends Background {
	country: Country;
}

export enum Country {
	korea = 'South Korea',
	us = 'United States',
	china = 'China',
	japan = 'Japan',
	india = 'India',
	italy = 'Italy'
}
