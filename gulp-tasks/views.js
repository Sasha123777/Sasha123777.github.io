"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import include from "gulp-file-include";
import gulpif from "gulp-if";
import replace from "gulp-replace";
import browsersync from "browser-sync";
import yargs from "yargs";
import hogan from 'gulp-hogan';


const argv = yargs.argv,
    production = !!argv.production;

gulp.task("views", () => {
    return gulp.src(paths.views.src)
        .pipe(hogan({}, null, '.html'))
        .pipe(gulpif(production, replace(/("((?<!http)(\w|\/|)+)(\.css)")/g, '"$2$4?v=' + +(new Date()) + '"')))
        .pipe(gulpif(production, replace(/("((?<!http)(\w|\/|)+)(\.js)")/g, '"$2$4?v=' + +(new Date()) + '"')))
        .pipe(gulp.dest(paths.views.dist))
        .pipe(browsersync.stream());
});