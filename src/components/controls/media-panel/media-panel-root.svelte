<script lang="ts">
	import { Stack } from '$components/ui';
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	const { children }: Props = $props();
</script>

<Stack
	orientation="row"
	gap="md"
	align="center"
	justify="between"
	class="flex-1 py-4 max-md:w-full max-md:px-4"
>
	{@render children()}
</Stack>
