<script lang="ts">
	import type { Snippet } from 'svelte';
	import { mergeProps } from 'bits-ui';

	import { type ButtonProps, Button, Tooltip } from '$components/ui';
	import { cn } from '$lib/utils';

	type Props = ButtonProps & {
		children: Snippet;
	};

	const { children, title, class: className, ...buttonProps }: Props = $props();
</script>

<Tooltip delayDuration={100}>
	{#snippet trigger({ props })}
		<Button
			{...mergeProps(props, buttonProps)}
			class={cn('slide-in [&_svg]:size-4!', className)}
			aria-label={title}
			variant="link"
			size="icon"
		>
			{@render children()}
		</Button>
	{/snippet}

	{#snippet content()}
		{title}
	{/snippet}
</Tooltip>
