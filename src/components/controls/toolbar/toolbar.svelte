<script lang="ts">
	import { goto } from '$app/navigation';

	import { Stack, Button } from '$components/ui';
	import { BAC_LINK, IS_DECEMBER, IS_OCTOBER } from '$lib/consts';
	import { BlueSky, CurrencyDollarSimple } from '$lib/icons';
	import { getPostURL } from '$lib/share';
	import { getFestive, getSpooky } from '$lib/api';
	import { nowPlaying } from '$lib/state.svelte';

	import Settings from './volume';
	import CopyLink from './copy-link.svelte';
	import ToolbarButton from './toolbar-button.svelte';
	import VisitorCount from './visitor-count.svelte';
	import AboutButton from './about-button.svelte';

	function shareOnBluesky(e: MouseEvent) {
		e.stopPropagation();

		const url = getPostURL(nowPlaying);

		if (url) {
			window.location.href = url;
		}
	}
</script>

<nav
	class="
    card absolute inset-x-0 top-0 z-9999 container
    flex -translate-y-4 flex-col items-center justify-between py-1
    opacity-0 transition-all duration-300
    in-data-[active=true]:translate-y-0 in-data-[active=true]:opacity-100 max-md:gap-4 max-md:py-4
    md:flex-row md:rounded-b-full
  "
>
	<VisitorCount />

	<Stack orientation="row" gap="sm" align="center">
		<CopyLink />

		<ToolbarButton onclick={shareOnBluesky} title="Share on Bluesky">
			<BlueSky />
		</ToolbarButton>

		<ToolbarButton href={BAC_LINK} title="Support CityHop">
			<CurrencyDollarSimple />
		</ToolbarButton>

		<Settings />

		<AboutButton />

		{#if IS_OCTOBER}
			<Button
				onclick={getSpooky}
				class="px-0 text-sm font-bold tracking-normal text-orange-500 normal-case opacity-100"
				variant="link"
			>
				🎃&nbsp;&nbsp;Get spooky
			</Button>
		{/if}

		{#if IS_DECEMBER}
			<Button
				onclick={getFestive}
				class="px-0 text-sm font-bold tracking-normal text-green-500 normal-case opacity-100"
				variant="link"
			>
				🎄&nbsp;&nbsp;Get festive
			</Button>
		{/if}
	</Stack>
</nav>
