<script lang="ts">
	import { Popover } from '$components/ui';
	import { FadersHorizontal, SpeakerHigh } from '$icons';

	import ToolbarButton from '../toolbar-button.svelte';
	import Slider from './slider.svelte';
</script>

<Popover>
	{#snippet trigger({ props })}
		<ToolbarButton title="Settings" {...props}>
			<SpeakerHigh />
		</ToolbarButton>
	{/snippet}

	{#snippet content()}
		<Slider />
	{/snippet}
</Popover>
