import { nowPlaying, uiState } from './stores.svelte';
import { getRandomLofi, goToRandomScene, goToRandomSceneWithMusic } from './utils';

export function setupHotkeys() {
	function handleKeyUp(e: KeyboardEvent) {
		if (e.key === 'g') {
			goToRandomSceneWithMusic();
		} else if (e.key === 'k') {
			goToRandomScene();
		} else if (e.key === 'm') {
			nowPlaying.station = getRandomLofi();
		}
	}

	function start(event: Event) {
		event.stopPropagation();
		event.preventDefault();

		uiState.hasStarted = true;

		document.removeEventListener('keyup', start);
		document.removeEventListener('mouseup', start);
	}

	document.addEventListener('mouseup', start);
	document.addEventListener('keyup', start);
	document.addEventListener('keyup', handleKeyUp);

	return () => {
		document.removeEventListener('keyup', start);
		document.removeEventListener('mouseup', start);
		document.removeEventListener('keyup', handleKeyUp);
	};
}
