<script lang="ts">
	import { Stack } from '$components/ui';
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	const { children }: Props = $props();
</script>

<Stack
	orientation="column"
	align="start"
	justify="start"
	class="w-full md:w-auto md:grow"
	gap="none"
>
	{@render children()}
</Stack>
