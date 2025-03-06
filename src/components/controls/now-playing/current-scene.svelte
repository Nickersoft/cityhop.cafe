<script lang="ts">
	import { SceneTypes } from '$lib/enums';
	import { nowPlaying } from '$lib/state.svelte';

	import { Popover } from '$components/ui';
	import { SceneSelection } from '$components/modals';
	import { ArrowsClockwise } from '$lib/icons';

	import * as MediaPanel from '../media-panel';

	let open = $state(false);
</script>

<MediaPanel.Root>
	{#if nowPlaying.scene?.country}
		<div
			class="size-8 shrink-0 rounded-full shadow-[inset_0_3px_8px_--alpha(white/50%),inset_0_-3px_8px_--alpha(black/20%)] ring-1 ring-white/10 md:size-12"
			style={`background-image: url("/flags/${nowPlaying.scene?.country}.svg")`}
		></div>
	{/if}

	<MediaPanel.Header>
		<MediaPanel.Label>
			{#if nowPlaying.scene?.type === SceneTypes.walk}
				Currently walking in
			{:else}
				Currently driving in
			{/if}
		</MediaPanel.Label>

		{#if nowPlaying.scene}
			<MediaPanel.Title videoID={nowPlaying.scene.videoID} title={nowPlaying.scene.name} />
		{/if}
	</MediaPanel.Header>

	<Popover bind:open sideOffset={40}>
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
			<SceneSelection onClose={() => (open = false)} />
		{/snippet}
	</Popover>
</MediaPanel.Root>
