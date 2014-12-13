(PLUGIN AUTHOR: Please read [Plugin README conventions](https://github.com/wearefractal/gulp/wiki/Plugin-README-Conventions), then delete this line)

# gulp-resx2
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]  [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][depstat-image]][depstat-url]

> resx2 plugin for [gulp](https://github.com/wearefractal/gulp)

## Usage

First, install `gulp-resx2` as a development dependency:

```shell
npm install --save-dev gulp-resx2
```

Then, add it to your `gulpfile.js`:

```javascript
var resx2 = require("gulp-resx2");

gulp.src("./src/*.ext")
	.pipe(resx2({
		msg: "Hello Gulp!"
	}))
	.pipe(gulp.dest("./dist"));
```

## API

### resx2(options)

#### options.msg
Type: `String`  
Default: `Hello World`

The message you wish to attach to file.


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-resx2
[npm-image]: https://badge.fury.io/js/gulp-resx2.png

[travis-url]: http://travis-ci.org/PaGury/gulp-resx2
[travis-image]: https://secure.travis-ci.org/PaGury/gulp-resx2.png?branch=master

[coveralls-url]: https://coveralls.io/r/PaGury/gulp-resx2
[coveralls-image]: https://coveralls.io/repos/PaGury/gulp-resx2/badge.png

[depstat-url]: https://david-dm.org/PaGury/gulp-resx2
[depstat-image]: https://david-dm.org/PaGury/gulp-resx2.png
