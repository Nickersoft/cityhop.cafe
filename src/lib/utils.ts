import { get } from "svelte/store";
import { draw } from "radash";

import { currentScene, currentTrack } from "./stores";

import scenes, { sceneMap } from "$data/scenes";
import { getRandomLofi, stationMap } from "$data/stations";

import { spookyScenes, spookyTracks } from "./spooky";
import { Genre } from "./types";

export function getSpooky() {
  const scene = draw(spookyScenes)!;
  const track = draw(spookyTracks)!;

  currentScene.set(scene);
  currentTrack.set(track);
}

export function goToRandom() {
  const calmScenes = scenes.filter(
    (b) =>
      !b.suggestedTrack ||
      [Genre.jazz, Genre.lofi].includes(b.suggestedTrack.genre),
  );

  const randomScene = draw(calmScenes)!;

  currentScene.set(randomScene);
  currentTrack.set(randomScene.suggestedTrack ?? getRandomLofi());
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
