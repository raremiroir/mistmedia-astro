<script lang="ts">
	import Button from "@/components/Common/Button/Button.svelte";
   import type { SizeProp } from "@styles/theme";

	export let href:string;
	export let klass = ''
	export let active = false;

	export let textStart:boolean = false;
	
	export let size:SizeProp = 'md';
</script>

<Button
	href={href}
	klass="{klass}"
	variant="minimal"
	color="surface_alt"
	shadow="none"
	{size} block
	{active} flat tile ripple
	{...$$props}
>
	<div class="w-full flex flex-row gap-2 items-center { textStart ? 'justify-start' : 'justify-center'}">
		<slot />
	</div>
</Button>