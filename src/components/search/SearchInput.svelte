<script lang="ts">
	import { Search } from '$icons';

	import Input from '$ui/Input.svelte';

	interface Props {
		value: string;
	}

	let { value = $bindable() }: Props = $props();
</script>

<Input bind:value icon={Search} type="search" />
