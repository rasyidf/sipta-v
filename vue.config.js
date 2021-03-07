module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "SCIPTA";
                args[0].desc = "Scientific WebToolkit for Data Science Prototyping";
                return args;
            })
    }
}