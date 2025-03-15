<script lang="ts">
	import { SceneTypes } from '$lib/enums';
	import { isMobile, nowPlaying } from '$lib/state.svelte';

	import { SceneSelection } from '$components/modals';
	import { ArrowsClockwise } from '$lib/icons';

	import * as MediaPanel from '../media-panel';

	let open = $state(false);

	const component = $derived(
		isMobile.current
			? import('$components/ui/drawer.svelte').then(({ default: Drawer }) => Drawer)
			: import('$components/ui/popover.svelte').then(({ default: Popover }) => Popover)
	);
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

	{#await component then Component}
		<Component bind:open sideOffset={40} class="max-md:h-[90vh]">
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
		</Component>
	{/await}
</MediaPanel.Root>
