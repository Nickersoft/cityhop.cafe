<script lang="ts">
	import { Popover } from '$components/ui';
	import { FadersHorizontal } from '$icons';
	import ToolbarButton from '../toolbar-button.svelte';
</script>

<Popover>
	{#snippet trigger({ props })}
		<ToolbarButton title="Settings" {...props}>
			<FadersHorizontal />
		</ToolbarButton>
	{/snippet}

	{#snippet content()}
		<p>Scene Selection</p>
	{/snippet}
</Popover>
