describe('order homepage', function () {

    var url = 'http://localhost:8543/index.html#!/orders';
    var rootPath = '#!/orders';
    browser.driver.manage().window().maximize();

    it('should have a title', function () {
        browser.get(url);
        expect(browser.getTitle()).toEqual('Orders');        
    });

    it('should contains order path in url', function () {
        var url = browser.getCurrentUrl();
        expect(url).toMatch('/orders');
    });
});