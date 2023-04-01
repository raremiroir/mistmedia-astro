
// Listen for changes in the class attribute of an element 
// (check Map component for usage)
export const onClassChange = (
   element: any, 
   callback: any
) => {
   const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
         if (
            mutation.type === 'attributes' &&
            mutation.attributeName === 'class'
         ) {
            callback(mutation.target);
         }
      });
   });

   observer.observe(element, {
      attributes: true
   });
   return observer.disconnect;
}