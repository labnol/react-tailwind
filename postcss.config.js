// https://tailwindcss.com/docs/configuration/

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    process.env.NODE_ENV === 'production' &&
      require('@fullhuman/postcss-purgecss')({
        content: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx'],
        defaultExtract: content => content.match(/[\w-/.:]+(?<!:)/g) || [],
      }),
  ],
};
