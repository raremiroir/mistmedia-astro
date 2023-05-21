// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Mist Media';
export const SITE_DESCRIPTION = 'Welcome to my website!';

export const ADDRESS = {
   street: 'Vekestraat 34',
   lat: 51.22424678676408, 
   lng: 4.410601398443491
}

export const ICONS: {[key:string]: {[key:string]: any}} = {
   services: {
      web:    'ph:globe-simple-duotone',
      design: 'ph:paint-bucket-duotone',
      seo:    'ph:rocket-launch-duotone',
      social: 'ph:megaphone-simple-duotone',
      av:     'ph:film-slate-duotone',
      '3d':   'ph:cube-duotone',
   },
   features: {
      web: {
         fast: 'LightningBolt',
         responsive: 'DevicesResponsive',
         secure: 'Security',
         accessible: 'Accessibility',
         uxui: 'CorporateBranding',
         seo: 'ArrowsGrow',
         tech: 'GearsTurning',
         support: 'QuestionMarks',
      }
   }
}

export const TECHSTACK: {[key:string]: {[key:string]: string}} = {
   indesign: {
      name: 'Adobe InDesign',
      svg: 'assets/svg/brandstech/adobe-indesign.svg',
      url: 'https://www.adobe.com/products/indesign.html'
   },
   photoshop: {
      name: 'Adobe Photoshop',
      svg: 'assets/svg/brandstech/adobe-photoshop.svg',
      url: 'https://www.adobe.com/products/photoshop.html'
   },
   premierepro: {
      name: 'Adobe Premiere Pro',
      svg: 'assets/svg/brandstech/adobe-premierepro.svg',
      url: 'https://www.adobe.com/products/premiere.html'
   },
   figma: {
      name: 'Figma',
      svg: 'assets/svg/brandstech/figma.svg',
      url: 'https://www.figma.com/'
   },
   html5: {
      name: 'HTML5',
      svg: 'assets/svg/brandstech/html5.svg',
      url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
   },
   css3: {
      name: 'CSS3',
      svg: 'assets/svg/brandstech/css3.svg',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
   },
   javascript: {
      name: 'JavaScript',
      svg: 'assets/svg/brandstech/javascript.svg',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
   },
   typescript: {
      name: 'TypeScript',
      svg: 'assets/svg/brandstech/typescript.svg',
      url: 'https://www.typescriptlang.org/'
   },
   mdn: {
      name: 'Mozilla Developer Network',
      svg: 'assets/svg/brandstech/mdn.svg',
      url: 'https://developer.mozilla.org/en-US/'
   },
   nodejs: {
      name: 'Node.js',
      svg: 'assets/svg/brandstech/nodejs.svg',
      url: 'https://nodejs.org/en/'
   },
   npm: {
      name: 'npm',
      svg: 'assets/svg/brandstech/npm.svg',
      url: 'https://www.npmjs.com/'
   },
   git: {
      name: 'Git',
      svg: 'assets/svg/brandstech/git.svg',
      url: 'https://git-scm.com/'
   },
   github: {
      name: 'GitHub',
      svg: 'assets/svg/brandstech/github.svg',
      url: 'https://github.com/'
   },
   vscode: {
      name: 'Visual Studio Code',
      svg: 'assets/svg/brandstech/vs-code.svg',
      url: 'https://code.visualstudio.com/'
   },
   google_analytics: {
      name: 'Google Analytics',
      svg: 'assets/svg/brandstech/google-analytics.svg',
      url: 'https://analytics.google.com/analytics/web/'
   },
   google_ads: {
      name: 'Google Ads',
      svg: 'assets/svg/brandstech/google-ads.svg', 
      url: 'https://ads.google.com/home/'
   },
   google_search_console: {
      name: 'Google Search Console',
      svg: 'assets/svg/brandstech/google-search-console.svg',
      url: 'https://search.google.com/search-console/about'
   },
   svelte: {
      name: 'Svelte',
      svg: 'assets/svg/brandstech/svelte.svg',
      url: 'https://svelte.dev/'
   },
   react: {
      name: 'React',
      svg: 'assets/svg/brandstech/react.svg',
      url: 'https://reactjs.org/'
   },
   vue: {
      name: 'Vue',
      svg: 'assets/svg/brandstech/vue.svg',
      url: 'https://vuejs.org/'
   },
   astro: {
      name: 'Astro',
      svg: 'assets/svg/brandstech/astro.svg',
      url: 'https://astro.build/'
   },
   tailwind: {
      name: 'Tailwind CSS',
      svg: 'assets/svg/brandstech/tailwind.svg',
      url: 'https://tailwindcss.com/'
   },
   // vite: {
   //    name: 'Vite',
   //    svg: 'assets/svg/brandstech/vite.svg',
   //    url: 'https://vitejs.dev/'
   // },
   vercel: {
      name: 'Vercel',
      svg: 'assets/svg/brandstech/vercel.svg',
      url: 'https://vercel.com/'
   },
   gpt: {
      name: 'OpenAI GPT',
      svg: 'assets/svg/brandstech/gpt.svg',
      url: 'https://openai.com/'
   },
   wordpress: {
      name: 'WordPress',
      svg: 'assets/svg/brandstech/wordpress.svg',
      url: 'https://wordpress.org/'
   },
   php: {
      name: 'PHP',
      svg: 'assets/svg/brandstech/php.svg',
      url: 'https://www.php.net/'
   },
   laravel: {
      name: 'Laravel',
      svg: 'assets/svg/brandstech/laravel.svg',
      url: 'https://laravel.com/'
   },
   mysql: {
      name: 'MySQL',
      svg: 'assets/svg/brandstech/mysql.svg',
      url: 'https://www.mysql.com/'
   },
   postgresql: {
      name: 'PostgreSQL',
      svg: 'assets/svg/brandstech/postgresql.svg',
      url: 'https://www.postgresql.org/'
   },
   firebase: {
      name: 'Firebase',
      svg: 'assets/svg/brandstech/firebase.svg',
      url: 'https://firebase.google.com/'
   },
   unity: {
      name: 'Unity',
      svg: 'assets/svg/brandstech/unity.svg',
      url: 'https://unity.com/'
   },
   blender: {
      name: 'Blender',
      svg: 'assets/svg/brandstech/blender.svg',
      url: 'https://www.blender.org/'
   },
   // threejs: {
   //    name: 'Three.js',
   //    svg: 'assets/svg/brandstech/threejs.svg',
   //    url: 'https://threejs.org/'
   // },
   csharp: {
      name: 'C#',
      svg: 'assets/svg/brandstech/csharp.svg',
      url: 'https://docs.microsoft.com/en-us/dotnet/csharp/'
   },
   python: {
      name: 'Python',
      svg: 'assets/svg/brandstech/python.svg',
      url: 'https://www.python.org/'
   },
   jquery: {
      name: 'jQuery',
      svg: 'assets/svg/brandstech/jquery.svg',
      url: 'https://jquery.com/'
   },
}