const gulp = require("gulp");
const scss = require("gulp-sass");


// 处理css
gulp.task("scssAll",function () {
    return gulp.src("css/*.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})
// 处理js
gulp.task("scripts",function () {
    return gulp.src("js/*.js")
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
})

// 处理html
gulp.task("copy-html",function () {
    return gulp.src("*.html")
    .pipe(gulp.dest("dist"))
    .pipe(connect.reload());
})
// 处理json数据
gulp.task("data",function () {
    return gulp.src(["*.json","!package.json"])
    .pipe(gulp.dest("dist/data"))
    .pipe(connect.reload());
})
// 处理图片
gulp.task("images",function () {
    return gulp.src("images/**/*")
    .pipe(gulp.dest("dist/images"))
    .pipe(connect.reload());
})

// 一次性执行多个任务

gulp.task("build",["scripts","copy-html","data","scssAll","images"],function () {
    console.log("项目建立成功");
})

gulp.task("watch",function () {
    gulp.watch("css/*.scss",["scssAll"]);
    gulp.watch("js/*.js",["scripts"]);
    gulp.watch("*.html",["copy-html"]);
    gulp.watch(["*.json","!package.json"],["data"]);
    gulp.watch("images/**/*",["images"]);

})


// 启动服务器
const connect = require("gulp-connect");
gulp.task("server",function () {
    connect.server({
        root:"dist",
        port:8887,
        livereload:true
    })
})

// 启动一个默认的任务
gulp.task("default",["watch","server"]);