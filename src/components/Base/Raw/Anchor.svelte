<script lang="ts">
   export let href:string = ''
</script>
<a {...$$props} {href}>
   <slot/>
</a>