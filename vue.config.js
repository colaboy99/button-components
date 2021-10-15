module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/button-components/'
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