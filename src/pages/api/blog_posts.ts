import db from "@/firebase";

export async function get() {
   const allPosts = await db.custom.blog.fetch.all();
   return new Response(JSON.stringify(allPosts), {
      headers: {
         "content-type": "application/json",
      },
      status: 200,
   });
}