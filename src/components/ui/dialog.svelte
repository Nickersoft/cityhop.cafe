<script lang="ts" module>
	export interface DialogContext {
		close: () => void;
	}
</script>

<script lang="ts">
	import { onMount, setContext, type Snippet } from 'svelte';
	import { on } from 'svelte/events';
	import { fly, scale } from 'svelte/transition';
	import { computePosition, flip, shift, offset, type Placement } from '@floating-ui/dom';

	import { cn } from '$lib';

	import { portal } from '$actions/portal';
	import { clickOutside } from '$actions/click-outside';

	interface Props {
		open: boolean;
		onOpenChange?: (open: boolean) => void;
		children?: Snippet;
		anchor?: HTMLElement;
		placement?: Placement;
	}

	let {
		onOpenChange,
		open = $bindable(),
		children,
		anchor = undefined,
		placement
	}: Props = $props();

	let dialog: HTMLDivElement | null = $state(null);

	// Update position when anchor changes
	$effect(() => {
		if (!anchor || !dialog || !placement) return;

		computePosition(anchor, dialog, {
			placement,
			middleware: [
				offset(8), // Add some spacing
				flip(), // Flip to opposite side if no space
				shift() // Shift along axis if needed
			]
		}).then(({ x, y }) => {
			if (!dialog) return;

			Object.assign(dialog.style, {
				left: `${x}px`,
				top: `${y}px`,
				position: 'absolute'
			});
		});
	});

	function handleClose() {
		open = false;
		onOpenChange?.(open);
	}

	onMount(() => {
		const removeKeydownListener = on(window, 'keydown', (event: KeyboardEvent) => {
			if (event.key === 'Escape' && open) {
				handleClose();
			}
		});

		return () => {
			removeKeydownListener();
		};
	});

	setContext('dialog', { close: handleClose } satisfies DialogContext);

	function animate(node: HTMLElement, { duration }: { duration: number }) {
		switch (placement) {
			case 'top':
			case 'top-end':
			case 'top-start':
				return fly(node, { y: 15, duration });
			case 'bottom':
			case 'bottom-end':
			case 'bottom-start':
				return fly(node, { y: -15, duration });
			case 'left':
			case 'left-end':
			case 'left-start':
				return fly(node, { x: 15, duration });
			case 'right':
			case 'right-end':
			case 'right-start':
				return fly(node, { x: -15, duration });
			default:
				return scale(node, { start: 1.1, duration });
		}
	}
</script>

{#if open}
	<div
		bind:this={dialog}
		use:clickOutside={handleClose}
		use:portal
		class={cn(
			'from-background/50 to-background/95 ring-background/75 z-9999 overflow-hidden rounded-2xl border bg-radial ring-1 shadow-xl shadow-black/20 backdrop-blur-md',
			// Center positioning when no anchor
			!anchor ? 'fixed inset-0 size-200' : 'h-[max(75vh,500px)] w-full max-w-[60vw]'
		)}
		transition:animate={{ duration: 300 }}
	>
		{@render children?.()}
	</div>
{/if}
