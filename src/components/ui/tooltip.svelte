<script lang="ts">
	import { Tooltip } from 'bits-ui';
	import type { Snippet } from 'svelte';

	interface Props {
		trigger: Snippet<[{ props: Record<string, unknown> }]>;
		content: Snippet;
	}

	const { trigger, content }: Props = $props();
</script>

<Tooltip.Provider>
	<Tooltip.Root delayDuration={0}>
		<Tooltip.Trigger>
			{#snippet child(args)}
				{@render trigger(args)}
			{/snippet}
		</Tooltip.Trigger>
		<Tooltip.Content class="bg-popover text-popover-foreground" sideOffset={8}>
			{@render content()}
		</Tooltip.Content>
	</Tooltip.Root>
</Tooltip.Provider>
