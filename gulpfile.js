

var gulp            = require('gulp'),
    gulpPostcss     = require('gulp-postcss'),
    uglify          = require('gulp-uglify'),
    del             = require('del'),
    autoprefixer    = require('gulp-autoprefixer'),
    cssdeclsort     = require('css-declaration-sorter'),
    pngquant        = require('imagemin-pngquant'),
    csslint         = require('gulp-csslint');



gulp.task('clear-build', function() {
    del.sync('build');
});

// build tasks

gulp.task('build_styles', function() {
    del.sync('build/styles');

    gulp.src('app/styles/*.css')
        .pipe(autoprefixer(['last 2 versions', '> 1%', 'ie 11'], { cascade: true }))
        // .pipe(csslint())
        // .pipe(csslint.formatter())
        .pipe(gulpPostcss([cssdeclsort({order: 'source'})]))
        .pipe(gulp.dest('build/styles'));
});


gulp.task('build_fonts', function() {
    del.sync('build/fonts');

    gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('build/fonts'));
});


gulp.task('build_images', function() {
    gulp.src('app/images/**/*')
        //
        .pipe(gulp.dest('build/images'));
});

gulp.task('build_js', function() {
    del.sync('build/scripts');

    gulp.src('app/scripts/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/scripts'));
});

gulp.task('build_html', function() {

    gulp.src('app/*.html')
        .pipe(gulp.dest('build'));
});


gulp.task('build', ['clear-build', 'build_images', 'build_fonts', 'build_styles', 'build_js', 'build_html']);




