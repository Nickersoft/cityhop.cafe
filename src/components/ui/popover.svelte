<script lang="ts">
	import type { Snippet } from 'svelte';
	import { Popover, type PopoverRootProps } from 'bits-ui';

	interface Props extends PopoverRootProps {
		trigger: Snippet<[{ props: Record<string, unknown> }]>;
		content: Snippet;
	}

	let { trigger, content, open = $bindable(), ...props }: Props = $props();
</script>

<Popover.Root {...props} bind:open>
	<Popover.Trigger>
		{#snippet child(args)}
			{@render trigger(args)}
		{/snippet}
	</Popover.Trigger>
	<Popover.Portal>
		<Popover.Content
			class={[
				'from-background/75 via-background/50 to-background/95 ring-background/75 bg-linear-to-br',
				'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
				'data-[side=bottom]:slide-in-from-top-[10px] data-[side=left]:slide-in-from-right-[10px] data-[side=right]:slide-in-from-left-[10px] data-[side=top]:slide-in-from-bottom-[10px]',
				'data-[side=bottom]:slide-out-to-top-[10px] data-[side=left]:slide-out-to-right-[10px] data-[side=right]:slide-out-to-left-[10px] data-[side=top]:slide-out-to-bottom-[10px]',
				'z-30 h-[max(75vh,500px)] w-[max(60vw,800px)] overflow-hidden rounded-2xl border ring-1 shadow-xl shadow-black/20 backdrop-blur-xl'
			]}
			sideOffset={8}
		>
			{@render content()}
		</Popover.Content>
	</Popover.Portal>
</Popover.Root>
