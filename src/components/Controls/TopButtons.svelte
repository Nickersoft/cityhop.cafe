<script lang="ts">
	import { currentScene, currentTrack } from '$lib/stores';
	import { getSharableURL } from '$lib/utils';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function handleOpenSettings() {
		dispatch('openSettings');
	}

	function handleOpenAbout() {
		dispatch('openAbout');
	}

	function shareTweet() {
		const hashtag = $currentTrack.genre
			.toString()
			.toLowerCase()
			.replace(/[\W\s]+/g, '');

		const url = getSharableURL();

		const tweet =
			`Come ${$currentScene.type} with me in #${$currentScene.name} and chill! 🎧 #${hashtag} 

${url}`.trim();

		window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`, '_blank');
	}
</script>

<div class="top-icons">
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
		data-tip="Settings"
		on:click={handleOpenSettings}
		on:keyup={handleOpenSettings}
	>
		<iconify-icon icon="mdi:settings" />
	</button>
	<button
		class="tooltip tooltip-bottom"
		data-tip="About"
		on:click={handleOpenAbout}
		on:keyup={handleOpenAbout}
	>
		<iconify-icon icon="mdi:about" />
	</button>
</div>

<style lang="postcss">
	.top-icons {
		@apply flex flex-row absolute top-0 right-0 left-0 justify-end items-center gap-4 opacity-0 transition-all duration-300 z-50;
		@apply bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-transparent;

		button {
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
