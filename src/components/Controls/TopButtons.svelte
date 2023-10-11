<script lang="ts">
	import { page } from '$app/stores';

	import { currentScene, currentTrack } from '$lib/stores';
	import { getDistinctID, getSharableURL } from '$lib/utils';
	import { createEventDispatcher, onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import copy from 'copy-to-clipboard';
	import Alert from '$components/Alert.svelte';

	let visitorCount: number;

	const dispatch = createEventDispatcher();

	let showCopyConfirmation = false;

	function handleOpenSettings() {
		dispatch('openSettings');
	}

	function handleOpenAbout() {
		dispatch('openAbout');
	}

	async function updateVisitorCount() {
		const result = await fetch('/api/visitors', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				distinctID: getDistinctID()
			})
		}).then((r) => r.text());
		visitorCount = parseInt(result, 10);
	}

	function createHashtag(str: string) {
		return str.replace(/[\W\s]+/g, '');
	}

	function copyURL() {
		copy(getSharableURL($page.url));
		showCopyConfirmation = true;
	}

	function shareTweet() {
		const url = getSharableURL($page.url);

		const tweet = `Come ${$currentScene.type} in #${createHashtag(
			$currentScene.name
		)} with me and chill! 🎧 #cityhop #${createHashtag($currentTrack.genre.toLowerCase())} 

		${url}`.trim();

		window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`, '_blank');
	}

	function toggleFullscreen() {
		if (document.fullscreenElement) {
			document.exitFullscreen();
		} else {
			document.documentElement.requestFullscreen();
		}
	}

	onMount(() => {
		updateVisitorCount();

		window.addEventListener('focus', updateVisitorCount);

		return () => {
			window.removeEventListener('focus', updateVisitorCount);
		};
	});
</script>

<Alert bind:open={showCopyConfirmation}>
	<div
		in:fly={{ y: 10, delay: 200 }}
		class="w-full h-full flex flex-col justify-center text-lg gap-4 items-center"
	>
		<iconify-icon icon="mdi:link-variant" width={64} height={64} />
		Copied a sharable link to your clipboard!
	</div>
</Alert>

<div class="top-icons">
	{#if visitorCount && visitorCount > 0}
		<span transition:fade={{ duration: 500 }} class="text-white pl-2 flex-1 glow pr-4">
			You're chilling with
			<span class="text-yellow-400">{visitorCount}</span> other
			{visitorCount === 1 ? 'person' : 'people'}
		</span>
	{/if}
	<a class="request" target="_blank" rel="noreferrer" href="https://www.buymeacoffee.com/tnick">
		Support CityHop
	</a>
	<button class="tooltip tooltip-bottom" data-tip="Copy link" on:click={copyURL}>
		<iconify-icon icon="mdi:link-variant" />
	</button>
	<button class="tooltip tooltip-bottom" data-tip="Share on Twitter" on:click={shareTweet}>
		<iconify-icon icon="mdi:twitter" />
	</button>
	<button class="tooltip tooltip-bottom" data-tip="About" on:click={handleOpenAbout}>
		<iconify-icon icon="mdi:heart" />
	</button>
	<button class="tooltip tooltip-bottom" data-tip="Settings" on:click={handleOpenSettings}>
		<iconify-icon icon="mdi:settings" />
	</button>
	<button class="tooltip tooltip-bottom" data-tip="Fullscreen" on:click={toggleFullscreen}>
		<iconify-icon icon="mdi:fullscreen" />
	</button>
</div>

<style lang="postcss">
	.top-icons {
		@apply flex flex-row absolute top-0 px-4 py-2 right-0 left-0 justify-end items-center opacity-0 transition-all duration-300 z-50;
		@apply bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-transparent pb-16;

		button,
		a {
			@apply opacity-75 hover:opacity-100 normal-case no-underline block;

			&:before {
				@apply normal-case !important;
			}
		}

		a {
			@apply hover:!no-underline whitespace-nowrap block border-r border-white border-opacity-20 px-4;
		}

		button,
		a:not(.request) {
			@apply btn btn-square btn-link text-white text-2xl;
		}
	}
</style>
