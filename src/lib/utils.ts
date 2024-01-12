import { christmasScenes, halloweenScenes, sceneMap, scenes } from '$data/scenes';
import { christmasStations, halloweenStations, stationList, stationMap } from '$data/stations';
import { draw } from 'radash';
import { get } from 'svelte/store';

import { currentScene, currentStation, isPlaying } from './stores';
import { type Station } from './types';

const jazzStations = stationList.filter(({ genre }) => genre === 'jazz') as Station[];
const lofiStations = stationList.filter(({ genre }) => genre === 'lofi') as Station[];

export function getSpooky() {
	const scene = draw(halloweenScenes)!;
	const track = draw(halloweenStations)!;

	currentScene.set(scene);
	currentStation.set(track);
}

export function getXmas() {
	const scene = draw(christmasScenes)!;
	const track = draw(christmasStations)!;

	currentScene.set(scene);
	currentStation.set(track);
}

export function getRandomLofi() {
	const stations = stationList.filter(({ genre, name }) => {
		return genre === 'lofi' && !name.toLowerCase().includes('bollywood');
	});
	return draw(stations) as Station;
}

export function goToRandomScene(calmOnly = false) {
	let candidates = scenes;

	isPlaying.set(false);

	if (calmOnly) {
		candidates = candidates.filter((b) =>
			b.suggestedTrack
				? jazzStations.includes(b.suggestedTrack) || lofiStations.includes(b.suggestedTrack)
				: true
		);
	}

	currentScene.set(draw(candidates)!);
}

export function getVideoThumbnail(videoID: string, num: number = 3) {
	return `https://img.youtube.com/vi/${videoID}/hq${num}.jpg`;
}

export function goToRandomSceneWithMusic(calmOnly: boolean = false) {
	goToRandomScene(calmOnly);
	currentStation.set(get(currentScene)?.suggestedTrack ?? getRandomLofi());
}

export function getSharableURL(url: URL) {
	const $currentScene = get(currentScene);
	const $currentStation = get(currentStation);
	const key = btoa(`${$currentScene.videoID}:${$currentStation.trackID}`);

	return `${url.origin}/?v=${key}`;
}

export function decodeSharableURL(url: URL) {
	const v = url.searchParams.get('v');

	if (v && v.trim().length > 0) {
		const [videoID, audioID] = atob(v).split(':');

		if (videoID && audioID) {
			const scene = sceneMap[videoID];
			const track = stationMap[audioID];

			if (scene && track) {
				return { scene, track };
			}
		}
	}

	return null;
}
