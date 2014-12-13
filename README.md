# gulp-resx2 [![NPM version][npm-image]][npm-url] [![Build status][travis-image]][travis-url]
> A resx file converter plugin for gulp, convert xml based resources files to json

## Usage

First, install `gulp-resx2` as a development dependency:

```shell
npm install --save-dev gulp-resx2
```

Then, add it to your `gulpfile.js`:

```javascript
var resx2 = require('gulp-resx2');

gulp.task('resources', function(){
  gulp.src(['resource.resx'])
    .pipe(resx2())
    .pipe(gulp.dest('resources/resource.json'));
});
```
[travis-url]: http://travis-ci.org/PaGury/gulp-resx2
[travis-image]: https://secure.travis-ci.org/PaGury/gulp-resx2.svg?branch=master
[npm-url]: https://npmjs.org/package/gulp-resx2
[npm-image]: https://badge.fury.io/js/gulp-resx2.svg
