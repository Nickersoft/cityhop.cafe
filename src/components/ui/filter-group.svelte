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
		filters: Filter[];
	}

	const { filters }: Props = $props();

	let value: string[] = $state([]);
</script>

<ToggleGroup.Root bind:value type="multiple" class="flex flex-row gap-2">
	{#each filters as filter}
		<ToggleGroup.Item
			aria-label={`Toggle ${filter.label} Filter`}
			value={filter.value}
			class="text-secondary-foreground border-border flex h-7 flex-row items-center gap-1 rounded-full border bg-white/10 px-3 text-sm font-medium"
		>
			<filter.icon class="size-4" />
			{filter.label}
		</ToggleGroup.Item>
	{/each}
</ToggleGroup.Root>
