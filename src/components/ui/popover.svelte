<script lang="ts">
	import type { Snippet } from 'svelte';
	import { Popover, type PopoverContentProps, type PopoverRootProps } from 'bits-ui';

	import { ui } from '$lib/state.svelte';
	import { cn } from '$lib/utils';

	interface Props extends PopoverRootProps {
		trigger: Snippet<[{ props: Record<string, unknown> }]>;
		content: Snippet;
		class?: string;
		sideOffset?: number;
		align?: PopoverContentProps['align'];
	}

	let {
		sideOffset = 12,
		trigger,
		class: className,
		content,
		align = 'center',
		open = $bindable(false),
		...props
	}: Props = $props();

	$effect(() => {
		if (!ui.windowActive) {
			open = false;
		}
	});
</script>

<Popover.Root {...props} bind:open>
	<Popover.Trigger child={trigger} />
	<Popover.Portal to="#controls-overlay">
		<Popover.Content
			class={cn([
				'card',
				'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in',
				'data-[side=bottom]:slide-in-from-top-[10px] data-[side=left]:slide-in-from-right-[10px] data-[side=right]:slide-in-from-left-[10px] data-[side=top]:slide-in-from-bottom-[10px]',
				'data-[side=bottom]:slide-out-to-top-[10px] data-[side=left]:slide-out-to-right-[10px] data-[side=right]:slide-out-to-left-[10px] data-[side=top]:slide-out-to-bottom-[10px]',
				'z-30 overflow-hidden rounded-2xl shadow-xl',
				className
			])}
			{align}
			{sideOffset}
		>
			{@render content()}
		</Popover.Content>
	</Popover.Portal>
</Popover.Root>
