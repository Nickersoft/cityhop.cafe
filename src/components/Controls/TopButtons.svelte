<script lang="ts">
	import { currentScene, currentTrack } from '$lib/stores';
	import { getSharableURL } from '$lib/utils';
	import { createEventDispatcher, onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let visitorCount: number;

	const dispatch = createEventDispatcher();

	function handleOpenSettings() {
		dispatch('openSettings');
	}

	function handleOpenAbout() {
		dispatch('openAbout');
	}

	async function updateVisitorCount() {
		const result = await fetch('/api/visitors').then((r) => r.text());
		visitorCount = parseInt(result, 10);
	}

	function shareTweet() {
		const hashtag = $currentTrack.genre
			.toString()
			.toLowerCase()
			.replace(/[\W\s]+/g, '');

		const url = getSharableURL();

		const tweet =
			`Come ${$currentScene.type} in #${$currentScene.name} with me and chill! 🎧 #cityhop #${hashtag} 

${url}`.trim();

		window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`, '_blank');
	}

	onMount(() => {
		updateVisitorCount();

		document.addEventListener('focus', updateVisitorCount);

		return () => {
			document.removeEventListener('focus', updateVisitorCount);
		};
	});
</script>

<div class="top-icons">
	{#if visitorCount && visitorCount > 0}
		<span
			in:fade={{ duration: 500 }}
			class="text-white border-r border-white border-opacity-10 glow pr-4"
		>
			You're chilling with <span class="text-yellow-400">{visitorCount}</span> other {visitorCount ===
			1
				? 'person'
				: 'people'}
		</span>
	{/if}
	<button
		class="tooltip tooltip-bottom"
		data-tip="Share on Twitter"
		on:click={shareTweet}
		on:keyup={shareTweet}
	>
		<iconify-icon icon="mdi:twitter" />
	</button>
	<button
		class="tooltip tooltip-bottom"
		data-tip="About"
		on:click={handleOpenAbout}
		on:keyup={handleOpenAbout}
	>
		<iconify-icon icon="mdi:heart" />
	</button>
	<button
		class="tooltip tooltip-bottom"
		data-tip="Settings"
		on:click={handleOpenSettings}
		on:keyup={handleOpenSettings}
	>
		<iconify-icon icon="mdi:settings" />
	</button>
</div>

<style lang="postcss">
	.top-icons {
		@apply flex flex-row absolute top-0 p-2 right-0 left-0 justify-end items-center gap-2 opacity-0 transition-all duration-300 z-50;
		@apply bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-transparent pb-16;

		button,
		a {
			@apply btn btn-square btn-link opacity-75 hover:opacity-100;

			&:before {
				@apply normal-case duration-150 !important;
			}

			iconify-icon {
				@apply text-white text-2xl;
			}
		}
	}
</style>
