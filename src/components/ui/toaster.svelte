<script lang="ts" module>
	export { toast } from 'svelte-sonner';
</script>

<script lang="ts">
	import { Toaster as Sonner, type ToasterProps as SonnerProps } from 'svelte-sonner';
	const props: SonnerProps = $props();
</script>

<Sonner
	theme="dark"
	class="toaster group"
	toastOptions={{
		unstyled: true,
		classes: {
			toast:
				'group toast group-[.toaster]:bg-background/75 group-[.toaster]:p-4 group-[.toaster]:text-sm group-[.toaster]:rounded-md group-[.toaster]:backdrop-blur-lg group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
			description: 'group-[.toast]:text-muted-foreground',
			actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
			cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground'
		}
	}}
	{...props}
/>
