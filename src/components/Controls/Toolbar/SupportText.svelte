<script lang="ts">
	import { BAC_LINK, IS_DECEMBER, IS_OCTOBER } from '$lib/constants';
	import { getSpooky, getXmas } from '$lib/utils';

	import ToolbarButton from './ToolbarButton.svelte';
</script>

{#if IS_OCTOBER}
	<ToolbarButton
		class="text-orange-200 opacity-100!"
		variant="full"
		icon="mdi:ghost"
		action={getSpooky}
		title="Get Spooky"
	/>
{:else if IS_DECEMBER}
	<ToolbarButton
		class="text-green-200 opacity-100!"
		variant="full"
		icon="mdi:snowflake"
		action={getXmas}
		title="Get Festive"
	/>
{:else}
	<ToolbarButton variant="full" action={BAC_LINK} title="Support CityHop" />
{/if}
