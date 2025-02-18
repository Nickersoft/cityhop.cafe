<script>
	import { onMount } from 'svelte';
	import { MediaQuery } from 'svelte/reactivity';

	import BaseHead from '$components/base-head.svelte';

	import { Toaster } from '$components/ui';
	import { preferences } from '$state';

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

	const isDark = new MediaQuery('(prefers-color-scheme: dark)');

	$effect(() => {
		document.documentElement.classList.toggle(
			'dark',
			preferences.current.theme === 'dark' ||
				(preferences.current.theme !== 'light' && isDark.current)
		);
	});
</script>

<BaseHead title="CityHop | Aesthetic walks and drives from around the world" />

{@render children?.()}

<Toaster />
