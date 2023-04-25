export type Tag = 'snow' | 'rain' | 'night' | 'day' | 'drive' | 'evening';

export interface Track {
	name: string;
	trackID: string;
}

export interface Background {
	name: string;
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
