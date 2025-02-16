<script>
	import CurrentScene from './CurrentScene.svelte';
	import CurrentStation from './CurrentStation.svelte';
</script>

<!-- <About bind:open={isAboutShowing} />

<Settings bind:open={isSettingsOpen} />

<ChangeMusic on:select={handleMusicChange} bind:open={isChangeMusicShowing} />

<ChangeScene on:select={handleSceneChange} bind:open={isChangeSceneShowing} /> -->

<div
	class="fixed inset-0 z-30 flex flex-col justify-end opacity-0 transition-all duration-300 ease-in-out in-data-[active=true]:translate-y-0 in-data-[active=true]:opacity-100"
>
	<!-- <Toolbar on:openAbout={showAbout} on:openSettings={showSettings} /> -->

	<div class="from-background/100 translate-y-2 bg-linear-to-t p-4 pt-64">
		<div class="container mx-auto grid grid-cols-1 lg:grid-cols-2">
			<CurrentScene />
			<CurrentStation />
		</div>
	</div>
</div>
