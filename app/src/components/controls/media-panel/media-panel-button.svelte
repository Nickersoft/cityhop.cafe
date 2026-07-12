<script lang="ts">
	import { Button, type ButtonProps } from '$components/ui';
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	type Props = ButtonProps & {
		children: Snippet;
	};

	const { children, class: className, ...props }: Props = $props();
</script>

<Button {...props} variant="ghost" class={cn('shrink-0', className)}>
	{@render children()}
</Button>
