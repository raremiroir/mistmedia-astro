<script lang="ts">
import type { HTMLAttributes } from 'astro/types';
import Button from '../../Atoms/Button/Button.svelte'

export let href:string = '';
export let currentPath = '';

let klass:string = '';
export { klass as class};

$: active = href === currentPath || href === currentPath.replace(/\/$/, '');
</script>


<Button
	href={href}
	klass="{klass}"
	variant="soft"
	color="primary"
	{active} flat tile ripple
	{...$$props}
>
	<slot />
</Button>