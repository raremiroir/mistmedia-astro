<script lang="ts">
   import type { SizeProp } from '@styles/theme';
   import NavBtn from './NavBtn.svelte';

export let href:string = '';
export let currentPath = '';

export let size:SizeProp = 'md';
export let textStart:boolean = false;

let klass:string = '';
export { klass as class};

$: active = href === currentPath || href === currentPath.replace(/\/$/, '');
</script>

<li class="unstyled list-none p-0 m-0">
	<NavBtn {href} {active} {klass} {...$$props} {size} {textStart}>
		<slot />
	</NavBtn>
</li>