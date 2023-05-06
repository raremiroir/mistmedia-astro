import type { Locales } from '@/types';
import * as yup from 'yup';

import { labels, alert, placeholder, validation } from './translations';
import type { FormItem, FormProps, FormSchemaProps } from '@/types/components/form';

export const getYupObject = (props: FormProps, validation: any) => {
   let yupObj = {};

   if (!!props.name) {
      yupObj = { ...yupObj,
         first_name: yup.string()
            .min(2,   `${props.name.first_name} ${validation.field_too_short}`)
            .max(60,  `${props.name.first_name} ${validation.field_too_long}`)
            .required(`${props.name.first_name} ${validation.required}`),
         last_name: yup.string()
            .min(2,   `${props.name.last_name} ${validation.field_too_short}`)
            .max(60,  `${props.name.last_name} ${validation.field_too_long}`)
            .required(`${props.name.last_name} ${validation.required}`),
      }
   }
   if (!!props.email) {
      yupObj = { ...yupObj,
         email: yup.string()
            .email(`${props.email.label} ${validation.email_error}`)
            .required(`${props.email.label} ${validation.required}`),
      }
   }
   if (!!props.phone) {
      yupObj = { ...yupObj,
         phone: yup.string()
            .matches(/^((\+|00)\d{1,3})?[\s.-]?\d{1,4}[\s.-]?\d{1,4}[\s.-]?\d{1,4}[\s.-]?\d{1,4}|^$/, `${props.phone.label} ${validation.phone_error}`),
      }
   }
   if (!!props.organisation) {
      yupObj = { ...yupObj,
         organisation: props.organisation.required ? yup.string()
            .min(2, `${props.organisation.label} ${validation.field_too_short}`)
            .max(60, `${props.organisation.label} ${validation.field_too_long}`)
            .required(`${props.organisation.label} ${validation.required}`)
         : yup.string()
            .max(60, `${props.organisation.label} ${validation.field_too_long}`)
            .optional()
      }
   }
   if (!!props.job) {
      yupObj = { ...yupObj,
         job: props.job.required ? yup.string()
            .min(2, `${props.job.label} ${validation.field_too_short}`)
            .max(60, `${props.job.label} ${validation.field_too_long}`)
            .required(`${props.job.label} ${validation.required}`)
         : yup.string()
            .max(60, `${props.job.label} ${validation.field_too_long}`)
            .optional()
      }
   }
   if (!!props.subject) {
      yupObj = { ...yupObj,
         subject: props.subject.required ? yup.string()
            .min(2, `${props.subject.label} ${validation.field_too_short}`)
            .max(60, `${props.subject.label} ${validation.field_too_long}`)
            .required(`${props.subject.label} ${validation.required}`)
         : yup.string()
            .max(60, `${props.subject.label} ${validation.field_too_long}`)
            .optional()
      }
   }
   if (!!props.message) {
      yupObj = { ...yupObj,
         message: props.message.required ? yup.string()
            .min(2, `${props.message.label} ${validation.field_too_short}`)
            .max(1000, `${props.message.label} ${validation.field_too_long}`)
            .required(`${props.message.label} ${validation.required}`)
         : yup.string()
            .max(1000, `${props.message.label} ${validation.field_too_long}`)
            .optional()
      }
   }
   if (!!props.terms) {
      yupObj = { ...yupObj,
         terms: yup.boolean()
            .oneOf([true], `${props.terms.label} ${validation.required}`)
            .required(`${props.terms.label} ${validation.required}`),
      }
   }
   if (!!props.turnstile) {
      yupObj = { ...yupObj,
         turnstile: yup.string().matches(/^.*\S.*$/, `${validation.turnstile_error}`)
      }
   }
   if (!!props.password) {
      yupObj = { ...yupObj,
         password: yup.string()
            .min(8, `${props.password.label} ${validation.field_too_short}`)
            .max(60, `${props.password.label} ${validation.field_too_long}`)
            .required(`${props.password.label} ${validation.required}`),
      }
   }

   return yup.object().shape(yupObj);
}


const userPasswordSchema = {
   email: yup.string().email().required(),
   password: yup.string().min(8).max(60).required(),
};

export const loginSchema = yup.object().shape(userPasswordSchema);

