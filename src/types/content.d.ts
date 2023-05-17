import type { DocumentReference, Timestamp } from "firebase/firestore";
import type { LocaleString } from ".";


interface MistPortfolioBase {
   id: string;
   title: string;
}

export interface MistPortfolioItem extends MistPortfolioBase {
   enabled: boolean;
   description: LocaleString;
   images: {
      id: string;
      isMain: boolean;
   }[];
   slug: string|LocaleString;
   categories?: DocumentReference[];
   tags?: string[];
}

export interface MistPortfolioTag extends MistPortfolioBase {
   color: string;
}

// ====================================================

export interface MistClient {
   id: string;
   name: string;
   description: string;
   logo: string;
   coverImage: string;
   site: string;
   portfolio: DocumentReference[];
   client_since: Timestamp;
}
