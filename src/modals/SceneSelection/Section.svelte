<script lang="ts">
	interface Props {
		title: string;
		children?: import('svelte').Snippet;
	}

	let { title, children }: Props = $props();
</script>

<div class="col-span-full border-b border-white/10 p-4 text-xl text-white/90">
	{title}
</div>

{@render children?.()}
