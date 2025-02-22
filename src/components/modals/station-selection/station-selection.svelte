<script lang="ts">
	import Search from '$components/search-ui.svelte';
	import { ScrollArea } from '$components/ui';
	import { Accordion } from 'bits-ui';
	import { Searcher } from '$lib';
	import { nowPlaying } from '$state';
	import type { StationWithGenre } from '$data/stations';

	interface Props {
		open: boolean;
		onClose: () => void;
	}

	let { open = $bindable(), onClose }: Props = $props();

	const searcher = new Searcher<StationWithGenre>('stations');

	function onStationSelect(station: StationWithGenre) {
		nowPlaying.station = station;
		onClose();
	}
</script>

<div class="aspect-[1.3] w-[max(60vw,800px)] max-w-7xl">
	<Search
		{...searcher.props}
		onSearch={searcher.search}
		inputPlaceholder="Search through our curated collection of radio stations"
	>
		{#snippet children(items)}
			{@const groupedItems = Object.groupBy(items, (station) => station.genre)}

			<ScrollArea>
				<Accordion.Root type="multiple" class="px-4">
					{#each Object.entries(groupedItems) as [genre, stations]}
						<Accordion.Item value={genre}>
							<Accordion.Trigger
								class="flex w-full items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180"
							>
								{genre}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="h-4 w-4 transition-transform duration-200"
								>
									<polyline points="6 9 12 15 18 9" />
								</svg>
							</Accordion.Trigger>
							<Accordion.Content class="pt-0 pb-4">
								<div class="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
									{#each stations as station}
										<button
											class="hover:bg-muted flex items-center gap-4 rounded-lg border p-4 transition-colors"
											onclick={() => onStationSelect(station)}
										>
											<!-- <img
												src={station.image}
												alt={station.name}
												class="h-12 w-12 rounded-md object-cover"
											/> -->
											<div class="text-left">
												<div class="font-medium">{station.name}</div>
												<div class="text-muted-foreground text-sm">{station.description}</div>
											</div>
										</button>
									{/each}
								</div>
							</Accordion.Content>
						</Accordion.Item>
					{/each}
				</Accordion.Root>
			</ScrollArea>
		{/snippet}
	</Search>
</div>
