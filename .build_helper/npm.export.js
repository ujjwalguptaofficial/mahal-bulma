if (process.env.NODE_ENV === 'production') {
    module.exports = require('./mahal-bulma.min.commonjs2.js');
}
else {
    module.exports = require('./mahal-bulma.commonjs2.js');
}
