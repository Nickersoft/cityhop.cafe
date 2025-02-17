<script lang="ts">
	import * as MediaPanel from '../media-panel';

	import { SceneTypes } from '$enums';
	import { nowPlaying } from '$state';

	import { Popover } from '$components/ui';
	import { SceneSelection } from '$components/modals';
	import { ArrowsClockwise } from '$icons';

	let open = $state(false);
</script>

<MediaPanel.Root>
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
