<script lang="ts">
	import type { Snippet } from 'svelte';

	import { clickOutside } from '$actions/click-outside';
	import { closeOverlay } from '$lib/overlay';

	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();
</script>

<div
	use:clickOutside={closeOverlay}
	class="mx-auto h-full w-full max-w-7xl flex-col items-center justify-start py-8"
>
	{@render children?.()}
</div>
