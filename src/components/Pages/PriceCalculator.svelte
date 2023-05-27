<script lang="ts">
   import { 
      Stepper, Step,
      ListBox, ListBoxItem 
   } from '@skeletonlabs/skeleton';

   function onNextHandler(e: any): void {
		console.log('event:next', e.detail);
	}
	function onBackHandler(e: any): void {
		console.log('event:prev', e.detail);
	}
	function onStepHandler(e: any): void {
		console.log('event:step', e.detail);
	}
	function onCompleteHandler(e: any): void {
		console.log('event:complete', e.detail);
		alert('Complete!');
	}

   // STEP 1: PICK SOLUTION
   let pickedSolutions: string[] = [];
   $: console.log(pickedSolutions);

   // STEP 2: PICK SERVICES
   const allServices = {
      web: [
         {
            title: 'Web Design',
            id: 'web-design',
         },
         {
            title: 'Web Development',
            id: 'web-development',
         },
         {
            title: 'Search Engine Optimization',
            id: 'seo',
         },
      ],
      design: [
         {
            title: 'Branding',
            id: 'branding',
         },
         {
            title: 'redactional design',
            id: 'redactional',
         },
         {
            title: 'Design for Print',
            id: 'print',
         },
      ],
      marketing: [
         {
            title: 'Social Media Marketing',
            id: 'social-media',
         },
         {
            title: 'Google Ads',
            id: 'google-ads',
         },
         {
            title: 'Email Marketing',
            id: 'email-marketing',
         },
         {
            title: 'Content Marketing',
            id: 'content-marketing',
         },
         {
            title: 'Search Engine Optimization',
            id: 'seo',
         },
      ],
      '3d': [
         {
            title: '3D Printing',
            id: '3d-printing',
         },
         {
            title: '3D Animation',
            id: '3d-animation',
         },
         {
            title: '3D Modeling',
            id: '3d-modeling',
         },
      ],
   }
   let pickedServices: string[] = [];


</script>


<Stepper
   stepTerm="Stap"
   on:complete={onCompleteHandler}
   on:step={onStepHandler}
   on:next={onNextHandler}
   on:back={onBackHandler}
>
   <!-- STEP 1: PICK SOLUTION -->
	<Step stepTerm="Solution">
		<svelte:fragment slot="header">
         Which solution do you need?
      </svelte:fragment>
      
      <ListBox multiple>
         <ListBoxItem bind:group={pickedSolutions} name="solution" value="web">Web Solutions</ListBoxItem>
         <ListBoxItem bind:group={pickedSolutions} name="solution" value="design">Graphic Design</ListBoxItem>
         <ListBoxItem bind:group={pickedSolutions} name="solution" value="marketing">Online Marketing</ListBoxItem>
         <ListBoxItem bind:group={pickedSolutions} name="solution" value="3d">3D Visualization</ListBoxItem>
      </ListBox>
      
	</Step>
	<Step>
		<svelte:fragment slot="header">
         Which services do you need?
      </svelte:fragment>
      <ListBox multiple>
         <ListBoxItem bind:group={pickedSolutions} name="solution" value="web">Web Solutions</ListBoxItem>
         <ListBoxItem bind:group={pickedSolutions} name="solution" value="design">Graphic Design</ListBoxItem>
         <ListBoxItem bind:group={pickedSolutions} name="solution" value="marketing">Online Marketing</ListBoxItem>
         <ListBoxItem bind:group={pickedSolutions} name="solution" value="3d">3D Visualization</ListBoxItem>
      </ListBox>
	</Step>
</Stepper>
			