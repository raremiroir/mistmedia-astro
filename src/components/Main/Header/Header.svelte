<script>
	import HeaderLink from './HeaderLink.svelte';
	import { SITE_TITLE } from '../../../consts';
	import { AppBar, LightSwitch, autoModeWatcher } from '@skeletonlabs/skeleton';

export let currentPath = '';
$: currentPath;
</script>


<!-- Might conflict with switch, dunno -->
<svelte:head>{@html `<script>${autoModeWatcher.toString()} autoModeWatcher();</script>`}</svelte:head>

<header class="
         flex flex-row w-full 
         justify-between items-center
         mb-8">
	<AppBar 
		gridColumns="grid-cols-3" 
		slotDefault="place-self-center" slotTrail="place-content-end"
		class="w-full"
	>
		<svelte:fragment slot="lead">
			<h2 class="my-2">
				{SITE_TITLE}
			</h2>
		</svelte:fragment>
		<nav>
			<HeaderLink {currentPath} href="/">Home</HeaderLink>
			<HeaderLink {currentPath} href="/about">Over Ons</HeaderLink>
			<HeaderLink {currentPath} href="/diensten">Onze Diensten</HeaderLink>
			<HeaderLink {currentPath} href="/blog">Blog</HeaderLink>
			<HeaderLink {currentPath} href="/contat">Contact</HeaderLink>
		</nav>
		<svelte:fragment slot="trail">
			<LightSwitch />
		</svelte:fragment>
	</AppBar>
</header>