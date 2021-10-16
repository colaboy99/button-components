module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/design-system/'
    : '/',

    css: {
        loaderOptions: {
            sass: {
                data: `
                    @import "@/assets/scss/website.scss"; 
                `
            }
        }
    }
};