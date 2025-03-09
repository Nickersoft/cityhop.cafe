<script lang="ts">
	import { Tooltip } from 'bits-ui';
	import type { Snippet } from 'svelte';

	interface Props {
		delayDuration?: number;
		trigger: Snippet<[{ props: Record<string, unknown> }]>;
		content: Snippet;
	}

	const { trigger, delayDuration = 0, content }: Props = $props();
</script>

<Tooltip.Root {delayDuration}>
	<Tooltip.Trigger>
		{#snippet child(args)}
			{@render trigger(args)}
		{/snippet}
	</Tooltip.Trigger>
	<Tooltip.Content
		class={[
			'bg-popover text-popover-foreground rounded-md p-2 text-xs font-medium',
			'data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in data-[state=delayed-open]:slide-in-from-bottom-[10%]',
			'data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:slide-out-to-bottom-[10%]'
		]}
		sideOffset={8}
	>
		{@render content()}
	</Tooltip.Content>
</Tooltip.Root>
