<script lang="ts">
	import { SceneTypes } from '$enums';
	import { getYouTubeLink } from '$lib';
	import { nowPlaying } from '$state';
	import { YouTubeLogoFill } from '$icons';

	import { Button, Link, Typography, Stack, Popover } from '$components/ui';
	import { SceneSelection } from '$components/modals';

	let sceneButton: HTMLElement | null = $state(null);
	let open = $state(false);
</script>

<Stack
	orientation="row"
	gap="lg"
	align="center"
	justify="between"
	wrap
	class="border-opacity-20 gap-0.5 border-b border-white pb-4 lg:border-r lg:border-b-0 lg:pr-8 lg:pb-0"
>
	<Stack
		orientation="column"
		align="start"
		justify="start"
		class="w-full gap-0.5 md:w-auto md:grow"
	>
		<span class="glow">
			{#if nowPlaying.scene?.type === SceneTypes.walk}
				You are currently walking in
			{:else}
				You are currently driving in
			{/if}
		</span>

		<Stack
			orientation="row"
			align="center"
			gap="sm"
			justify="start"
			class="cursor-pointer font-medium"
		>
			<Typography variant="headline" size="md" class="glow">
				{nowPlaying.scene?.name}
			</Typography>

			<Link
				variant="link"
				size="icon"
				href={getYouTubeLink(nowPlaying.scene?.videoID)}
				class="tooltip tooltip-top translate-y-1"
				data-tip="Watch on YouTube"
			>
				<YouTubeLogoFill />
			</Link>
		</Stack>
	</Stack>

	<Popover bind:open>
		{#snippet trigger({ props })}
			<Button
				{...props}
				variant="link"
				data-active={open}
				class="shrink-0 rounded-full data-[active=true]:bg-white/10 data-[active=true]:opacity-100"
			>
				Change Scene
			</Button>
		{/snippet}

		{#snippet content()}
			<SceneSelection onClose={() => (open = false)} />
		{/snippet}
	</Popover>
</Stack>
