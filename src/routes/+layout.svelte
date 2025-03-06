<script>
	import { onMount } from 'svelte';
	import { Tooltip } from 'bits-ui';

	import BaseHead from '$components/base-head.svelte';

	import { Toaster } from '$components/ui';
	import { isDark, preferences } from '$lib/state.svelte';

	let { children } = $props();

	onMount(() => {
		navigator.mediaSession.setActionHandler('play', () => {
			/* Code excerpted. */
		});
		navigator.mediaSession.setActionHandler('pause', () => {
			/* Code excerpted. */
		});
		navigator.mediaSession.setActionHandler('seekbackward', () => {
			/* Code excerpted. */
		});
		navigator.mediaSession.setActionHandler('seekforward', () => {
			/* Code excerpted. */
		});
		navigator.mediaSession.setActionHandler('previoustrack', () => {
			/* Code excerpted. */
		});
		navigator.mediaSession.setActionHandler('nexttrack', () => {
			/* Code excerpted. */
		});
	});

	$effect(() => {
		document.documentElement.classList.toggle(
			'dark',
			preferences.current.theme === 'dark' ||
				(preferences.current.theme !== 'light' && isDark.current)
		);
	});
</script>

<BaseHead title="CityHop | Aesthetic walks and drives from around the world" />

<Tooltip.Provider>
	{@render children?.()}
</Tooltip.Provider>

<Toaster />
