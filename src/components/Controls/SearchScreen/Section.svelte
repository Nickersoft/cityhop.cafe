<script>
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [header]
	 * @property {import('svelte').Snippet} [list]
	 */

	/** @type {Props} */
	let { header, list } = $props();
</script>

<div
	class="flex flex-row gap-4 pl-6 py-4 justify-start items-center uppercase text-white font-medium"
>
	{@render header?.()}
</div>

<ul class="flex flex-col pl-10 w-full">
	{@render list?.()}
</ul>
