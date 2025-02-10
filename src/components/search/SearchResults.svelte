<script lang="ts">
	import { closeOverlay } from '$lib/overlay';
	import type { SvelteHTMLElements } from 'svelte/elements';

	type Props = SvelteHTMLElements['div'];

	const { class: className, children, ...props }: Props = $props();
</script>

<div
	onclick={closeOverlay}
	onkeydown={closeOverlay}
	role="presentation"
	class="relative w-full grow"
	{...props}
>
	<div class="absolute inset-0 flex w-full grow flex-col gap-4 overflow-y-scroll px-12 py-4">
		{@render children?.()}
	</div>
</div>
