<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Component } from 'svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';

	type Props = SvelteHTMLElements['input'] & {
		icon: Component;
	};

	let { class: className, value = $bindable(), icon: Icon, ...props }: Props = $props();
</script>

<div
	class={cn(
		'border-input file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
		className
	)}
>
	<Icon class="text-foreground opacity-50" />
	<input {...props} bind:value type="text" class="w-full bg-transparent outline-hidden" />
</div>
