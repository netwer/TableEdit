(function () {
    'use strict';

    angular.module('tableEditApp')
        .factory('TableEditService', TableEditService);

    TableEditService.$inject = ['$http'];

    function TableEditService($http) {
        var service = {
            getOrders: getOrders
        };

        return service;

        function getOrders() {
            return $http.get('/api/orders').then(function (response) {
                return response.data;
            }, function (x) {
                console.log(x);
            });
        }
    }
})();