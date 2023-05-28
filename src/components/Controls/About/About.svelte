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
				on
				<a
					class="text-yellow-500"
					href="https://github.com/Nickersoft/cityhop.cafe"
					rel="noreferrer"
					target="_blank"
				>
					GitHub
				</a>
			</p>

			<a
				href="https://www.buymeacoffee.com/tnick"
				target="_blank"
				rel="noopener noreferrer"
				class="btn btn-outline btn-primary hover:!bg-white px-8 transform-gpu mt-4 normal-case"
			>
				<iconify-icon icon="bx:coffee-togo" class="mr-2" />
				Buy me a coffee
			</a>

			<!-- <a
				class="text-4xl"
				href="https://github.com/Nickersoft/cityhop.cafe"
				rel="noreferrer"
				target="_blank"
			>
				<iconify-icon icon="mdi:github" />
			</a> -->
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
