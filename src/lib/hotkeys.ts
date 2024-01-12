import { currentStation, hasStarted } from './stores';
import { getRandomLofi, goToRandomScene, goToRandomSceneWithMusic } from './utils';

export function setupHotkeys() {
	function handleKeyUp(e: KeyboardEvent) {
		if (e.key === 'g') {
			goToRandomSceneWithMusic();
		} else if (e.key === 'k') {
			goToRandomScene();
		} else if (e.key === 'm') {
			currentStation.set(getRandomLofi());
		}
	}

	function start(event: Event) {
		event.stopPropagation();
		event.preventDefault();
		hasStarted.set(true);
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
