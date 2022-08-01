// const { defineConfig } = require('@vue/cli-service');
// module.exports = defineConfig({
//     transpileDependencies: true,
//     css: {
//         sourceMap: true,
//         loaderOptions: {
//             sass: {
//                 additionalData: '@import "@/assets/style/main.sass"',
//             },
//         },
//     },
//     // module: {
//     //     rules: [
//     //         {
//     //             test: /\.s[ac]ss$/i,
//     //             use: [
//     //                 'style-loader',
//     //                 'css-loader',
//     //                 {
//     //                     loader: 'sass-loader',
//     //                     options: {
//     //                         // Prefer `dart-sass`
//     //                         implementation: require('sass'),
//     //                     },
//     //                 },
//     //             ],
//     //         },
//     //     ],
//     // },
// });
module.exports = {
    css: {
        sourceMap: true,
        loaderOptions: {
            sass: {
                // eslint-disable-next-line quotes
                additionalData: `@import "~@/assets/styles/main.scss"`,
            },
        },
    },

    // configureWebpack: {
    //     module: {
    //         rules: [
    //             {
    //                 test: /\.s[ac]ss$/i,
    //                 use: [
    //                     // Creates `style` nodes from JS strings
    //                     'style-loader',
    //                     // Translates CSS into CommonJS
    //                     'css-loader',
    //                     // Compiles Sass to CSS
    //                     {
    //                         loader: 'sass-loader',
    //                         options: {
    //                             indentedSyntax: true,
    //                             implementation: require('sass'),
    //                             // sass-loader >= 8
    //                             sassOptions: {
    //                                 indentedSyntax: true,
    //                             },
    //                         },
    //                         // options: {
    //                         //     // Prefer `dart-sass`
    //                         //     implementation: require('sass'),
    //                         // },
    //                     },
    //                 ],
    //             },
    //         ],
    //     },
    // },
};
