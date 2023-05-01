<script lang="ts">
	// IMPORT TYPES

	// IMPORT STORES
   import { fileErrors } from '@/stores';

	// IMPORT COMPONENTS
	import { FileDropzone } from '@skeletonlabs/skeleton';
	import Icon from '@/components/Media/Icon/Icon.svelte';
	import { fade } from 'svelte/transition';
   import { classes } from '@/consts/style';
   // import db from '$src/lib/firebase';

	export let name: string = 'image';

	export let files: FileList | undefined;
   $: files;

	// export let multiple: boolean = false;
	export let accept: string[] = ['png', 'jpeg', 'jpg', 'gif', 'webp'];
	let acceptedTypes = accept.map((type) => `image/${type}`).join(', ');

	export let onChange = () => {
      console.log('onChange');
	};
   
   let success:boolean = false;
   $: success;

	let klass: string = '';
	export { klass as class };

	let dragEntered = false;
	$: dragEntered;
	let fileUploaded = false;

   const validateFile = (filesToValidate: FileList|undefined = files) => {
		if (filesToValidate !== undefined) {
         if (filesToValidate.length > 1) { 
            $fileErrors = ['Je kan maar 1 bestand uploaden.']; 
            files = undefined; 
            fileUploaded = false;
         } else if (filesToValidate[0].size > 5000000) {  // = 5MB
            $fileErrors = ['Je bestand is te groot. (Max. 5MB)']; 
            files = undefined; 
            fileUploaded = false;
         } else if (!acceptedTypes.includes(filesToValidate[0].type)) {
            $fileErrors = [`Dit bestand is niet van het toegelaten type. (enkel ${accept.join(', ')})`]; 
            files = undefined; 
            fileUploaded = false;
         } else {
            $fileErrors = [];
            files = filesToValidate;
            fileUploaded = true;
         }
      }
	};

	$: validateFile(files);
   const resetFile = () => {
      files = undefined;
   }
</script>

<div class="w-full {klass}">
	<FileDropzone
		on:dragenter={() => (dragEntered = true)}
		on:dragleave={() => (dragEntered = false)}
		on:dragover={() => (dragEntered = true)}
		on:drop={(e) => validateFile(e.dataTransfer?.files)}
		{name}
		on:change={onChange}
		bind:files
      padding="p-4"
      slotLead="m-0"
		border="
         border-dashed border-2 w-full
         {dragEntered ? 'border-success-700' : fileUploaded ? 'border-success-800' : 'border-primary'}
         {dragEntered || fileUploaded ? 'variant-soft-success' : 'variant-soft-primary'} 
         hover:bg-primary/20
      "
	>
		<svelte:fragment slot="lead">
         <div class="w-full {classes.flex.center}">
            <Icon
               icon={fileUploaded ? 'solar:gallery-check-bold-duotone' : 'solar:upload-square-bold-duotone'}
               color="text-primary-500"
               width="w-20"
            />
         </div>
		</svelte:fragment>
		<svelte:fragment slot="message">
			<p class="text-center">
				{#if fileUploaded}
					<span class="font-semibold text-success-900">Bestand geüpload!</span>
				{:else}
					<span class="text-primary-700 text-sm font-bold">
                  Sleep hier een afbeelding naartoe of klik hier om een afbeelding te uploaden.
               </span>
				{/if}
			</p>
		</svelte:fragment>
		<svelte:fragment slot="meta">
			{#if fileUploaded && files}
				<p
					transition:fade={{ duration: 200 }}
					class="text-primary-700 text-center text-sm font-bold italic"
				>
					{files[0].name} - {(Math.round(files[0].size / 10000)) / 100} MB
				</p>
			{:else}
				<p
					transition:fade={{ duration: 200 }}
					class="unstyled text-primary-700 text-center text-xs italic"
				>
					Maximale grootte: 5MB<br />
					Toegestane bestandstypen: {accept.join(', ')}
				</p>
			{/if}
		</svelte:fragment>
	</FileDropzone>

   <div class="{classes.flex.between} mt-2">
      {#if fileUploaded && files}
         <span>
            <b>Naam:</b> 
            <!-- {db.blog.img.makeId(files[0])} -->
         </span>
         <button 
            on:click={() => resetFile()}
            class="btn text-sm py-1 px-2 {classes.flex.center} gap-1 opacity-60 hover:!opacity-100 !text-error-50 bg-error-700">
            <Icon
               icon="solar:trash-bin-trash-bold"
               color="!text-error-50"
               width="w-4"
            />
            Afbeelding verwijderen
         </button>
      {:else}
         <span class="text-sm text-error italic font-medium">
            {#each $fileErrors as error}
               <span>{error}</span>
            {/each}
         </span>
      {/if}
   </div>
</div>
