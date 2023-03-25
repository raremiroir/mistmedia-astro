<script>
	import HeaderLink from './HeaderLink.svelte';
	import { SITE_TITLE } from '../../../consts';
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
   import Svg from '../../Media/Svg/Svg.svelte';
   import Button from '../../Common/Button/Button.svelte';

export let currentPath = '';
$: currentPath;

export let klass = '';
export let width = '';

</script>


<!-- Might conflict with switch, dunno -->
<!-- <svelte:head>{@html `<script>${autoModeWatcher.toString()} autoModeWatcher();</script>`}</svelte:head> -->

<header class="
         flex flex-row w-full 
         justify-between items-center
         mb-8 fixed top-0 left-0 right-0
			bg-gray-50 dark:bg-surface-800 
			py-4 {klass}">
	<div class="flex flex-row {width} justify-between items-center mx-auto">
		<Button variant="minimal" flat href="/">
			<Svg logo width={150} />
		</Button>
		<nav class="flex flex-row gap-1 lg:gap-2">
			<HeaderLink {currentPath} href="/">Home</HeaderLink>
			<HeaderLink {currentPath} href="/about">About</HeaderLink>
			<HeaderLink {currentPath} href="/cases">Cases</HeaderLink>
			<HeaderLink {currentPath} href="/solutions">Solutions</HeaderLink>
			<HeaderLink {currentPath} href="/blog">Blog</HeaderLink>
			<HeaderLink {currentPath} href="/contact">Contact</HeaderLink>
		</nav>
		<div>
			<LightSwitch />
		</div>
	</div>
</header>