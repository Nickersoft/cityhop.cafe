<script lang="ts">
	import Search from '$components/search-ui.svelte';
	import { ScrollArea, Stack, Typography } from '$components/ui';
	import { Accordion } from 'bits-ui';
	import { Searcher } from '$lib';
	import { nowPlaying } from '$state';
	import type { StationWithGenre } from '$data/stations';
	// import { Music } from '$icons'; // Add this import for the music icon

	interface Props {
		onClose: () => void;
	}

	let { onClose }: Props = $props();

	const searcher = new Searcher<StationWithGenre>('stations');

	function onStationSelect(station: StationWithGenre) {
		nowPlaying.station = station;
		onClose();
	}

	function toTitleCase(str: string) {
		return str.replace(
			/\w\S*/g,
			(txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
		);
	}
</script>

<div class="aspect-[1.5] w-[max(60vw,800px)] max-w-7xl">
	<Search
		{...searcher.props}
		onSearch={searcher.search}
		inputPlaceholder="Search through our curated collection of radio stations"
	>
		{#snippet children(items)}
			{@const groupedItems = Object.groupBy(items, (station) => station.genre)}

			<ScrollArea>
				<Accordion.Root type="multiple" class="w-full">
					{#each Object.entries(groupedItems) as [genre, stations]}
						<Accordion.Item value={genre}>
							<Accordion.Trigger class="flex w-full cursor-pointer items-center gap-2 border-b p-4">
								<!-- <Music class="size-4" /> -->
								<Typography variant="headline" size="sm">
									{toTitleCase(genre)}
								</Typography>
							</Accordion.Trigger>
							<Accordion.Content class="overflow-hidden p-4">
								<ul class="flex flex-col gap-2">
									{#each stations as station}
										<li>
											<button
												class="hover:bg-muted/50 active:bg-muted/30 flex w-full cursor-pointer items-center gap-4 rounded-lg p-4 text-left transition-all duration-150"
												onclick={() => onStationSelect(station)}
											>
												<div class="font-medium">{station.name}</div>
											</button>
										</li>
									{/each}
								</ul>
							</Accordion.Content>
						</Accordion.Item>
					{/each}
				</Accordion.Root>
			</ScrollArea>
		{/snippet}
	</Search>
</div>
