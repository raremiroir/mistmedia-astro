export type NavItem = {
   label: string;
   href: string;
   items?: {
      header?: string;
      items: NavItem[];
   }[];
}