export const mailToAdmin = async({ subject = '', message = '', }) => {

   // console.log(subject, message)
   let success = false;

   const bodyData = JSON.stringify({ subject, message });

   await fetch (`/src/pages/api/mail.json.ts`, {
      method: 'POST',
      body: bodyData,
      headers: {
         'Content-Type': 'application/json',
      }
   }).then((res) => {
      // console.log(res);
      success = true;
   })
   .catch((err) => {
      console.error(err);
      success = false;
   })

   return success;
}