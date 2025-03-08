<script lang="ts">
	import * as MediaPanel from '../media-panel';

	import { isMobile, nowPlaying, preferences } from '$lib/state.svelte';
	import { Equalizer, Popover } from '$components/ui';
	import { ArrowsClockwise } from '$lib/icons';
	import { StationSelection } from '$components/modals';

	let open = $state(false);

	const component = $derived(
		isMobile.current
			? import('$components/ui/drawer.svelte').then(({ default: Drawer }) => Drawer)
			: import('$components/ui/popover.svelte').then(({ default: Popover }) => Popover)
	);
</script>

<MediaPanel.Root>
	<Equalizer bind:muted={preferences.current.muteMusic} />

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

	{#await component then Component}
		<Component bind:open align="end" sideOffset={40}>
			{#snippet trigger({ props })}
				<MediaPanel.Button
					{...props}
					data-active={open}
					class="data-[active=true]:bg-white/10 data-[active=true]:opacity-100"
				>
					<ArrowsClockwise />
					Change
				</MediaPanel.Button>
			{/snippet}

			{#snippet content()}
				<StationSelection onClose={() => (open = false)} />
			{/snippet}
		</Component>
	{/await}
</MediaPanel.Root>
