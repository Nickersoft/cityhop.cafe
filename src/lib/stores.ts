import { persisted } from 'svelte-local-storage-store';

export const preferences = persisted('preferences', {
	preserveAudio: false,
	musicVolume: 100,
	sceneVolume: 15,
	muteMusic: false,
	muteScene: false
});
