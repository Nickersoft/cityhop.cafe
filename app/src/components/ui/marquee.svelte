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
		'relative h-full w-full overflow-hidden [mask:linear-gradient(90deg,transparent_0,black_--spacing(4),black_calc(100%---spacing(4)),transparent_100%)]',
		className
	)}
>
	<span
		class="animate-marquee absolute top-1/2 block -translate-y-1/2 whitespace-nowrap will-change-transform [animation-delay:4s]"
	>
		{@render children?.()}
	</span>
</div>
