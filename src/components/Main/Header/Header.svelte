<script lang="ts">
	import { LightSwitch } 	from '@skeletonlabs/skeleton';
   import Svg 					from '@comp/Media/Svg/Svg.svelte';
   import Button 				from '@comp/Common/Button/Button.svelte';
	import HeaderLink 		from './HeaderLink.svelte';

	import type { NavItem } from '@tstype/components/header';

	export let currentPath = '';
	$: currentPath;

	export let navItems: NavItem[] = [
		{ label: 'Home', href: '/' },
		{ label: 'About', href: '/about' },
		{ label: 'Cases', href: '/cases' },
		{ label: 'Solutions', href: '/solutions' },
		{ label: 'Blog', href: '/blog' },
		{ label: 'Contact', href: '/contact' },
	];


	export let klass = '';
	export let width = '';

</script>
<header class="
         flex flex-row w-full z-30
         justify-between items-center
         mb-8 fixed top-0 left-0 right-0
			backdrop-blur-md
			shadow-xl shadow-surface-900/10 dark:shadow-xl dark:shadow-primary-400/3
			bg-surface-100/20	 dark:bg-surface-800/20 
			py-6 {klass}">
	<div class="flex flex-row {width} justify-between items-center mx-auto">
		<Button variant="minimal" flat href="/">
			<Svg logo size={150} />
		</Button>
		<nav class="flex flex-row gap-1 lg:gap-2">
			{#each navItems as item}
				<HeaderLink {currentPath} href={item.href}>{item.label}</HeaderLink>
			{/each}
		</nav>
		<div>
			<slot name="lang-selector"/>
			<LightSwitch />
		</div>
	</div>
</header>