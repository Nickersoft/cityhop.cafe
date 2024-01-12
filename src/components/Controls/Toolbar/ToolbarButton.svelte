<script lang="ts">
	let className: string | undefined = undefined;

	export let title: string;
	export let icon: string | undefined = undefined;
	export let variant: 'icon' | 'full' = 'icon';
	export let action: (() => void) | string;

	export { className as class };

	$: isLink = typeof action === 'string';
	$: isIcon = variant === 'icon';
</script>

<svelte:element
	this={isLink ? 'a' : 'button'}
	{...isLink && {
		target: '_blank',
		rel: 'noreferrer noopener',
		href: action
	}}
	class={`
      flex flex-row justify-start items-center gap-2
      opacity-75 hover:opacity-100
      normal-case no-underline
      before:normal-case
      ${className}
    `}
	on:click={typeof action === 'string' ? undefined : action}
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
		<iconify-icon {icon} />
	{/if}

	{#if !isIcon}
		{title}
	{/if}
</svelte:element>
