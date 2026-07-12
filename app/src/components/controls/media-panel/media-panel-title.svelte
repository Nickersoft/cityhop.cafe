<script lang="ts">
	import { Button, Marquee, Stack, Typography } from '$components/ui';
	import { YouTubeLogoFill } from '$lib/icons';
	import { getYouTubeLink } from '$lib/youtube';
	import { Tooltip } from '$components/ui';

	interface Props {
		title: string;
		videoID: string;
		disableMarquee?: boolean;
	}

	const { title, videoID, disableMarquee }: Props = $props();
</script>

<Stack
	orientation="row"
	align="center"
	justify="start"
	class="h-8 w-full gap-0.5 overflow-hidden font-medium"
>
	{#if (title.length ?? 0) > 32 && !disableMarquee}
		<Typography variant="headline" size="sm" class="glow grow leading-none">
			{#snippet child({ props })}
				<Marquee {...props}>
					{title}&nbsp;&nbsp;{title}
				</Marquee>
			{/snippet}
		</Typography>
	{:else}
		<Typography variant="headline" size="md" class="glow line-clamp-1 leading-none">
			{title}
		</Typography>
	{/if}
	<Tooltip>
		{#snippet trigger({ props })}
			<Button {...props} variant="link" size="icon" href={getYouTubeLink(videoID)}>
				<YouTubeLogoFill />
			</Button>
		{/snippet}

		{#snippet content()}
			<span>Watch on YouTube</span>
		{/snippet}
	</Tooltip>
</Stack>
