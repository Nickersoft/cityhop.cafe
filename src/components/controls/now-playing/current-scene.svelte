<script lang="ts">
	import { SceneTypes } from '$enums';
	import { nowPlaying } from '$state';

	import { Popover, MediaPanel } from '$components/ui';
	import { SceneSelection } from '$components/modals';
	import { ArrowsClockwise } from '$icons';

	let open = $state(false);
</script>

<MediaPanel.Root>
	<MediaPanel.Header>
		<MediaPanel.Label>
			{#if nowPlaying.scene?.type === SceneTypes.walk}
				You are currently walking in
			{:else}
				You are currently driving in
			{/if}
		</MediaPanel.Label>

		{#if nowPlaying.scene}
			<MediaPanel.Title videoID={nowPlaying.scene.videoID} title={nowPlaying.scene.name} />
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
