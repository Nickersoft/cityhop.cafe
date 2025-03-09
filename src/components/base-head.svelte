<script lang="ts">
	import '@fontsource-variable/figtree';

	import '$styles/app.css';

	import { MetaTags } from 'svelte-meta-tags';

	import figtreeVariableItalic from '@fontsource-variable/figtree/files/figtree-latin-wght-italic.woff2';
	import figtreeVariable from '@fontsource-variable/figtree/files/figtree-latin-wght-normal.woff2';

	import { page } from '$app/state';
	import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE } from '$lib/consts';

	const ogImage = $derived(`${page.url.origin}/og.jpg`);
	const twtImage = $derived(`${page.url.origin}/twitter.jpg`);

	interface Props {
		title: string;
	}

	const { title }: Props = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<link rel="icon" type="image/png" href="/favicon.png" />

	{#each [figtreeVariable, figtreeVariableItalic] as ft}
		<link rel="preload" as="font" crossorigin="anonymous" href={ft} type="font/woff2" />
	{/each}
</svelte:head>

<MetaTags
	{title}
	description={SITE_DESCRIPTION}
	canonical={page.url.origin}
	openGraph={{
		url: page.url.origin,
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		images: [{ url: ogImage }],
		siteName: SITE_NAME
	}}
	twitter={{
		cardType: 'summary_large_image',
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		image: twtImage
	}}
/>
