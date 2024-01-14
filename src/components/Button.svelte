<script lang="ts">
	import { cva, type VariantProps } from 'class-variance-authority';

	const button = cva('btn transform-gpu normal-case', {
		variants: {
			variant: {
				primary: 'btn-primary bg-gradient-to-b from-white to-gray-300 text-gray-950',
				ghost: 'btn-ghost'
			},
			iconPlacement: {
				before: 'flex-row',
				after: 'flex-row-reverse'
			},
			size: {
				sm: 'btn-sm px-8',
				md: 'btn-md px-8',
				lg: 'btn-lg px-8'
			},
			grow: {
				true: 'flex-1',
				false: ''
			}
		}
	});

	interface $$Props extends VariantProps<typeof button> {
		action: string | (() => void);
		icon?: string;
	}

	export let action: $$Props['action'];
	export let icon: $$Props['icon'] = undefined;
	export let variant: $$Props['variant'] = 'primary';
	export let grow: $$Props['grow'] = false;
	export let size: $$Props['size'] = 'md';
	export let iconPlacement: $$Props['iconPlacement'] = 'before';

	$: tag = typeof action === 'function' ? 'button' : 'a';
</script>

<svelte:element
	this={tag}
	{...$$props}
	{...typeof action === 'string' && {
		href: action,
		target: '_blank',
		rel: 'noopener noreferrer'
	}}
	on:click={typeof action === 'function' ? action : undefined}
	role="button"
	tabindex="0"
	class={button({ grow, iconPlacement, variant, size })}
>
	{#if icon}
		<iconify-icon {icon} class="mr-2 text-lg" />
	{/if}
	<slot />
</svelte:element>
