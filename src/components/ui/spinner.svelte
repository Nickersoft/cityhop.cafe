<script lang="ts">
	import { cn } from '$lib/utils';

	interface Props {
		size?: 'sm' | 'md' | 'lg' | string;
		class?: string;
	}

	const { size = 'md', class: className }: Props = $props();

	// Map size options to pixel values
	const sizeMap = {
		sm: 24,
		md: 32,
		lg: 48
	};

	const sizeValue = $derived(sizeMap[size as keyof typeof sizeMap] || size);
</script>

<div
	class={cn('text-foreground animate-spin', className)}
	style={`width: ${sizeValue}px; height: ${sizeValue}px;`}
	aria-label="Loading"
	role="status"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="100%"
		height="100%"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<path d="M21 12a9 9 0 1 1-6.219-8.56" />
	</svg>
</div>
