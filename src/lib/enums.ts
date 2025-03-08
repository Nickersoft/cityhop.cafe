export enum Tags {
	snow = 'snow',
	fog = 'fog',
	rain = 'rain',
	morning = 'morning',
	night = 'night',
	day = 'day',
	evening = 'evening',
	halloween = 'halloween',
	christmas = 'christmas'
}

export enum SceneTypes {
	walk = 'walk',
	train = 'train',
	drive = 'drive',
	bike = 'bike',
	boat = 'boat'
}

/**
 * Expose PlayerState constants for convenience. These constants can also be
 * accessed through the global YT object after the YouTube IFrame API is instantiated.
 * https://developers.google.com/youtube/iframe_api_reference#onStateChange
 */
export enum PlayerState {
	UNSTARTED = -1,
	ENDED = 0,
	PLAYING = 1,
	PAUSED = 2,
	BUFFERING = 3,
	CUED = 5
}

export enum Hotkeys {
	RANDOM_SCENE = 'k',
	RANDOM_STATION = 'm',
	RANDOM = 'g'
}
