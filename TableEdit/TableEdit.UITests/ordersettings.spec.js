describe('oreders settings ', function () {

    var url = 'http://localhost:8543/index.html#!/orders';
    var rootPath = '#!/orders';
    browser.driver.manage().window().maximize();

    it('should have checkboxes', function () {
        browser.get(url);
        var checkboxes = element(by.css('.col-md-4'));
        expect(checkboxes.all(by.tagName('checkbox')).count() > 0);
        expect(checkboxes.all(by.tagName('checkbox')).count() == 10);
    });

    it('should have selected checkbox if you click on it', function () {
        browser.get(url);
        var idCheckbox = element(by.name('IdColumn'));
        idCheckbox.click();
        browser.waitForAngular();
        expect(idCheckbox.isSelected()).toBeTruthy();
    });

    it('should hide column Name if checkbox Name checked', function () {
        browser.get(url);
        var nameCheckbox = element(by.name('NameColumn'));
        var nameColumn = element(by.id('title-name'));
        var nameCells = element.all(by.css('.cell-name'));

        expect(nameColumn.getAttribute('class')).not.toMatch('ng-hide');
        nameCells.then(function(rawelements) {
            for (var i = 0; i < rawelements.length; ++i) {
                expect(rawelements[i].getAttribute('class')).not.toMatch('ng-hide');                
            }
        });

        nameCheckbox.click();
        browser.waitForAngular();

        expect(nameColumn.getAttribute('class')).toMatch('ng-hide');
        nameCells.then(function (rawelements) {
            for (var i = 0; i < rawelements.length; ++i) {
                expect(rawelements[i].getAttribute('class')).toMatch('ng-hide');
            }
        });
    });
});