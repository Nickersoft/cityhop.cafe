<script>
	import CurrentScene from './current-scene.svelte';
	import CurrentStation from './current-station.svelte';
</script>

<div
	class="card container flex translate-y-4 flex-col items-center justify-center border opacity-0 transition-all duration-300 in-data-[active=true]:translate-y-0 in-data-[active=true]:opacity-100 max-md:px-0 md:flex-row md:gap-4 md:rounded-full"
>
	<CurrentScene />
	<div class="bg-border h-px w-full md:h-full md:w-px"></div>
	<CurrentStation />
</div>
