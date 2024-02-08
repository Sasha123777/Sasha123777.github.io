"use strict";

import gulp from "gulp";

const requireDir = require("require-dir"),
    paths = {
        views: {
            src: [
                "./src/templates/*.hogan",
            ],
            dist: "./dist/",
            watch: [
                "./src/templates/**/*.hogan"
            ],
            vars: "./src/templates/index.json"
        },
        styles: {
            src: "./src/styles/pages/*.{scss,sass}",
            dist: "./dist/css/",
            watch: [
                "./src/blocks/**/*.{scss,sass}",
                "./src/styles/**/*.{scss,sass}",
                "./src/scss/**/*.{scss,sass}"
            ]
        },
        scripts: {
            src: "./src/js/app.js",
            dist: "./dist/js/",
            watch: [
                "./src/blocks/**/*.js",
                "./src/js/**/*.js"
            ]
        },
        images: {
            src: [
                "./src/images/**/*.{jpg,jpeg,png,gif,tiff,svg}",
                "!./src/images/favicon/*.{jpg,jpeg,png,gif,tiff}",
                "!./src/images/sequence/*.{jpg,jpeg,png,gif,tiff}"
            ],
            dist: "./dist/images/",
            watch: "./src/images/**/*.{jpg,jpeg,png,gif,svg,tiff}"
        },
        sprites: {
            src: "./src/images/svg/*.svg",
            dist: "./dist/images/sprites/",
            watch: "./src/images/svg/*.svg"
        },
        fonts: {
            src: "./src/fonts/**/*.{woff,woff2,ttf,otf}",
            dist: "./dist/fonts/",
            watch: "./src/fonts/**/*.{woff,woff2,ttf,otf}"
        }
    };

requireDir("./gulp-tasks/");

export { paths };

export const development = gulp.series("clean",
    gulp.parallel(["views", "styles", "scripts", "images", "webp", "sprites", "fonts"]),
    gulp.parallel("serve"));

export const prod = gulp.series("clean",
    gulp.parallel(["views", "styles", "scripts", "images", "webp", "sprites", "fonts"]));


export default development;
