<script>
	import CurrentScene from './current-scene.svelte';
	import CurrentStation from './current-station.svelte';
</script>

<div
	class="from-background/30 to-background/60 container flex flex-col items-center justify-center gap-4 rounded-full border bg-linear-to-br shadow-lg backdrop-blur-2xl lg:flex-row"
>
	<CurrentScene />
	<div class="bg-border h-px w-full lg:h-full lg:w-px"></div>
	<CurrentStation />
</div>
