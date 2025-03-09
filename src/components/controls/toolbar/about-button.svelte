<script>
	import { About } from '$components/modals';
	import { Button } from '$components/ui';
	import { isMobile } from '$lib/state.svelte';

	const component = $derived(
		isMobile.current
			? import('$components/ui/drawer.svelte').then(({ default: Drawer }) => Drawer)
			: import('$components/ui/dialog.svelte').then(({ default: Dialog }) => Dialog)
	);
</script>

{#await component then Component}
	<Component>
		{#snippet trigger({ props })}
			<Button {...props} class="text-sm tracking-normal normal-case" variant="link">
				About CityHop
			</Button>
		{/snippet}

		{#snippet content()}
			<About />
		{/snippet}
	</Component>
{/await}
