<script lang="ts">
	import * as icons from '$lib/icons';

	import { fade, fly } from 'svelte/transition';
	import { Accordion } from 'bits-ui';

	import { ScrollArea, Typography } from '$components/ui';
	import { Searcher } from '$lib/search.svelte';
	import { nowPlaying } from '$lib/state.svelte';
	import { getStations } from '../../server/stations.remote';
	import type { StationWithGenre } from '../../server/data';

	import Search from '$components/search-ui.svelte';
	interface Props {
		onClose: () => void;
	}

	let { onClose }: Props = $props();

	const searcher = new Searcher<StationWithGenre>(getStations);

	function onStationSelect(station: StationWithGenre) {
		nowPlaying.station = station;
		onClose();
	}
</script>

<div class="w-[95vw] max-w-4xl max-md:h-screen md:aspect-[1.5]">
	<Search
		{...searcher.props}
		{onClose}
		onSearch={searcher.search}
		inputPlaceholder="Search through our curated collection of radio stations"
	>
		{#snippet children(items)}
			{@const groupedItems = Object.groupBy(items, (station) => station.genre.name)}

			<ScrollArea>
				<Accordion.Root type="multiple" class="w-full">
					{#each Object.entries(groupedItems) as [genreName, stations = []], idx}
						{@const genre = groupedItems[genreName as keyof typeof groupedItems]?.[0].genre}
						{@const Icon = icons[genre?.icon as keyof typeof icons]}

						<div in:fly={{ y: 16, delay: idx * 72 }} out:fade>
							<Accordion.Item value={genreName}>
								<Accordion.Trigger
									class="group flex w-full cursor-pointer items-center gap-2 border-b p-4"
								>
									<Icon class="size-4" />
									<Typography variant="headline" size="sm" class="flex-1 text-left">
										{genreName}
									</Typography>
									<div class="relative size-6 *:absolute *:transition-all *:duration-300">
										<icons.Plus
											width={24}
											height={24}
											class="opacity-100 group-data-[state=open]:rotate-45 group-data-[state=open]:opacity-0"
										/>
										<icons.Minus width={24} height={24} />
									</div>
								</Accordion.Trigger>
								<Accordion.Content class="overflow-hidden p-4">
									<ul class="flex w-full flex-col items-stretch gap-2">
										{#each stations.sort((a, b) => a.name.localeCompare(b.name)) as station}
											<li>
												<button
													class="hover:bg-muted/50 active:bg-muted/30 w-full cursor-pointer rounded-lg p-4 text-left font-medium transition-all duration-150"
													onclick={() => onStationSelect(station)}
												>
													<span class="line-clamp-1 w-full">
														{station.name}
													</span>
												</button>
											</li>
										{/each}
									</ul>
								</Accordion.Content>
							</Accordion.Item>
						</div>
					{/each}
				</Accordion.Root>
			</ScrollArea>
		{/snippet}
	</Search>
</div>
