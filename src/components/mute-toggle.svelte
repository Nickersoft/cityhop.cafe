<script lang="ts">
	import Toggle, { type ToggleProps } from '$components/ui/toggle.svelte';

	import { SpeakerHigh, SpeakerSlash } from '$icons';
	import { cn } from '$lib';

	const { class: className, ...props }: ToggleProps = $props();
</script>

<Toggle
	class={cn(
		'group/toggle cursor-pointer hover:bg-transparent hover:opacity-100 data-[state=on]:bg-transparent'
	)}
	{...props}
>
	<SpeakerHigh class="hidden group-data-[state=on]/toggle:block" />
	<SpeakerSlash class="block group-data-[state=on]/toggle:hidden" />
</Toggle>
