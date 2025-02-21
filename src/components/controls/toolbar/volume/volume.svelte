<script lang="ts">
	import { Popover } from '$components/ui';
	import { SpeakerHigh } from '$icons';
	import { preferences } from '$state';

	import ToolbarButton from '../toolbar-button.svelte';
	import Slider from './slider.svelte';
</script>

<Popover align="end">
	{#snippet trigger({ props })}
		<ToolbarButton title="Settings" {...props}>
			<SpeakerHigh />
		</ToolbarButton>
	{/snippet}

	{#snippet content()}
		<div class="w-96 space-y-4 p-4">
			<Slider
				label="Scene Volume"
				bind:value={preferences.current.sceneVolume}
				bind:muted={preferences.current.muteScene}
			/>
			<Slider
				label="Music Volume"
				bind:value={preferences.current.musicVolume}
				bind:muted={preferences.current.muteMusic}
			/>
		</div>
	{/snippet}
</Popover>
