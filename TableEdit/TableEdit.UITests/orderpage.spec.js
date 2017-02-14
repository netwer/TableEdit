describe('order homepage', function () {

    var TableEditHelper = require('./utils/tableEditHelper');
    var tableEditHelper = new TableEditHelper();
    var url = 'http://localhost:8543/index.html#!/orders';

    it('should have a title', function () {
        browser.get(url);
        expect(browser.getTitle()).toEqual('Orders');        
    });

    it('should contains order path in url', function () {
        var url = browser.getCurrentUrl();
        expect(url).toMatch('/orders');
    });
});