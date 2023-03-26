<script>
	import HeaderLink from './HeaderLink.svelte';
	import { LightSwitch } from '@skeletonlabs/skeleton';
   import Svg from '../../Media/Svg/Svg.svelte';
   import Button from '../../Common/Button/Button.svelte';

export let currentPath = '';
$: currentPath;

export let klass = '';
export let width = '';

</script>
<header class="
         flex flex-row w-full z-99
         justify-between items-center
         mb-8 fixed top-0 left-0 right-0
			backdrop-blur-md
			shadow-xl shadow-surface-900/10 dark:shadow-xl dark:shadow-primary-400/3
			bg-surface-100/20	 dark:bg-surface-800/20 
			py-6 {klass}">
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