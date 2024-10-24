<script lang="ts">
	interface Props {
		title: string;
		children?: import('svelte').Snippet;
	}

	let { title, children }: Props = $props();
</script>

<div class="col-span-full border-b border-white/10 text-white/90 text-xl p-4">
	{title}
</div>

{@render children?.()}
