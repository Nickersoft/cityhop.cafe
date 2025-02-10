<script lang="ts">
	import type { Snippet } from 'svelte';

	import { ArrowLeft, X } from '$icons';
	import { closeOverlay } from '$lib/overlay';

	import Button from '$ui/Button.svelte';

	interface Props {
		children?: Snippet;
		allowBack?: boolean;
		onBack: () => void;
	}

	const { onBack, children, allowBack }: Props = $props();
</script>

<div class="grid grid-cols-[auto_1fr_auto] items-center gap-4">
	<Button onclick={onBack} class={{ invisible: !allowBack }} size="icon">
		<ArrowLeft />
	</Button>

	{@render children?.()}

	<Button size="icon" onclick={closeOverlay}>
		<X />
	</Button>
</div>
