<script lang="ts">
   import FormBase from "../Form/FormBase.svelte";
   import db from "@/firebase";
</script>

<FormBase
   title="Admin Login"
   submitText="Login"
   inputItems={{
      name: { enabled: false, required: false, },
      email: { enabled: true, required: true, },
      password: { enabled: true, required: true, },
   }}
   submitAction={async (values) => {
      await db.auth.signIn(values.email, values.password);
      
   }}
/>