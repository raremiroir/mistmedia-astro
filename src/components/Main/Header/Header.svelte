<script>
import HeaderLink from './HeaderLink.svelte';
import { SITE_TITLE } from '../../../consts';
import { AppBar } from '@skeletonlabs/skeleton';

export let currentPath = '';
$: currentPath;
</script>

<header class="
         flex flex-row w-full 
         justify-between items-center
         mb-8">
	<h2 class="my-2">
		{SITE_TITLE}
	</h2>
	<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		(title)
		<svelte:fragment slot="trail">(actions)</svelte:fragment>
	</AppBar>
	<nav>
		<HeaderLink {currentPath} href="/">Home</HeaderLink>
		<HeaderLink {currentPath} href="/about">Over Ons</HeaderLink>
		<HeaderLink {currentPath} href="/diensten">Onze Diensten</HeaderLink>
		<HeaderLink {currentPath} href="/blog">Blog</HeaderLink>
		<HeaderLink {currentPath} href="/contat">Contact</HeaderLink>
	</nav>
</header>