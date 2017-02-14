describe('oreders settings ', function () {

    var url = 'http://localhost:8543/index.html#!/orders';
    var rootPath = '#!/orders';
    browser.driver.manage().window().maximize();

    it('should have a eleven checkboxes', function () {
        var checkboxes = element(by.css('.col-md-4'));
        expect(checkboxes.all(by.tagName('checkbox')).count() > 0);
        expect(checkboxes.all(by.tagName('checkbox')).count() == 10);
    });

    it('should have selected checkbox if you click on it', function () {
        var idColumn = element(by.name('IdColumn'));
        idColumn.click();
        expect(idColumn.isSelected()).toBeTruthy();
    });
});