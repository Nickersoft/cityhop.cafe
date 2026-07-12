<script lang="ts">
	import Toggle, { type ToggleProps } from '$components/ui/toggle.svelte';

	import { SpeakerHigh, SpeakerSlash } from '$lib/icons';
	import { cn } from '$lib/utils';

	let { class: className, pressed = $bindable(), ...props }: ToggleProps = $props();
</script>

<Toggle
	bind:pressed
	class={cn(
		'group/toggle cursor-pointer transition-all duration-300 hover:bg-transparent hover:opacity-100 data-[state=on]:bg-transparent',
		className
	)}
	{...props}
>
	<SpeakerHigh class="hidden size-4 group-data-[state=off]/toggle:block" />
	<SpeakerSlash class="block size-4 group-data-[state=off]/toggle:hidden" />
</Toggle>
