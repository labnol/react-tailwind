const { src, dest, task, parallel } = require('gulp');
const inlinesource = require('gulp-inline-source');
const replace = require('gulp-replace');
const rename = require('gulp-rename');

let scriptLink = '';

task('inlineReact', () =>
  src('./build/index.html')
    .pipe(replace(/(\w+)="\/static/g, 'inline $1="/static'))
    .pipe(
      replace(/<script.+?static.+?<\/script>/g, (match) => {
        scriptLink = match.replace(/defer.+?\s/, '');
        return '';
      })
    )
    .pipe(replace(/(<\/body>)/g, (match) => scriptLink + match))
    .pipe(inlinesource())
    .pipe(rename('dist.html'))
    .pipe(dest('./build'))
);

exports.default = parallel('inlineReact');
