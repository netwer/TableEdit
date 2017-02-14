describe('oreders table check', function () {

    var TableEditHelper = require('./utils/tableEditHelper');
    var tableEditHelper = new TableEditHelper();

    it('should have a table with orders', function () {
        var table = element(by.css('.table'));
        expect(table.all(by.tagName('tr')).count() > 0);
        expect(table.all(by.tagName('tr')).count() == 3);
    });
});