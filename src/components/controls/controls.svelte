<script>
	import NowPlaying from './now-playing';
	import Toolbar from './toolbar';
</script>

<div
	id="controls-overlay"
	class="fixed inset-x-0 top-0 bottom-4 z-30 flex flex-col justify-end transition-all duration-300 ease-in-out"
>
	<Toolbar />
	<NowPlaying />
</div>
