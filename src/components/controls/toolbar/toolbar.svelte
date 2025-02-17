<script>
	import { Stack } from '$components/ui';
	import { BAC_LINK } from '$consts';
	import { TipJar } from '$icons';

	import Settings from './settings';
	import CopyLink from './copy-link.svelte';
	import ToolbarButton from './toolbar-button.svelte';
	import VisitorCount from './visitor-count.svelte';
</script>

<nav
	class="
    card absolute inset-x-0 top-0 z-50 container
    flex h-12 -translate-y-4 flex-row
    items-center justify-between rounded-b-full
    opacity-0 transition-all duration-300
    in-data-[active=true]:translate-y-0 in-data-[active=true]:opacity-100
  "
>
	<div>
		<VisitorCount />
	</div>
	<!-- <SupportText /> -->

	<!-- <div class="mr-5 h-8 w-px border border-white/10"></div> -->

	<Stack orientation="row" gap="sm" align="center">
		<CopyLink />

		<ToolbarButton href={BAC_LINK} title="Support CityHop">
			<TipJar />
		</ToolbarButton>

		<Settings />
	</Stack>

	<!-- 	<ToolbarButton icon="mdi:cat" action="https://kittycat.cafe" title="Visit KittyCat Cafe" />

	{#if IS_OCTOBER || IS_DECEMBER}

	{/if}

	<Tweet />

	<ToolbarButton icon="mdi:heart" action={handleOpenAbout} title="About" />
	<ToolbarButton icon="mdi:settings" action={handleOpenSettings} title="Settings" />

	<Fullscreen /> -->
</nav>
