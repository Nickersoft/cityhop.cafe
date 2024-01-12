<script lang="ts">
	import { page } from '$app/stores';
	import Alert from '$components/Alert.svelte';
	import { getSharableURL } from '$lib/utils';
	import copy from 'copy-to-clipboard';
	import { fly } from 'svelte/transition';

	import ToolbarButton from './ToolbarButton.svelte';

	let showCopyConfirmation = false;

	function copyURL() {
		copy(getSharableURL($page.url));
		showCopyConfirmation = true;
	}
</script>

<Alert bind:open={showCopyConfirmation}>
	<div
		in:fly={{ y: 10, delay: 200 }}
		class="w-full h-full flex flex-col justify-center text-lg gap-4 items-center"
	>
		<iconify-icon icon="mdi:link-variant" width={64} height={64} />
		Copied a sharable link to your clipboard!
	</div>
</Alert>

<ToolbarButton icon="mdi:link-variant" action={copyURL} title="Copy link" />
