<script>
   export let flex = 'flex-row';
   export let gap = 'gap-4'
   export let align = 'items-start justify-between'
   let klass = '';
   export { klass as class };
</script>

<div class="w-full flex {flex} {gap} {align} {klass}">
   <slot/>
</div>