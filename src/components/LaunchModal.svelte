<!-- Open the modal using ID.showModal() method -->
<script lang="ts">
	import me from '$images/me.jpg';
	import { onMount } from 'svelte';

	import Button from './Button.svelte';

	let modal: HTMLDialogElement;

	onMount(() => {
		setTimeout(() => {
			modal.showModal();
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
			<h3 class="font-bold text-lg text-left">Want your own site to look as nice as this one?</h3>
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
				> that gives you unlimited design engineering for a flat monthly fee. The best part? You get
				to work directly with me!
			</p>
			<p>
				It would mean so much if you checked it out. Let's make your product look amazing together
				🎉
			</p>
			<div class="flex flex-col-reverse lg:flex-row lg:pl-16 justify-end pt-8 gap-4">
				<Button
					variant="ghost"
					grow
					action={() => {
						modal.close();
					}}
				>
					Nah, I'm good
				</Button>
				<Button iconPlacement="after" grow action="https://kojo.design" icon="mdi:arrow-right">
					Let's do it
				</Button>
			</div>
		</div>
	</div>
</dialog>
