<script>
   import FormRow from "@comp/Form/FormRow.svelte";
   import Input from "@comp/Form/Input.svelte";
   import TextArea from "@comp/Form/TextArea.svelte";
</script>

<form class="w-full flex flex-col gap-4 py-4">

   <!-- Name -->
   <FormRow>
      <!-- First Name -->
      <Input 
         label="Given Name" 
         name="first_name" 
         placeholder="e.g. John"
      />
      <!-- Last Name -->
      <Input 
         label="Surname" 
         name="last_name" 
         placeholder="e.g. Doe"
      />
   </FormRow>
   
   <!-- Email -->
   <FormRow>
      <Input 
         label="Email" 
         name="email" 
         placeholder="e.g. john.doe@mail.com"
         type="email"
      />
   </FormRow>
   
   <!-- Organization -->
   <FormRow>
      <Input 
         label="Organization" 
         name="organization" 
         placeholder="e.g. John Doe Inc."
      />
   </FormRow>

   <!-- Subject -->
   <FormRow>
      <Input 
         label="Subject" 
         name="subject" 
         placeholder="e.g. I have a question about..."
      />
   </FormRow>

   <!-- Message -->
   <FormRow>
      <TextArea 
         label="Message" 
         name="message" 
         placeholder="Your message here..."
      />
   </FormRow>


</form>