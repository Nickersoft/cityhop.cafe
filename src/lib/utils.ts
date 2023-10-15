import { get } from "svelte/store";
import { draw } from "radash";

import { currentScene, currentTrack, isPlaying } from "./stores";

import scenes, { sceneMap } from "$data/scenes";
import { lofiStations, stationMap } from "$data/stations";

import { spookyScenes, spookyTracks } from "../data/spooky";
import { Genre, type Track } from "./types";

export function getSpooky() {
  const scene = draw(spookyScenes)!;
  const track = draw(spookyTracks)!;

  currentScene.set(scene);
  currentTrack.set(track);
}

export function getRandomLofi() {
  return draw(lofiStations) as Track;
}

export function goToRandomScene(calmOnly = false) {
  let candidates = scenes;

  isPlaying.set(false);

  if (calmOnly) {
    candidates = candidates.filter(
      (b) =>
        !b.suggestedTrack ||
        [Genre.jazz, Genre.lofi].includes(b.suggestedTrack.genre),
    );
  }

  currentScene.set(draw(candidates)!);
}

export function goToRandomSceneWithMusic(calmOnly: boolean = false) {
  goToRandomScene(calmOnly);
  currentTrack.set(get(currentScene)?.suggestedTrack ?? getRandomLofi());
}

export function getSharableURL(url: URL) {
  const $currentScene = get(currentScene);
  const $currentTrack = get(currentTrack);
  const key = btoa(`${$currentScene.videoID}:${$currentTrack.trackID}`);

  return `${url.origin}/?v=${key}`;
}

export function decodeSharableURL(url: URL) {
  const v = url.searchParams.get("v");

  if (v && v.trim().length > 0) {
    const [videoID, audioID] = atob(v).split(":");

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
