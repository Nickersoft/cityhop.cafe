<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';

	import { buttonVariants, type ButtonProps } from './Button.svelte';

	type Props = ButtonProps & SvelteHTMLElements['a'];

	const { href, children, variant, size, ...props }: Props = $props();

	const openInNew =
		href?.startsWith('http') || href?.startsWith('mailto') || href?.startsWith('tel');
</script>

<a
	{...props}
	{...openInNew && { target: '_blank', rel: 'noopener noreferrer' }}
	{href}
	class={buttonVariants({ variant, size })}
>
	{@render children?.()}
</a>
