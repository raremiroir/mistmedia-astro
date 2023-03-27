module.exports = {
   plugins: [
      require('postcss-import'),
      require('@tailwindcss/nesting')(require('postcss-nested')),
      require('postcss-simple-vars'),
      require('postcss-each'),   // might cause recompile issues
      require('postcss-mixins'),
      require('tailwindcss'),
      require('autoprefixer'),
   ]
 }