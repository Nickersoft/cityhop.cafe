<script lang="ts">
	import { Popover } from '$components/ui';
	import { SpeakerHigh } from '$lib/icons';
	import { isMobile, preferences } from '$lib/state.svelte';

	import ToolbarButton from '../toolbar-button.svelte';
	import Slider from './slider.svelte';
</script>

<Popover sideOffset={isMobile ? 24 : 12} align={isMobile ? 'center' : 'end'}>
	{#snippet trigger({ props })}
		<ToolbarButton title="Settings" {...props}>
			<SpeakerHigh />
		</ToolbarButton>
	{/snippet}

	{#snippet content()}
		<div class="w-[95vw] max-w-96 space-y-4 p-4">
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
