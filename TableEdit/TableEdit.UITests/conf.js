﻿exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub', 
    capabilities: {
        'browserName': 'chrome'
    }, 
    
    // Spec patterns are relative to the current working directly when 
    // protractor is called. 
    specs: ['orderpage.spec.js', 'ordertable.spec.js', 'ordersettings.spec.js'], 
    
    // Options to be passed to Jasmine-node. 
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 90000
    }
};