function TableEditHelper() {

    var url = 'http://localhost:8543/index.html#!/orders';
    var rootPath = '#!/orders';
    browser.driver.manage().window().maximize();

    this.get = function () {
        browser.get(url);
    };

}

module.exports = TableEditHelper;