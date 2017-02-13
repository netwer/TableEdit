describe('angularjs homepage title check', function () {

    var url = 'http://localhost:8543/index.html#!/orders';
    var rootPath = '#!/orders';
    browser.driver.manage().window().maximize();

    it('should have a title', function() {
        browser.get(url);
        expect(browser.getTitle()).toEqual('Orders');
        browser.debugger();
    });

    it('should have a table with orders', function () {
        var table = element(by.css('.table'));
        expect(table.all(by.tagName('tr')).count() > 0);
        expect(table.all(by.tagName('tr')).count() == 3);
    });
});