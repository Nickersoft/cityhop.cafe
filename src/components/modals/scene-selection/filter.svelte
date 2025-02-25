<script lang="ts">
	import { Toggle } from 'bits-ui';
	import { cn } from '$lib/utils';
	import type { Tags } from '$lib/enums';

	interface Props {
		tag: Tags;
		pressed?: boolean;
	}

	let { tag, pressed = $bindable() }: Props = $props();
</script>

<Toggle.Root
	bind:pressed
	class={cn(
		'inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-medium transition-all',
		'border-input hover:bg-accent/50 border',
		'data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:border-primary'
	)}
>
	{tag}
</Toggle.Root>
