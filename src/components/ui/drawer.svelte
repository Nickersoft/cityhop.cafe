<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	import { Drawer as DrawerPrimitive } from 'vaul-svelte';

	interface Props {
		class?: string;
		trigger: Snippet<[{ props: Record<string, unknown> }]>;
		content: Snippet;
	}

	let open = $state(false);

	const { trigger, content, class: className }: Props = $props();

	function openDrawer() {
		open = true;
	}

	const triggerProps = {
		onclick: openDrawer,
		onkeyup: openDrawer
	};
</script>

{@render trigger({ props: triggerProps })}

<DrawerPrimitive.Root bind:open>
	<DrawerPrimitive.Portal>
		<DrawerPrimitive.Overlay class="fixed inset-0 z-50 bg-black/80" />
		<DrawerPrimitive.Content
			class={cn(
				'card fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto max-h-[90vh] flex-col rounded-t-[10px] border px-4 pb-4',
				className
			)}
		>
			<div class="bg-muted mx-auto mt-4 mb-4 h-2 w-[100px] rounded-full"></div>
			{@render content()}
		</DrawerPrimitive.Content>
	</DrawerPrimitive.Portal>
</DrawerPrimitive.Root>
