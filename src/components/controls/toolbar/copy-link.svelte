<script lang="ts">
	import { getSharableURL } from '$lib/share';
	import { toast } from '$components/ui';
	import { Link } from '$lib/icons';

	import ToolbarButton from './toolbar-button.svelte';

	function copyURL() {
		navigator.clipboard.writeText(getSharableURL());
		toast.success('Sharable link copied to clipboard!');
	}
</script>

<ToolbarButton onclick={copyURL} title="Copy link">
	<Link />
</ToolbarButton>
