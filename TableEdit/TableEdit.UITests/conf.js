exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub', 
    capabilities: {
        'browserName': 'chrome'
    },     
    specs: [
        'orderpage.spec.js',
        'ordertable.spec.js',
        'ordersettings.spec.js'
    ],
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 90000
    }
};