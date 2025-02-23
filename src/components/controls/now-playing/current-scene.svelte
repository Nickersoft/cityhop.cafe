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
	<div
		class="relative size-12 overflow-hidden rounded-full border border-white/40 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-white before:mix-blend-soft-light"
	>
		<img
			loading="lazy"
			decoding="async"
			src={`/flags/${nowPlaying.scene?.country}.svg`}
			alt="Country flag"
		/>
	</div>

	<MediaPanel.Header>
		<MediaPanel.Label>
			{#if nowPlaying.scene?.type === SceneTypes.walk}
				Currently walking in
			{:else}
				Currently driving in
			{/if}
		</MediaPanel.Label>

		{#if nowPlaying.scene}
			<MediaPanel.Title
				disableMarquee
				videoID={nowPlaying.scene.videoID}
				title={nowPlaying.scene.name}
			/>
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
				Change Scene
			</MediaPanel.Button>
		{/snippet}

		{#snippet content()}
			<SceneSelection onClose={() => (open = false)} />
		{/snippet}
	</Popover>
</MediaPanel.Root>
