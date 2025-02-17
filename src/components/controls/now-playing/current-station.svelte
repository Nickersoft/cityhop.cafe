<script lang="ts">
	import * as MediaPanel from '../media-panel';

	import { nowPlaying, preferences } from '$state';
	import { Equalizer, Popover } from '$components/ui';
	import { SceneSelection } from '$components/modals';
	import { ArrowsClockwise } from '$icons';

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

			<!-- <MuteButton class="text-base" bind:muted={userPreferences.muteMusic} /> -->
		</MediaPanel.Label>

		{#if nowPlaying.station}
			<MediaPanel.Title videoID={nowPlaying.station.trackID} title={nowPlaying.station.name} />
		{/if}
	</MediaPanel.Header>

	<Popover bind:open>
		{#snippet trigger({ props })}
			<MediaPanel.Button
				{...props}
				data-active={open}
				class="data-[active=true]:bg-white/10 data-[active=true]:opacity-100"
			>
				<ArrowsClockwise />
				Change Scene
			</MediaPanel.Button>
		{/snippet}

		{#snippet content()}
			<SceneSelection onClose={() => (open = false)} />
		{/snippet}
	</Popover>
</MediaPanel.Root>
