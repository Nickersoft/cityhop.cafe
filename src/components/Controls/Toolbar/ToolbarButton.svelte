<script lang="ts">

	interface Props {
		class?: string | undefined;
		title: string;
		icon?: string | undefined;
		variant?: 'icon' | 'full';
		action: (() => void) | string;
	}

	let {
		class: className = undefined,
		title,
		icon = undefined,
		variant = 'icon',
		action
	}: Props = $props();

	

	let isLink = $derived(typeof action === 'string');
	let isIcon = $derived(variant === 'icon');
</script>

<svelte:element
	this={isLink ? 'a' : 'button'}
	{...isLink && {
		target: '_blank',
		rel: 'noreferrer noopener',
		href: action
	}}
	class={`
      flex flex-row justify-center items-center gap-2
      opacity-75 hover:opacity-100
      normal-case no-underline
      before:normal-case
      ${className}
    `}
	onclick={typeof action === 'string' ? undefined : action}
	role="button"
	tabindex="0"
	class:tooltip={isIcon}
	class:tooltip-bottom={isIcon}
	class:btn={isIcon}
	class:btn-square={isIcon}
	class:btn-link={isIcon}
	class:text-white={isIcon}
	class:text-2xl={isIcon}
	class:whitespace-nowrap={!isIcon}
	class:px-4={!isIcon}
	{...isIcon && { 'data-tip': title }}
>
	{#if icon}
		<iconify-icon {icon}></iconify-icon>
	{/if}

	{#if !isIcon}
		{title}
	{/if}
</svelte:element>
