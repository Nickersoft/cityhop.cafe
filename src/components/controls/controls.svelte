<script>
	import NowPlaying from './now-playing';
</script>

<!-- <About bind:open={isAboutShowing} />

<Settings bind:open={isSettingsOpen} />

<ChangeMusic on:select={handleMusicChange} bind:open={isChangeMusicShowing} />

<ChangeScene on:select={handleSceneChange} bind:open={isChangeSceneShowing} /> -->

<div
	class="fixed inset-x-0 top-0 bottom-4 z-30 flex flex-col justify-end opacity-0 transition-all duration-300 ease-in-out in-data-[active=true]:translate-y-0 in-data-[active=true]:opacity-100"
>
	<!-- <Toolbar on:openAbout={showAbout} on:openSettings={showSettings} /> -->

	<NowPlaying />
</div>
