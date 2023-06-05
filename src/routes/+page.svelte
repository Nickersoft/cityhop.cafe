<script lang="ts">
	import posthog from 'posthog-js';

	import { draw } from 'radash';
	import { v4 as uuid } from 'uuid';
	import { onMount, setContext } from 'svelte';
	import { fade, fly, scale } from 'svelte/transition';
	import { queryParam } from 'sveltekit-search-params';

	import { PUBLIC_PH_TOKEN } from '$env/static/public';

	import type { Scene } from '$lib/types';
	import { decodeV, encodeV } from '$lib/utils';

	import UI from '$components/UI.svelte';

	import { getRandomLofi } from '$data/stations';
	import scenes, { calmScenes } from '$data/scenes';
	import { CH_CONTEXT } from '$lib/constants';

	export const currentData = queryParam('v', {
		encode: encodeV,
		decode: decodeV
	});

	setContext(CH_CONTEXT, { currentData });

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

		async function triggerHeartbeat() {
			if ($currentData) {
				const { scene, track } = $currentData;

				await fetch('/api/heartbeat', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						distinctID: distinctID,
						currentScene: scene,
						currentTrack: track
					})
				});
			}
		}

		const timer = setInterval(triggerHeartbeat, 1000 * 60 * 5 /* 5 minutes */);

		return () => {
			if (timer) {
				clearTimeout(timer);
			}
		};
	});

	function goToRandomScene() {
		playing = false;

		currentData.set({
			scene: draw(scenes)!,
			track: $currentData?.track ?? getRandomLofi()
		});
	}

	function goToRandomStation() {
		currentData.set({
			scene: $currentData?.scene ?? draw(scenes)!,
			track: getRandomLofi()
		});
	}

	function goToRandomSceneWithMusic(options: Scene[] = scenes) {
		playing = false;

		const randomScene = draw(options)!;

		currentData.set({
			scene: randomScene,
			track: randomScene?.suggestedTrack ?? getRandomLofi()
		});
	}

	onMount(() => {
		function handleKeyUp(e: KeyboardEvent) {
			if (e.key === 'g') {
				goToRandomSceneWithMusic();
			} else if (e.key === 'k') {
				goToRandomScene();
			} else if (e.key === 'm') {
				goToRandomStation();
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

	$: {
		if (!$currentData) {
			goToRandomSceneWithMusic(calmScenes);
		}
	}
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

{#if started && $currentData}
	{@const currentScene = $currentData.scene}
	{@const currentTrack = $currentData.track}

	<UI
		bind:playing
		videoID={currentScene.videoID}
		videoOffset={currentScene.offset ?? 0}
		liveAudio={currentTrack.live}
		audioID={currentTrack.trackID}
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
