<script lang="ts">
	import type { Component } from 'svelte';

	import { ToggleGroup } from 'bits-ui';

	interface Filter {
		value: string;
		label: string;
		icon: Component;
	}

	interface Props {
		filters: Filter[];
	}

	const { filters }: Props = $props();

	let value: string[] = $state([]);
</script>

<ToggleGroup.Root
	bind:value
	type="multiple"
	class="h-input rounded-card-sm border-border bg-background-alt shadow-mini flex items-center gap-x-0.5 border px-[4px] py-1"
>
	{#each filters as filter}
		<ToggleGroup.Item
			aria-label={`Toggle ${filter.label} Filter`}
			value={filter.value}
			class="rounded-9px bg-background-alt hover:bg-muted active:bg-dark-10 data-[state=on]:bg-muted data-[state=off]:text-foreground-alt data-[state=on]:text-foreground active:data-[state=on]:bg-dark-10 inline-flex size-10 items-center justify-center transition-all active:scale-[0.98]"
		>
			{filter.label}
		</ToggleGroup.Item>
	{/each}
</ToggleGroup.Root>
