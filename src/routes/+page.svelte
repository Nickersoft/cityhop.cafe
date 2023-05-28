<script lang="ts">
	import posthog from 'posthog-js';

	import { draw } from 'radash';
	import { v4 as uuid } from 'uuid';
	import { onMount } from 'svelte';
	import { persisted } from 'svelte-local-storage-store';
	import { fade, fly, scale } from 'svelte/transition';

	import { currentScene, currentTrack } from '$lib/stores';
	import { decodeSharableURL } from '$lib/utils';

	import UI from '$components/UI.svelte';

	import { getRandomLofi } from '$data/stations';
	import scenes from '$data/scenes';

	import { page } from '$app/stores';

	import { PUBLIC_PH_TOKEN } from '$env/static/public';
	import { Genre } from '$lib/types';

	let started = false;
	let playing = false;

	function getDistinctID() {
		const distinctIDKey = 'distinct-id';

		if (!localStorage.getItem(distinctIDKey)) {
			localStorage.setItem(distinctIDKey, uuid());
		}

		return localStorage.getItem(distinctIDKey)!;
	}

	onMount(() => {
		const distinctID = getDistinctID();

		posthog.init(PUBLIC_PH_TOKEN, {
			api_host: 'https://app.posthog.com',
			loaded(ph) {
				ph.identify(distinctID);
			}
		});

		function triggerHeartbeat() {
			return fetch('/api/heartbeat', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					distinctID: distinctID,
					currentScene: $currentScene,
					currentTrack: $currentTrack
				})
			});
		}

		const timer = setInterval(triggerHeartbeat, 1000 * 60 * 5 /* 5 minutes */);

		return () => {
			if (timer) {
				clearTimeout(timer);
			}
		};
	});

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
		const decodedURL = decodeSharableURL($page.url);

		if (decodedURL) {
			$currentScene = decodedURL.scene;
			$currentTrack = decodedURL.track;
		} else {
			const calmScenes = scenes.filter((b) => {
				return !b.suggestedTrack || [Genre.jazz, Genre.lofi].includes(b.suggestedTrack.genre);
			});
			$currentScene = draw(calmScenes)!;
			$currentTrack = $currentScene.suggestedTrack ?? getRandomLofi();
		}
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
		videoOffset={$currentScene.offset ?? 0}
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

			animation: load 5s ease-out;
			animation-delay: 100ms;
			animation-fill-mode: both;
			content: '';
		}
	}
</style>
