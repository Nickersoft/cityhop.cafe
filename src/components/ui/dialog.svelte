<script lang="ts">
	import { X } from '$lib/icons';
	import { cn } from '$lib/utils';
	import { Dialog } from 'bits-ui';
	import type { Snippet } from 'svelte';

	interface Props {
		trigger: Snippet<[{ props: Record<string, unknown> }]>;
		content: Snippet;
	}

	const { trigger, content }: Props = $props();
</script>

<Dialog.Root>
	<Dialog.Trigger child={trigger} />
	<Dialog.Portal>
		<Dialog.Overlay
			class="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80"
		/>
		<Dialog.Content
			class={cn(
				'card',
				'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] rounded-xl border p-5 outline-hidden duration-300 sm:max-w-[800px] md:w-full'
			)}
		>
			<Dialog.Close class="absolute top-0 right-0 cursor-pointer p-4 opacity-75 hover:opacity-100">
				<X class="size-6" />
			</Dialog.Close>

			{@render content()}
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
