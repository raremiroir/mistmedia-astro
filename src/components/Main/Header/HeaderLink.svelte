<script lang="ts">
import Button from '../../Common/Button/Button.svelte'

export let href:string = '';
export let currentPath = '';

let klass:string = '';
export { klass as class};

$: active = href === currentPath || href === currentPath.replace(/\/$/, '');
</script>

<Button
	href={href}
	klass="{klass}"
	variant="minimal"
	color="surface_alt"
	shadow="none"
	size="md"
	{active} flat tile ripple
	{...$$props}
>
	<slot />
</Button>