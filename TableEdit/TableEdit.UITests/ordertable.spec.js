describe('oreders table check', function () {

    var url = 'http://localhost:8543/index.html#!/orders';    

    it('should have a table with orders', function () {
        browser.get(url);
        var table = element(by.css('.table-striped'));
        expect(table.all(by.tagName('tr')).count() > 0);
        expect(table.all(by.tagName('tr')).count() == 3);
    });

    it('should have different order after drag and drop column', function () {
        browser.get(url);
        var nameColumn = element(by.id('title-name'));
        var orderDateColumn = element(by.id('title-orderdate'));

        var titles = element.all(by.css('table.table th')).map(function (thItem) {
            return thItem.getText();
        });

        expect(titles).toEqual([
            '#',
            'ID',
            'Name',
            'Description',
            'Count',
            'Price',
            'Discount',
            'Price with discount',
            'Order date',
            'Delivery days count',
            'Delivery date'
        ]);

        browser.actions().dragAndDrop(nameColumn, orderDateColumn).mouseUp().perform();   
        browser.waitForAngular();

        titles = element.all(by.css('table.table th')).map(function (thItem) {
            return thItem.getText();
        });

        expect(titles).toEqual([
            '#',
            'ID',
            'Description',
            'Count',
            'Price',
            'Discount',
            'Price with discount',
            'Order date',
            'Name',
            'Delivery days count',
            'Delivery date'
        ]);       
    });
});