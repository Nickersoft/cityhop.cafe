<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		children?: Snippet;
	}

	const { class: className, children }: Props = $props();
</script>

<div class={cn('relative h-8 w-full overflow-hidden', className)}>
	<span class="animate-marquee absolute block whitespace-nowrap delay-4000 will-change-transform">
		{@render children?.()}
	</span>
</div>
