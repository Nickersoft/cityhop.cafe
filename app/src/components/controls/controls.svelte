<script>
	import NowPlaying from './now-playing';
	import Toolbar from './toolbar';
</script>

<div
	id="controls-overlay"
	class="max pointer-events-none fixed inset-x-0 top-0 bottom-0 z-40 flex flex-col justify-end transition-all duration-300 ease-in-out in-data-[active=true]:pointer-events-auto md:bottom-4"
>
	<Toolbar />
	<NowPlaying />
</div>
