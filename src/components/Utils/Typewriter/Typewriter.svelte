<script lang="ts">
   import TypeWriter from 'svelte-typewriter';
   import type { TypewriterProps } from './typewriter';

   export let text:string = 'Text here...';

   export let mode:TypewriterProps['mode'] = 'concurrent';
   export let element:TypewriterProps['element'] = 'span';
   export let delay:TypewriterProps['delay'] = 0;
   export let interval:TypewriterProps['interval'] = 80;
   export let wordInterval:TypewriterProps['wordInterval'] = 1500;
   export let unwriteInterval:TypewriterProps['unwriteInterval'] = 50;
   export let cursor:TypewriterProps['cursor'] = true;
   export let keepCursorOnFinish:TypewriterProps['keepCursorOnFinish'] = false;
   export let showCursorOnDelay:TypewriterProps['showCursorOnDelay'] = false;
   export let disabled:TypewriterProps['disabled'] = false;
   export let scrambleDuration:TypewriterProps['scrambleDuration'] = 3000;
   export let scrambleSlowdown:TypewriterProps['scrambleSlowdown'] = true;

   const typewriterProps: TypewriterProps = { mode, element, delay, interval, wordInterval, unwriteInterval, cursor, keepCursorOnFinish, showCursorOnDelay, disabled, scrambleDuration, scrambleSlowdown }

   let klass = 'text-surface-700 dark:text-surface-200';
   export { klass as class };
</script>

<TypeWriter {...typewriterProps} >
   <div class="{klass}"><slot>{text}</slot></div>
</TypeWriter>