import type { DocumentReference, Timestamp } from "firebase/firestore";
import type { LocaleString } from ".";


interface MistPortfolioBase {
   id: string;
   title: string;
}

export interface MistPortfolioItem extends MistPortfolioBase {
   enabled: boolean;
   description: string;
   images: {
      id: string;
      isMain: boolean;
   }[];
   slug: string;
   client: DocumentReference;
   solution_type: string;
   tags: DocumentReference[];
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

export interface FeatureCard {
   id: string;
   title: string;
   description: string;
   icon: string;
}