// Requirejs
require.config({
    baseUrl: '../src',
    paths: {
        'mocha'         : '../node_modules/mocha/mocha',
        'chai'          : '../node_modules/chai/chai'
    },
    shim: {}
});


// Mocha
mocha.setup({
    ui: 'bdd'
});
mocha.bail(false);

//Chai
var assert = chai.assert;
var expect = chai.expect;


require(['unit/test1Spec.js'], function() {
    if (window.mochaPhantomJS) {
        console.log("Phantom");
        mochaPhantomJS.run();
    }
    else {
        mocha.run();
    }
});
