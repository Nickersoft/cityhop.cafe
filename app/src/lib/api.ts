import { getRandomScene } from '#lib/remote/scenes.remote';
import { getRandomStation } from '#lib/remote/stations.remote';

import { Tags } from './enums';
import { nowPlaying } from './state.svelte';

export async function getSpooky() {
	nowPlaying.scene = await getRandomScene({ tags: [Tags.halloween] });
	nowPlaying.station = await getRandomStation({ tags: [Tags.halloween] });
}

export async function getFestive() {
	nowPlaying.scene = await getRandomScene({ tags: [Tags.christmas] });
	nowPlaying.station = await getRandomStation({ tags: [Tags.christmas] });
}
