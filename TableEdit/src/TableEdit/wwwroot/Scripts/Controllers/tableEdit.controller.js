(function () {
    'use strict';

    angular.module('tableEditApp')
        .controller('TableEditController', TableEditController);

    TableEditController.$inject = ['$scope', 'TableEditService'];

    function TableEditController($scope, TableEditService) {
        var vm = this;
        vm.orders = null;

        TableEditService.getOrders().then(function (result) {
            $scope.Orders = result;
        });
    }
})();
