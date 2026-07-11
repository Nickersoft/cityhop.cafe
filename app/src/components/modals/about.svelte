<script lang="ts">
	import Logo from '$components/logo.svelte';

	import { Typography, Stack, Button } from '$components/ui';
	import { BAC_LINK, REQUEST_LINK } from '$lib/consts';
	import { Hotkeys } from '$lib/enums';
	import { Coffee } from '$lib/icons';
</script>

<header class="mb-5 w-full border-b pt-2 pb-3">
	<Logo class="h-[52px] w-[160px]" />
</header>

<Stack
	orientation="row"
	class="**:[p_a]:text-foreground items-start justify-start gap-8 max-md:flex-col **:[p_a]:underline"
>
	<article class="flex-1 space-y-4">
		<Typography color="subtle">
			CityHop is a magical corner of the internet that allows you to instantly transport to any city
			in the world while relaxing to a variety of different music. It's a place to relax, unwind,
			and explore the world from the comfort of your own home.
		</Typography>

		<Typography color="subtle">
			Started in 2023 by design engineer <a href="https://tylernickerson.com">Tyler Nickerson</a>,
			CityHop has since attracted users from all around the world, and has been featured in
			<a href="https://pointmetotheplane.boardingarea.com/cityhop-cafe-travel/">
				Point Me To The Plane
			</a>,
			<a href="https://gigazine.net/gsc_news/en/20230611-cityhop/"> GIGAZINE</a>, and
			<a href="https://amass.jp/167209/">amass</a>.
		</Typography>

		<Typography color="subtle" class="[&_a]:text-foreground">
			This website is fully open-source and available on <a
				href="https://github.com/Nickersoft/cityhop.cafe"
			>
				GitHub
			</a>.
		</Typography>

		<Stack orientation="row" class="py-2 max-md:flex-col max-md:items-stretch">
			<Button href={BAC_LINK} rel="noopener noreferrer" target="_blank">
				<Coffee />
				Buy Tyler a Coffee
			</Button>
			<Button variant="outline" rel="noopener noreferrer" target="_blank" href={REQUEST_LINK}>
				Request a city or station
			</Button>
		</Stack>
	</article>

	<div class="bg-foreground/4 w-full max-w-[300px] rounded-lg border max-md:hidden">
		<Typography variant="label" color="muted" size="md" class="mb-4 block border-b p-4">
			Keyboard Shortcuts
		</Typography>

		<div class="space-y-2 pb-3">
			{#snippet shortcutItem(label: string, hotkey: string)}
				<Stack orientation="row" justify="between" class="px-4">
					<Typography size="md" color="subtle">{label}</Typography>
					<kbd class="bg-foreground/5 rounded-sm border px-2 py-1 text-xs font-semibold">
						{hotkey}
					</kbd>
				</Stack>
			{/snippet}

			{@render shortcutItem('Randomize scene', Hotkeys.RANDOM_SCENE)}
			{@render shortcutItem('Randomize station', Hotkeys.RANDOM_STATION)}
			{@render shortcutItem('Randomize everything', Hotkeys.RANDOM)}
		</div>
	</div>
</Stack>
