<script lang="ts">
	import { YouTubeLogoFill } from '$icons';
	import { SceneTypes } from '$lib/enums';
	import { nowPlaying, preferences } from '$lib/state.svelte';
	import { cn, getYouTubeLink } from '$lib/utils';

	import Stack from '$ui/Stack.svelte';
	import Button from './ui/Button.svelte';
	import Link from './ui/Link.svelte';
	import Marquee from './ui/Marquee.svelte';
	import Typography, { typographyVariants } from './ui/Typography.svelte';

	const shouldMarquee = $derived((nowPlaying.station?.name.length ?? 0) > 45);
</script>

{#snippet currentScene()}
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

		<Button variant="link" class="shrink-0">Change Scene</Button>
	</Stack>
{/snippet}

{#snippet currentStation()}
	<Stack
		orientation="row"
		wrap
		align="center"
		justify="between"
		gap="sm"
		class="w-full flex-1 pt-4 lg:pt-0 lg:pl-8"
	>
		<Stack
			orientation="column"
			align="start"
			justify="start"
			class="w-full gap-0.5 md:w-auto md:grow"
		>
			<Stack orientation="row" align="center" justify="end" gap="sm">
				<!-- <Equalizer muted={userPreferences.muteMusic} /> -->

				<span class="glow">
					{#if preferences.value.musicVolume}
						Music muted
					{:else}
						Now playing
					{/if}
				</span>

				<!-- <MuteButton class="text-base" bind:muted={userPreferences.muteMusic} /> -->

				<Link
					variant="link"
					size="icon"
					href="https://youtube.com/watch?v={nowPlaying.station?.trackID}"
					class="tooltip tooltip-top"
					data-tip="Listen on YouTube"
				>
					<YouTubeLogoFill />
				</Link>
			</Stack>

			{#if shouldMarquee}
				<Marquee class={cn('glow', typographyVariants({ size: 'sm', variant: 'headline' }))}>
					{nowPlaying.station?.name}&nbsp;&nbsp;{nowPlaying.station?.name}
				</Marquee>
			{:else}
				<span class="glow w-full overflow-hidden text-lg text-ellipsis whitespace-nowrap md:w-auto">
					{nowPlaying.station?.name}
				</span>
			{/if}
		</Stack>

		<Button variant="link" class="shrink-0">Change Music</Button>
	</Stack>
{/snippet}

<div class="from-background/75 translate-y-2 bg-linear-to-t p-4 pt-64">
	<div class="container mx-auto grid grid-cols-1 lg:grid-cols-2">
		{@render currentScene()}
		{@render currentStation()}
	</div>
</div>
