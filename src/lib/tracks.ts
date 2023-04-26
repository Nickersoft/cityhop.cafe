import { unique } from 'radash';

import { _backgrounds, _tracks } from './private';

const popularTracks = [_tracks.chillBeats];

const countryTracks = Object.entries(_backgrounds).reduce((acc, [country, bgs]) => {
	return {
		...acc,
		[country]: unique(bgs.map((bg) => bg.suggestedTrack))
	};
});

export default { default: _tracks.chillBeats, popular: popularTracks, country: countryTracks };
