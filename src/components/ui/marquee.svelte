<script lang="ts">
	import { cn } from '$lib/utils';
	import type { ClassValue } from 'clsx';
	import type { Snippet } from 'svelte';

	interface Props {
		class?: ClassValue;
		children?: Snippet;
	}

	const { class: className, children }: Props = $props();
</script>

<div
	class={cn(
		'relative h-8 w-full overflow-hidden [mask:linear-gradient(90deg,transparent_0,black_--spacing(4),black_calc(100%---spacing(4)),transparent_100%)]',
		className
	)}
>
	<span class="animate-marquee absolute block whitespace-nowrap delay-4000 will-change-transform">
		{@render children?.()}
	</span>
</div>
