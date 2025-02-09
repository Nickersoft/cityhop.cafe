<script>
	import { onMount } from 'svelte';

	import BaseHead from '$components/BaseHead.svelte';

	let { children } = $props();

	onMount(() => {
		navigator.mediaSession.setActionHandler('play', function () {
			/* Code excerpted. */
		});
		navigator.mediaSession.setActionHandler('pause', function () {
			/* Code excerpted. */
		});
		navigator.mediaSession.setActionHandler('seekbackward', function () {
			/* Code excerpted. */
		});
		navigator.mediaSession.setActionHandler('seekforward', function () {
			/* Code excerpted. */
		});
		navigator.mediaSession.setActionHandler('previoustrack', function () {
			/* Code excerpted. */
		});
		navigator.mediaSession.setActionHandler('nexttrack', function () {
			/* Code excerpted. */
		});
	});
</script>

<BaseHead title="CityHop | Aesthetic walks and drives from around the world" />

{@render children?.()}
