<script lang="ts">
	import * as MediaPanel from '../media-panel';

	import { nowPlaying, preferences } from '$lib/state.svelte';
	import { Equalizer, Popover } from '$components/ui';
	import { ArrowsClockwise } from '$lib/icons';
	import { StationSelection } from '$components/modals';

	let open = $state(false);
</script>

<MediaPanel.Root>
	<Equalizer muted={preferences.current.muteMusic} />

	<MediaPanel.Header>
		<MediaPanel.Label>
			{#if preferences.current.muteMusic}
				Music muted
			{:else}
				Now playing
			{/if}
		</MediaPanel.Label>

		{#if nowPlaying.station}
			<MediaPanel.Title videoID={nowPlaying.station.trackID} title={nowPlaying.station.name} />
		{/if}
	</MediaPanel.Header>

	<Popover bind:open align="end" sideOffset={40}>
		{#snippet trigger({ props })}
			<MediaPanel.Button
				{...props}
				data-active={open}
				class="data-[active=true]:bg-white/10 data-[active=true]:opacity-100"
			>
				<ArrowsClockwise />
				Change Station
			</MediaPanel.Button>
		{/snippet}

		{#snippet content()}
			<StationSelection onClose={() => (open = false)} />
		{/snippet}
	</Popover>
</MediaPanel.Root>
