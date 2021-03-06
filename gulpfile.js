var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var rev = require('gulp-rev');
var less = require('gulp-less');
var del = require('del');
var uglify = require('gulp-uglify');
var jshint = require("gulp-jshint");

gulp.task('default', ['lessWatch', 'jsWatch', 'jsLint']);

// less 打包编译压缩
gulp.task('less-minify', () => {
  gulp.src('./www/less/*.less')
  .pipe(less())
  .pipe(concat('all.css'))
  .pipe(minifyCss())
  // .pipe(rev())
  .pipe(gulp.dest('./www/css'))
  .pipe(rev.manifest())
  .pipe(gulp.dest('./www/less'));
});

gulp.task('deleteCss', () => del(['./www/css/*.css']))
// 监听less 文件改变
gulp.task('lessWatch', () => gulp.watch('./www/less/*.less', ['deleteCss', 'less-minify']));

// Js 打包编译压缩
gulp.task("js-minify" ,() =>{
    // 把1.js和2.js合并压缩为main.js，输出到dest/js目录下
    gulp.src('./www/js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./www/build'));
})

gulp.task('deleteJs', () => del(['./www/build/*.js']));

gulp.task('jsWatch', () => gulp.watch('./www/js/*.js', ['deleteJs', 'js-minify']));

//检测js语法错误
gulp.task('jsLint', () => {
  gulp.src('./www/js/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter()); // 输出检查结果
});

gulp.task('watch', [
  'watch:lint'
]);
