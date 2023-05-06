import type { Locales } from "..";

// Turnstile
export interface TokenValidateResponse {
   'error-codes': string[];
   success: boolean;
   action: string;
   cdata: string;
}
type TurnstileVersion = 'v0' | 'v1' | 'v2';

// Email
export interface SendEmailProps {
   from: string;
   to: string[];
   subject: string;
   message: string;
   cc?: string[]|string;
}

// Input types
export interface FormItem {
   required?: boolean;
   label: string;
   placeholder?: LocaleString;
   disabled?: boolean;
}
export type FormItems = FormItem[];

export type TextareaItem = FormItem & {
   rows?: number;
}
export type SelectItem = FormItem & {
   options: string[];
}

export interface FormProps {
   [key: string]: any;
   name?: {
      required?: boolean;
      first_name: string;
      last_name: string;
   },
   email?: FormItem;
   phone?: FormItem;

   organisation?: FormItem;
   job?: FormItem;
   
   subject?: FormItem;
   message?: {
      required?: boolean;
      label: string;
      placeholder?: LocaleString;
      disabled?: boolean;
      rows?: number;
   };
   
   turnstile_response?: FormItem;
   accept_terms?: FormItem;
   password?: FormItem;
}
export interface FormSchemaProps extends FormProps {
   locale: Locales;
}

export type DropZone = {
   accept?: string[];
   multiple?: boolean;
   maxFiles?: number;
   maxSize?: number;
   onDrop?: (files: FileList) => void;
}