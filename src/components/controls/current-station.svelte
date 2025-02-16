<script lang="ts">
	import { YouTubeLogoFill } from '$icons';
	import { nowPlaying, preferences } from '$state';
	import { cn } from '$lib';

	import { Stack, Button, Link, Marquee, Typography } from '$components/ui';
	import { typographyVariants } from '$components/ui/typography.svelte';

	const shouldMarquee = $derived((nowPlaying.station?.name.length ?? 0) > 45);
</script>

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
		<Stack orientation="row" align="center" justify="center" gap="sm">
			<!-- <Equalizer muted={userPreferences.muteMusic} /> -->

			<Typography variant="title" size="md" class="glow">
				{#if preferences.current.muteMusic}
					Music muted
				{:else}
					Now playing
				{/if}
			</Typography>

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
