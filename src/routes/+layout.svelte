<script>
	import 'iconify-icon';

	import { MetaTags } from 'svelte-meta-tags';

	import { page } from '$app/stores';

	import '../app.postcss';

	import { onMount } from 'svelte';

	onMount(() => {
		navigator.mediaSession.setActionHandler('play', function () {
			/* Code excerpted. */
		});
		navigator.mediaSession.setActionHandler('pause', function () {
			/* Code excerpted. */
		});
		navigator.mediaSession.setActionHandler('seekbackward', function () {
			/* Code excerpted. */
		});
		navigator.mediaSession.setActionHandler('seekforward', function () {
			/* Code excerpted. */
		});
		navigator.mediaSession.setActionHandler('previoustrack', function () {
			/* Code excerpted. */
		});
		navigator.mediaSession.setActionHandler('nexttrack', function () {
			/* Code excerpted. */
		});
	});

	const siteTitle = 'CityHop';

	const siteDescription =
		'Take leisurely walks and drives around the world while chilling to lofi music 🎶';

	const siteURL = 'https://www.cityhop.cafe/';

	const ogImage = `${$page.url.origin}/og.jpg`;

	const twtImage = `${$page.url.origin}/twitter.jpg`;
</script>

<MetaTags
	title="CityHop | Aesthetic walks and drives from around the world"
	description={siteDescription}
	canonical={siteURL}
	openGraph={{
		url: siteURL,
		title: siteTitle,
		description: siteDescription,
		images: [{ url: ogImage }],
		site_name: 'CityHop'
	}}
	twitter={{
		cardType: 'summary_large_image',
		title: siteTitle,
		description: siteDescription,
		image: twtImage
	}}
/>

<slot />
