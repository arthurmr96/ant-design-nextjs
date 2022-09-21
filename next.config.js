/** @type {import('next').NextConfig} */

const withLess = require("next-with-less");

module.exports = withLess({
    reactStrictMode: true,
    swcMinify: true,
    lessLoaderOptions: {
        lessOptions: {
            modifyVars: {
                'primary-color': '#1DA57A',
                'link-color': '#1DA57A',
                'border-radius-base': '2px',
            },
            javascriptEnabled: true,
        }
    },
});
