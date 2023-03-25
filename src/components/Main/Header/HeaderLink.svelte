<script lang="ts">
import type { HTMLAttributes } from 'astro/types';

export let href:string = '';
export let currentPath = '';

let klass:string = '';
export { klass as class};

$: active = href === currentPath || href === currentPath.replace(/\/$/, '');
</script>

<a href={href} class="{klass}" class:active>
	<span>
		<slot />
	</span>
</a>

<style>
	a {
		display: inline-block;
		text-decoration: none;
	}
	a.active {
		font-weight: bolder;
		text-decoration: underline;
	}
</style>
