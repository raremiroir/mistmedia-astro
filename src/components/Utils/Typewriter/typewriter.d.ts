export interface TypewriterProps {
   // The animation mode to be used	
   mode: 'concurrent' | 'cascade' | 'loop' | 'loopOnce' | 'loopRandom' | 'scramble';
   interval: number;             // The interval (in milliseconds) between each letter, you can also pass a array of distinct intervals to mimic human typing
   cursor: boolean;              // Enables/disables the cursor on the Typewriter animation
   keepCursorOnFinish: boolean;  // Keep the cursor visible (indefinitely, or for a given amount of time, in milliseconds) after the animation has finished	
   delay: number;                // The interval (in milliseconds) before the animation starts	
   showCursorOnDelay: boolean;   // (only usable when delay is not 0) Shows the cursor during delay period
   disabled: boolean;            // Enables/disables the typewriter animation	
   element: string;              // The element to be used, defaults to 'span'
   wordInterval: number;         // (loop, loopOnce and loopRandom modes only) Sets the interval (in milliseconds) between each word
   unwriteInterval: number;      // (loop, loopOnce and loopRandom modes only) The interval (in milliseconds) between each letter unwrite, if not defined it uses interval
   scrambleDuration?: number;     // (scramble mode only) Sets the duration (in milliseconds) of the scramble animation
   scrambleSlowdown?: boolean;     // 	(scramble mode only) Enables/disables the slowdown effect right before the scramble animation ends (only works in scramble mode)
}