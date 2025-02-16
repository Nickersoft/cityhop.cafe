<script lang="ts">
	import { cn } from '$lib';
	import { ScrollArea } from 'bits-ui';
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		children: Snippet;
	}

	const { children, class: className }: Props = $props();
</script>

<ScrollArea.Root class="size-full overflow-hidden">
	<ScrollArea.Viewport class={cn('size-full', className)}>
		{@render children()}
	</ScrollArea.Viewport>
	<ScrollArea.Scrollbar
		orientation="vertical"
		class="bg-muted hover:bg-dark-10 data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out-0 data-[state=visible]:fade-in-0 flex w-2.5 touch-none rounded-full border-l border-l-transparent p-px transition-all duration-200 select-none hover:w-3"
	>
		<ScrollArea.Thumb class="bg-muted-foreground flex-1 rounded-full" />
	</ScrollArea.Scrollbar>
	<ScrollArea.Scrollbar
		orientation="horizontal"
		class="bg-muted hover:bg-dark-10 flex h-2.5 touch-none rounded-full border-t border-t-transparent p-px transition-all duration-200 select-none hover:h-3 "
	>
		<ScrollArea.Thumb class="bg-muted-foreground rounded-full" />
	</ScrollArea.Scrollbar>
	<ScrollArea.Corner />
</ScrollArea.Root>
