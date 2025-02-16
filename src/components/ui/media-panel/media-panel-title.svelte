<script lang="ts">
	import { Button, Marquee, Stack, Typography } from '$components/ui';
	import { YouTubeLogoFill } from '$icons';
	import { getYouTubeLink } from '$lib/youtube';
	import Tooltip from '../tooltip.svelte';

	interface Props {
		title: string;
		videoID: string;
	}

	const { title, videoID }: Props = $props();
</script>

<Stack
	orientation="row"
	align="center"
	justify="start"
	class="w-full cursor-pointer gap-0.5 font-medium"
>
	{#if (title.length ?? 0) > 45}
		<Typography variant="headline" size="sm" class="glow grow">
			{#snippet child({ props })}
				<Marquee {...props}>
					{title}&nbsp;&nbsp;{title}
				</Marquee>
			{/snippet}
		</Typography>
	{:else}
		<Typography variant="headline" size="md" class="glow">
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
