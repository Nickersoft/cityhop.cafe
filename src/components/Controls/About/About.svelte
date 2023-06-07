<script lang="ts">
	import logo from '$images/logo.png';
	import { clickOutside } from '$lib/actions';

	import FullScreenOverlay from '../FullScreenOverlay.svelte';

	export let open: boolean;
</script>

<FullScreenOverlay bind:open>
	<div class="about" use:clickOutside={() => (open = false)}>
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

			<p>Have a city or station you'd like to see on the site?</p>

			<a
				href="https://github.com/Nickersoft/cityhop.cafe/issues/new/choose"
				target="_blank"
				rel="noopener noreferrer"
				class="btn bg-gradient-to-b from-white to-gray-300 text-gray-950 btn-md btn-primary px-8 transform-gpu normal-case"
			>
				<iconify-icon icon="mdi:hand-back-left" class="mr-2 text-lg" />
				Open a Request
			</a>

			<p class="text-sm italic">
				Psst... feel free to
				<a
					href="https://twitter.com/tylernickerson"
					rel="noreferrer"
					target="_blank"
					class="text-yellow-500"
				>
					follow me on Twitter
				</a>
				or
				<a
					class="text-yellow-500"
					href="https://github.com/Nickersoft/cityhop.cafe"
					rel="noreferrer"
					target="_blank"
				>
					contribute on GitHub!
				</a>
			</p>
		</div>
	</div>
</FullScreenOverlay>

<style lang="postcss">
	.about {
		@apply max-w-xl text-center mx-auto h-full flex flex-col justify-center items-center p-8;

		kbd {
			@apply kbd-sm kbd;
		}
	}
</style>
