const gulp = require("gulp");

const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");

// JS related plugins
const uglify = require("gulp-uglify");
const babelify = require("babelify");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const stripDebug = require("gulp-strip-debug");

// Utility plugins
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");
const plumber = require("gulp-plumber");
const options = require("gulp-options");
const gulpif = require("gulp-if");

// Browers related plugins
const browserSync = require("browser-sync").create();
const reload = browserSync.reload;

// Project related variables
const styleSRC = "app/scss/style.scss";
const styleURL = "public/dist/";
const mapURL = "./";

const jsSRC = "app/js/";
const jsFront = "main.js";
const jsFiles = [jsFront];
const jsURL = "public/dist";

const htmlSRC = "*.html";
const htmlURL = "public/";

const styleWatch = "app/scss/**/*.scss";
const jsWatch = "app/js/**/*.js";
const htmlWatch = "*.html";

gulp.task("css", function (done) {
  gulp
    .src([styleSRC])
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        errLogToConsole: true,
        outputStyle: "compressed",
        includePaths: ["node_modules"],
      })
    )
    .on("error", console.error.bind(console))
    .pipe(autoprefixer())
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write(mapURL))
    .pipe(gulp.dest(styleURL))
    .pipe(browserSync.stream());

  done();
});

gulp.task("reload", function (done) {
  reload();
  done();
});

gulp.task("css-watch", gulp.series("css", "reload"));

gulp.task("js", function (done) {
  jsFiles.map(function (entry) {
    return browserify({
      entries: [jsSRC + entry],
    })
      .transform(babelify, { presets: ["@babel/preset-env"] })
      .bundle()
      .pipe(source(entry))
      .pipe(
        rename({
          extname: ".min.js",
        })
      )
      .pipe(buffer())
      .pipe(gulpif(options.has("production"), stripDebug()))
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(uglify())
      .pipe(sourcemaps.write("."))
      .pipe(gulp.dest(jsURL))
      .pipe(browserSync.stream());
  });
  done();
});

gulp.task("js-watch", gulp.series("js", "reload"));

gulp.task("html", function (done) {
  gulp.src(htmlSRC).pipe(plumber()).pipe(gulp.dest(htmlURL));
  done();
});

gulp.task("html-watch", gulp.series("html", "reload"));

gulp.task("build", gulp.series("html", "css", "js"), function (done) {
  done();
});

gulp.task("watch", function (done) {
  gulp.watch(jsWatch, gulp.series("js-watch"));
  gulp.watch(styleWatch, gulp.series("css-watch"));
  gulp.watch(htmlWatch, gulp.series("html-watch"));
  done();
});

gulp.task("browser-sync", function (done) {
  browserSync.init({
    server: {
      baseDir: "./dist/",
    },
  });
  done();
});

gulp.task("default", gulp.series("build", "browser-sync", "watch"));
