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
export type InputItem = {
   enabled: boolean;
   disabled?: boolean;
   placeholder?: string;
   required?: boolean;
}
export type InputItems = InputItem[];

export type TextareaItem = InputItem & {
   rows?: number;
}
export type SelectItem = InputItem & {
   options: string[];
}

// Chosen form inputs
export type ChosenInputs = {
   name?: InputItem;
   email?: InputItem;
   phone?: InputItem;

   company?: InputItem;
   job?: InputItem;

   subject?: InputItem;
   message?: TextareaItem;
   file?: InputItem;

   address?: InputItem;
   city?: InputItem;
   state?: InputItem;
   zip?: InputItem;
   country?: SelectItem;

   date?: InputItem;
   time?: InputItem;
   text?: InputItem;
   number?: InputItem;

   turnstile_response?: InputItem;
   accept_terms?: InputItem;
}