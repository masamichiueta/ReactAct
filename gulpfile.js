var eslint = require('gulp-eslint'),
    del = require('del'),
    gulp = require('gulp'),
    gutil = require("gulp-util"),
    webpack = require('webpack'),
    WebpackDevServer = require("webpack-dev-server"),
    webpackConfig = require('./webpack.config.js');

var files = {
    app: [ 'src/**/*.js', 'src/**/*.jsx'],
    libraries: [
        './node_modules/font-awesome/@(css|fonts)/*',
        './node_modules/bootstrap/dist/@(css|js)/*',
        './node_modules/tether/dist/@(css|js)/*',
        './node_modules/jquery/dist/*'
    ]
};

var destination = './public';

gulp.task('clean', function(callback) {
  del([destination + '/**']).then(paths => {
    console.log('Deleted files and folders:\n', paths.join('\n'));
    callback();
  });
});

gulp.task('build', [
    'libraries:copy',
    'webpack:build'
]);

gulp.task('serve', [
    "webpack:dev-server"
]);

gulp.task('libraries:copy', function () {
    return gulp.src(files.libraries, { base: './node_modules' })
        .pipe(gulp.dest(destination + '/lib'));
});

gulp.task('webpack:lint', function () {
    return gulp.src(files.app)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('webpack:build', function(callback) {
  webpack(webpackConfig, function (err, stats) {
    if(err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack:build]", stats.toString({
			colors: true
		}));
    callback();
  });
});

gulp.task("webpack:dev-server", function(callback) {
    var compiler = webpack(webpackConfig);

    new WebpackDevServer(compiler, {
        hot: true,
        inline: true,
        progress: true,
        stats: {
			       colors: true
		    }
    }).listen(8080, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        gutil.log("[webpack-dev-server]", "http://localhost:8080/index.html");

        callback();
    });
});
