(function () {
    'use strict';

    angular.module('tableEditApp')
        .controller('TableEditController', TableEditController);

    TableEditController.$inject = ['$scope', 'TableEditService'];

    function TableEditController($scope, TableEditService) {
        
        TableEditService.getOrders().then(function (result) {
            $scope.Orders = result;
            $scope.Settings = {
                HideColumn: {
                    Number: false,
                    Id: false,
                    Name: false,
                    Description: false,
                    Count: false,
                    Price: false,
                    Discount: false,
                    PriceWithDiscount: false,
                    OrderDate: false,
                    DeliveryDaysCount: false,
                    DeliveryDate: false,
                }
                
            };
        });

        $scope.hideColumn = function ($event, column) {
            $scope.Settings.HideColumn[column] = $event.target.checked;
        }
    }
})();