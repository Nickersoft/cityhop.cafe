<script lang="ts">
	import { Stack, typographyVariants } from '$components/ui';
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	const { children }: Props = $props();
</script>

<Stack
	orientation="row"
	align="center"
	justify="center"
	gap="sm"
	class={cn(
		typographyVariants({ variant: 'body', size: 'md', color: 'muted' }),
		'h-5 font-medium whitespace-nowrap italic'
	)}
>
	{@render children()}
</Stack>
