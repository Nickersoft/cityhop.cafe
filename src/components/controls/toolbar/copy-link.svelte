<script lang="ts">
	import { page } from '$app/state';

	import { fly } from 'svelte/transition';

	import { getSharableURL } from '$lib/share';
	import { Button, toast } from '$components/ui';
	import { Link } from '$lib/icons';
	import ToolbarButton from '../toolbar/toolbar-button.svelte';

	function copyURL() {
		navigator.clipboard.writeText(getSharableURL());
		toast('Sharable link copied to clipboard!');
	}
</script>

<ToolbarButton onclick={copyURL} title="Copy link">
	<Link />
</ToolbarButton>
