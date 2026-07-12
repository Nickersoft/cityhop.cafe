<script lang="ts">
	import '$styles/app.css';

	import { MetaTags } from 'svelte-meta-tags';

	import { page } from '$app/state';
	import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE } from '$lib/consts';

	const ogImage = $derived(`${page.url.origin}/og.jpg`);

	interface Props {
		title: string;
	}

	const { title }: Props = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<link rel="icon" type="image/png" href="/favicon.png" />
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
		image: ogImage
	}}
/>
