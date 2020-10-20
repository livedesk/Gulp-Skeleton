const gulp = require('gulp');
const uglify = require('gulp-uglify'); //https://www.npmjs.com/package/gulp-uglify - Compresses file
const livereload = require('gulp-livereload'); // Also Need to install live reload extension to chrome
const concat = require('gulp-concat'); // Combiles multiple files into one
const cleanCSS = require('gulp-clean-css'); // replaces gulp-minify-css to minify css
const sourcemaps = require('gulp-sourcemaps'); // to see where files are in browser inspector
const plumber = require('gulp-plumber'); // Prevent pipe breaking caused by errors from gulp plugins
const autoprefixer = require('gulp-autoprefixer'); // Adds in prefix for prowsers (-webkit etc)
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const del = require('del');
const zip = require('gulp-zip');
const php = require('gulp-connect-php');
const color = require('gulp-color');
// Less plugins
const less = require('gulp-less');
const LessAutoprefix = require('less-plugin-autoprefix');
const lessAutoprefix = new LessAutoprefix({
    browsers: ['last 2 versions']
});

const open = require('gulp-open');

// Image compression
const imagemin = require('gulp-imagemin');
const imonageminPngquant = require('imagemin-pngquant');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');

// File paths
const DIST_PATH = 'public/dist';
const SCRIPTS_PATH = 'public/scripts/**/*.js';
const CSS_PATH = 'public/css/**/*.css';
const SCSS_PATH = 'public/scss/**/*.scss';
const LESS_PATH = 'public/less/**/*.less'
const PHP_PATH = 'public/*.PHP';
const TEMPLATES_PATH = 'templates/**/*.hbs';
const IMAGES_PATH = 'public/images/**/*.{png,jpeg,jpg,svg,gif}';

// Handlebars plugins
const handlebars = require('gulp-handlebars');
const handlebarsLib = require('handlebars');
const declare = require('gulp-declare');
const wrap = require('gulp-wrap');


// Global Settings
const PORT = 8081;

// Styles For SCSS
gulp.task('styles', function() {
    console.log('Starting styles task');
    return gulp.src('public/scss/styles.scss')  // array to allow css file ordering
        // Plumber for error handling 
        .pipe(sass())
        .pipe(plumber(function (err){
            console.log('Styles Task Error');
            console.log(err);
            this.emit('end');
        }))
        .pipe(sourcemaps.init())
        .pipe(autoprefixer())    
         .pipe(cleanCSS())                        
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(DIST_PATH))
        .pipe(livereload());
});

// Scripts
gulp.task('scripts', function() {
    return gulp.src(SCRIPTS_PATH)
        .pipe(plumber(function (err){
            console.log('Scripts Task Error');
            console.log(err);
            this.emit('end');
        }))    
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))        
        .pipe(uglify())        
        .pipe(concat('scripts.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(DIST_PATH))
        .pipe(livereload()); 
        
});
// Images
gulp.task('images', function() {
    return gulp.src(IMAGES_PATH)
        .pipe(imagemin(
            [
                imagemin.gifsicle(),
                imagemin.jpegtran(),
                imagemin.optipng(),
                imagemin.svgo(),
                imonageminPngquant(),
                imageminJpegRecompress()
            ]
        ))
        .pipe(gulp.dest(DIST_PATH + '/images'))
});

// Templates
gulp.task('templates', function() {
    return gulp.src(TEMPLATES_PATH)
        .pipe(handlebars({
            handlebars: handlebarsLib
        }))
        .pipe(wrap('Handlebars.template(<%= contents %>)'))  // this registers the template
        .pipe(declare({
            namespace: 'templates', // gives access to the template
            noRedeclare: true
        }))
        .pipe(concat('templates.js'))
        .pipe(gulp.dest(DIST_PATH))
        .pipe(livereload()); 
});

// Cleanup - Delete files / folders
gulp.task('clean', function(){
    return del.sync([
        DIST_PATH
    ]);
});

// Export Website (Only public folder for now)
gulp.task('export', function(){
    return gulp.src('public/**/*')
        .pipe(zip('website.zip'))
        .pipe(gulp.dest('./'))
});

// Default Gulp - Runs by typing just gulp
gulp.task('default', ['clean', 'images', 'templates', 'styles', 'scripts', 'php'], function(){
});

// watch - main entry point, runs default task first
gulp.task('watch', ['default'], function() {   
    console.log(color('initialising, please wait...', 'YELLOW'));   
    livereload.listen(); 
    
    gulp.watch(SCSS_PATH, ['styles']);   
    gulp.watch(SCRIPTS_PATH, ['scripts']);
    gulp.watch(TEMPLATES_PATH, ['templates']);    
    gulp.watch('**/*.php').on('change', function(file) {       
        livereload.changed(file.path);
    });

    gulp.src('')
        .pipe(open({app: 'chrome', uri: 'http://localhost:' + PORT}));

    console.clear();
    console.log(color('server running on localhost:' + PORT + '...', 'YELLOW'));
});

gulp.task('php', function(){
    php.server({base:'./public/', port:PORT, keepalive:true});
});