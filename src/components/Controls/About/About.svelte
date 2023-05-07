<script lang="ts">
	import logo from '$images/logo.png';

	import FullScreenOverlay from '../FullScreenOverlay.svelte';

	export let open: boolean;
</script>

<FullScreenOverlay bind:open>
	<div class="about">
		<img src={logo} alt="Logo" class="w-72" />

		<div class="divider" />

		<div class="flex flex-col items-center gap-8">
			<p>
				CityHop Cafe is a magical place where you can travel around the world from the comfort of
				your desk, exploring new cities by foot or by car, all while listening to chill music.
				Simply sit back and relax.
			</p>

			<ul>
				<li>Press <kbd>g</kbd> to go to a random place with new music.</li>
				<li>Press <kbd>k</kbd> to go to a random place without changing your music.</li>
				<li>Press <kbd>m</kbd> to switch to a random lofi station.</li>
			</ul>

			<p>
				Made with <span class="text-red-500">❤</span> by
				<a
					href="https://twitter.com/tylernickerson"
					rel="noreferrer"
					target="_blank"
					class="text-yellow-500"
				>
					Tyler Nickerson
				</a>
			</p>
			<a
				class="text-4xl"
				href="https://github.com/Nickersoft/cityhop.cafe"
				rel="noreferrer"
				target="_blank"
			>
				<iconify-icon icon="mdi:github" />
			</a>
		</div>
	</div>
</FullScreenOverlay>

<style lang="postcss">
	.about {
		@apply max-w-lg text-center mx-auto h-full flex flex-col justify-center items-center;

		kbd {
			@apply kbd-sm kbd;
		}
	}
</style>
