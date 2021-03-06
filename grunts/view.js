module.exports = function(builder) {
    var TASK_NAME = 'view';
    builder
        .addModule('grunt-contrib-stylus')

        .addConfig('stylus', 'options', {
            use: [
                function() {
                    return require('autoprefixer-stylus')(
                        "ff >= 20",
                        "chrome >= 20",
                        "safari >= 6",
                        "ios >= 6",
                        "android >= 4",
                        "opera >= 12.1",
                        "ie >= 10"
                    );
                }
            ],
            import: [
                //'<%= publicPath %>/import/stylus/variables.styl',
                //'<%= publicPath %>/import/stylus/functions.styl',
                //'<%= publicPath %>/import/stylus/mixins.styl'
            ]
        })
        .addConfig('stylus', 'compile', {
            files: {
                '<%= compilePath %>/css/all.css': [
                    '<%= publicPath %>/**/*.styl'
                ]
            }
        })
        .addConfig('watch', 'stylus', {
            files: '<%= publicPath %>/**/*.styl',
            tasks: 'stylus:compile'
        })

        .createTask(TASK_NAME, ['stylus:compile'])

    return TASK_NAME;
};
