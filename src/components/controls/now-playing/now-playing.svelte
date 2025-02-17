<script>
	import CurrentScene from './current-scene.svelte';
	import CurrentStation from './current-station.svelte';
</script>

<div
	class="card container flex translate-y-4 flex-col items-center justify-center gap-4 rounded-full border opacity-0 transition-all duration-300 in-data-[active=true]:translate-y-0 in-data-[active=true]:opacity-100 lg:flex-row"
>
	<CurrentScene />
	<div class="bg-border h-px w-full lg:h-full lg:w-px"></div>
	<CurrentStation />
</div>
