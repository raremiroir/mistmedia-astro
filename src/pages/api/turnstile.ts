import type { APIRoute } from "astro";

const priv_key = import.meta.env.TS_SECRET_KEY;
import type { TokenValidateResponse, TurnstileVersion } from "@/types/components/form";
import { turnstile as dummyKeys } from "@/consts/dummy";

const key = dummyKeys.private.pass; // priv_key in production

const validateToken = async (token: string, secret: string, version: TurnstileVersion = 'v0') => {
   // Define the URL to fetch
   const url = `https://challenges.cloudflare.com/turnstile/${version}/siteverify`;
   
   // Fetch the URL
   const res = await fetch(url, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify({
         response: token,
         secret: secret
      })
   });

   // Await the response and parse it as JSON
   const data: TokenValidateResponse = await res.json();

   // Return the data
   return {
      success: data.success,
      error: data['error-codes']?.length ? data['error-codes'][0] : null,
   }
}

export const post: APIRoute = async ({ request }) => {
   const { turnstile_response } = await request.json();

   try {
      const { success, error } = await validateToken(turnstile_response, key);

      console.log('Captcha is valid') // success

      return new Response(
         JSON.stringify({ message: 'Captcha is valid', success, error }),
         { status: 200 }
      )
   } catch (err) {
      console.log('Captcha is invalid: ', err) // error

      return new Response(
         JSON.stringify({ message: 'Captcha is invalid', err }),
         { status: 500 }
      )
   }
}