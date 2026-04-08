<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';

	import { buttonVariants, type ButtonProps } from './button.svelte';

	type Props = ButtonProps & SvelteHTMLElements['a'];

	const { href, children, variant, size, ...props }: Props = $props();

	const openInNew = $derived(href && /^(http|mailto|tel)/.test(href));
</script>

<a
	{...props}
	{...openInNew && { target: '_blank', rel: 'noopener noreferrer' }}
	{href}
	class={buttonVariants({ variant, size })}
>
	{@render children?.()}
</a>
