const path = require('path');
const baseConfig = require('./lib.config');
const { merge } = require('webpack-merge');
const webpack = require("webpack");

const libraryTarget = [{
    type: "var",
    name: 'mahal-bulma.min.js'
}, {
    type: "commonjs2",
    name: 'mahal-bulma.min.commonjs2.js'
}];

function getConfigForTaget(target) {
    return {
        devtool: 'source-map',
        output: {
            filename: target.name,
            library: target.type === 'var' ? 'mahalBulma' : undefined,
            libraryTarget: target.type
        },
        plugins: [
            // new webpack.DefinePlugin({
            //     'process.env.NODE_ENV': "'production'",
            // })
        ]
    }
}

function createConfigsForAllLibraryTarget() {
    var configs = [];
    libraryTarget.forEach(function (target) {
        configs.push(merge(baseConfig, getConfigForTaget(target)));
    })
    return configs;
}

module.exports = [...createConfigsForAllLibraryTarget()]