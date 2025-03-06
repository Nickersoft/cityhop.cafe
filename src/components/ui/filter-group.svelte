<script lang="ts" module>
	export interface Filter {
		value: string;
		label: string;
		icon: Component;
	}
</script>

<script lang="ts">
	import type { Component } from 'svelte';

	import { ToggleGroup } from 'bits-ui';

	interface Props {
		value: string[];
		filters: Filter[];
	}

	let { value = $bindable([]), filters }: Props = $props();
</script>

<ToggleGroup.Root
	bind:value
	type="multiple"
	class="flex flex-row items-center justify-start gap-2 overflow-auto md:justify-center"
>
	{#each filters as filter}
		<ToggleGroup.Item
			aria-label={`Toggle ${filter.label} Filter`}
			value={filter.value}
			class="text-secondary-foreground data-[state=on]:text-primary-foreground border-border data-[state=on]:bg-primary flex h-7 shrink-0 cursor-pointer flex-row items-center gap-1.5 rounded-full border bg-white/10 px-3 text-sm font-medium"
		>
			<filter.icon class="size-4" />
			{filter.label}
		</ToggleGroup.Item>
	{/each}
</ToggleGroup.Root>
