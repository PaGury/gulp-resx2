/*global describe, it*/
"use strict";

var fs = require("fs"),
	es = require("event-stream"),
	should = require("should");

require("mocha");

delete require.cache[require.resolve("../")];

var gutil = require("gulp-util"),
	resx2 = require("../");

describe("gulp-resx2", function () {

	var expectedFile = new gutil.File({
		path: "test/expected/resource.json",
		cwd: "test/",
		base: "test/expected",
		contents: fs.readFileSync("test/expected/resource.json")
	});

	it("should produce expected file via buffer", function (done) {

		var srcFile = new gutil.File({
			path: "test/fixtures/resource.resx",
			cwd: "test/",
			base: "test/fixtures",
			contents: fs.readFileSync("test/fixtures/resource.resx")
		});

		var stream = resx2(srcFile);

		stream.on("error", function(err) {
			should.exist(err);
			done(err);
		});

		stream.on("data", function (newFile) {

			should.exist(newFile);
			should.exist(newFile.contents);

			String(newFile.contents).should.equal(String(expectedFile.contents));
			done();
		});

		stream.write(srcFile);
		stream.end();
	});

	it("should error on stream", function (done) {

		var srcFile = new gutil.File({
			path: "test/fixtures/resource.resx",
			cwd: "test/",
			base: "test/fixtures",
			contents: fs.createReadStream("test/fixtures/resource.resx")
		});

		var stream = resx2(srcFile);

		stream.on("error", function(err) {
			should.exist(err);
			done();
		});

		stream.on("data", function (newFile) {
			newFile.contents.pipe(es.wait(function(err, data) {
				done(err);
			}));
		});

		stream.write(srcFile);
		stream.end();
	});
});
