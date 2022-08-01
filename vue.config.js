const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    transpileDependencies: true,
    css: {
        sourceMap: true,
        loaderOptions: {
            sass: {
                // eslint-disable-next-line quotes
                additionalData: `@import "~@/assets/styles/main.scss";`,
            },
        },
    },
});
