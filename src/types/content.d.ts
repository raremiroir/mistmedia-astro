import type { LocaleString } from ".";


interface MistPortfolioBase {
   id: string;
   title: string|LocaleString;
}

export interface MistPortfolioItem extends MistPortfolioBase {
   description: string|LocaleString;
   images: string[];
   slug?: string|LocaleString;
   tags?: string[];
}

export interface MistPortfolioTag extends MistPortfolioBase {
   color: string;
}