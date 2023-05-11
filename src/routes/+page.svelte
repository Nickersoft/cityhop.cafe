<script lang="ts">
	import { draw } from 'radash';
	import { tweened } from 'svelte/motion';
	import { onMount } from 'svelte';
	import { fade, fly, scale } from 'svelte/transition';

	import UI from '$components/UI.svelte';

	import { getRandomLofi } from '$data/stations';

	import scenes from '$data/scenes';

	import { currentScene, currentTrack } from '$lib/stores';

	let started = false;
	let playing = false;

	onMount(() => {
		function goToRandomScene() {
			playing = false;
			$currentScene = draw(scenes)!;
		}

		function goToRandomSceneWithMusic() {
			goToRandomScene();
			$currentTrack = $currentScene?.suggestedTrack ?? getRandomLofi();
		}

		function handleKeyUp(e: KeyboardEvent) {
			if (e.key === 'g') {
				goToRandomSceneWithMusic();
			} else if (e.key === 'k') {
				goToRandomScene();
			} else if (e.key === 'm') {
				$currentTrack = getRandomLofi();
			}
		}

		function start(event: Event) {
			event.stopPropagation();
			event.preventDefault();
			started = true;
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
	});

	onMount(() => {
		$currentScene = draw(scenes.filter((b) => !b.suggestedTrack))!;
		$currentTrack = $currentScene?.suggestedTrack ?? getRandomLofi();
	});
</script>

{#if !playing}
	<div
		out:fade={{ duration: 2000 }}
		class="flex justify-center items-center w-full h-full text-white fixed inset-0 z-50 bg-black"
	>
		{#key started}
			<div
				out:scale|local={{ start: 0.95, duration: 800 }}
				in:fly|local={{ y: 10, duration: 800, delay: 100 }}
				class="absolute text-center -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
			>
				{#if started}
					Let's go...

					<div class="loader" />
				{:else}
					Press any key or click anywhere to begin
				{/if}
			</div>
		{/key}
	</div>
{/if}

{#if started && $currentScene && $currentTrack}
	<UI
		bind:playing
		videoID={$currentScene.videoID}
		videoOffset={$currentScene.offset}
		liveAudio={$currentTrack.live}
		audioID={$currentTrack.trackID}
	/>
{/if}

<style lang="postcss">
	@keyframes load {
		0% {
			width: 0%;
			left: 0;
		}

		100% {
			width: 100%;
		}
	}

	.loader {
		@apply w-32 mt-4 h-[2px] relative;

		&:before {
			@apply h-full bg-white absolute left-0 top-0;

			animation: load 10s ease-in-out;
			animation-fill-mode: both;
			content: '';
		}
	}
</style>
