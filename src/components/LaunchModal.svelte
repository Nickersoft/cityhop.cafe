<!-- Open the modal using ID.showModal() method -->
<script lang="ts">
	import me from '$images/me.jpg';
	import { onMount } from 'svelte';

	import Button from './Button.svelte';

	let modal = $state<Optional<HTMLDialogElement>>();

	onMount(() => {
		setTimeout(() => {
			modal?.showModal();
		}, 1500);
	});
</script>

<dialog bind:this={modal} class="modal">
	<div
		class="modal-box duration-300 bg-opacity-75 flex flex-col items-center justify-center gap-8 backdrop-blur-2xl"
	>
		<img
			alt="Me"
			src={me}
			width="175"
			height="175"
			class="w-full h-56 rounded-md object-bottom object-cover"
		/>

		<div class="flex flex-col">
			<h3 class="font-bold text-lg text-left">Loving this site?</h3>
			<p class="py-4">
				Hi there! I'm
				<a
					href="https://tylernickerson.com"
					target="_blank"
					class="text-accent"
					rel="noopenner noreferrer">Tyler</a
				>, the creator CityHop. I just launched a brand-new service called
				<a href="https://kojo.design" target="_blank" class="text-accent" rel="noopenner noreferrer"
					>Kojo</a
				> that gives you unlimited design engineering for a flat monthly fee.
			</p>
			<p>
				It's launching on ProductHunt today, and if you're a fan of my work, it'd mean the world to
				me if you went and showed your support. It's quick and it's free! 🙏
			</p>
			<div class="flex flex-col-reverse lg:flex-row lg:pl-16 justify-end flex-shrink-0 pt-8 gap-4">
				<Button
					variant="ghost"
					grow
					action={() => {
						modal?.close();
					}}
				>
					Nah, I'm good
				</Button>
				<Button
					iconPlacement="after"
					grow
					action="https://www.producthunt.com/posts/kojo-design"
					icon="mdi:arrow-right"
				>
					Take me there
				</Button>
			</div>
		</div>
	</div>
</dialog>
