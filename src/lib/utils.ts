import { get } from "svelte/store";
import { v4 as uuid } from "uuid";

import { currentScene, currentTrack } from "./stores";

import { sceneMap } from "$data/scenes";
import { stationMap } from "$data/stations";

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

export function getDistinctID() {
  const distinctIDKey = "distinct-id";

  if (!localStorage.getItem(distinctIDKey)) {
    localStorage.setItem(distinctIDKey, uuid());
  }

  return localStorage.getItem(distinctIDKey)!;
}
