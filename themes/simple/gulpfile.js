var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var plumber = require("gulp-plumber");

// SCSS
gulp.task("scss", function () {
    gulp.src("src/scss/**/*.scss")
        .pipe(plumber())
        .pipe(sass({outputStyle : "expanded"}))
        .pipe(autoprefixer({browsers : ["last 20 versions"]}))
        .pipe(gulp.dest("static/css"))
})


// JS (if any)
gulp.task("js", function () {
    gulp.src("src/js/**/*")
        .pipe(plumber())
        .pipe(gulp.dest("static/js"))
})



// Watch for changes
gulp.task("watch", ["scss", "js"], function () {
    gulp.watch("src/scss/**/*", ["scss"])
    gulp.watch("src/js/**/*", ["js"])
})

// Default task
gulp.task("default", ["watch"])
